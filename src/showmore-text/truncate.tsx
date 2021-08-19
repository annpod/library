import React, { Component } from 'react';

export class Truncate extends Component<any> {

  state = { targetWidth: 0 };

  private elements: any;
  private timeout: any;
  private canvasContext: any;

  constructor(args: any) {
    super(args);
    this.elements = {};
  }

  componentDidMount() {
    const {
      elements: { text }
    } = this;

    const canvas = document.createElement('canvas');
    this.canvasContext = canvas.getContext('2d');

    this.calcTargetWidth(() => {
      // Node not needed in document tree to read its content
      if (text) {
        text.parentNode.removeChild(text);
      }
    });

    window.addEventListener('resize', this.onResize);
  }

  componentDidUpdate(prevProps: any) {
    // Render was based on outdated refs and needs to be rerun
    if (this.props.children !== prevProps.children || this.props.update !== prevProps.update) {
      this.forceUpdate();
    }

    // If the width prop has changed, recalculate size of contents
    if (this.props.width !== prevProps.width) {
      this.calcTargetWidth();
    }
  }

  componentWillUnmount() {
    const {
      elements: { ellipsis },
      timeout
    } = this;

    if (ellipsis && ellipsis.parentNode) {
      ellipsis.parentNode.removeChild(ellipsis);
    }
    window.removeEventListener('resize', this.onResize);
    window.cancelAnimationFrame(timeout);
  }

  // Shim innerText to consistently break lines at <br/> but not at \n
  innerText = (node: any) => {
    const div = document.createElement('div');
    const contentKey =
      'innerText' in window.HTMLElement.prototype ? 'innerText' : 'textContent';

    div.innerHTML = node.innerHTML.replace(/\r\n|\r|\n/g, ' ');

    let text = div[contentKey];

    const test = document.createElement('div');
    test.innerHTML = 'foo<br/>bar';
    if (!contentKey || !test) { return }
    if (test[contentKey]?.replace(/\r\n|\r/g, '\n') !== 'foo\nbar') {
      div.innerHTML = div.innerHTML.replace(/<br.*?[\/]?>/gi, '\n');
      text = div[contentKey];
    }

    return text;
  };

  onResize = () => {
    this.calcTargetWidth();
  };

  onTruncate = (didTruncate: any) => {
    const { onTruncate } = this.props;

    if (typeof onTruncate === 'function') {
      this.timeout = window.requestAnimationFrame(() => {
        onTruncate(didTruncate);
      });
    }
  };
  // @ts-ignore
  calcTargetWidth = (callback?: any) => {
    const {
      elements: { target },
      canvasContext,
      props: { width }
    } = this;

    // Calculation is no longer relevant, since node has been removed
    if (!target) {
      return;
    }

    const targetWidth =
      width ||
      // Floor the result to deal with browser subpixel precision
      Math.floor(target.parentNode.getBoundingClientRect().width);

    // Delay calculation until parent node is inserted to the document
    // Mounting order in React is ChildComponent, ParentComponent
    if (!targetWidth) {
      return window.requestAnimationFrame(() => this.calcTargetWidth(callback));
    }

    const style = window.getComputedStyle(target);

    const font = [
      style['font-weight'],
      style['font-style'],
      style['font-size'],
      style['font-family']
    ].join(' ');

    canvasContext.font = font;
    this.setState(
      {
        targetWidth
      },
      callback
    );
  };

  measureWidth = (text: string) => {
    return this.canvasContext.measureText(text).width;
  };

  ellipsisWidth = (node: any) => {
    return node.offsetWidth;
  };

  trimRight = (text: any) => {
    return text.replace(/\s+$/, '');
  };

  getLines = () => {
    const {
      elements,
      props: { lines: numLines, ellipsis, trimWhitespace },
      state: { targetWidth },
    } = this;

    const lines = [];
    const text = this.innerText(elements.text);
    if (!text) {
      return;
    }
    const textLines = text.split('\n').map((line) => line.split(' '));
    let didTruncate = true;
    const ellipsisWidth = this.ellipsisWidth(this.elements.ellipsis);

    for (let line = 1; line <= numLines; line++) {
      const textWords = textLines[0];

      // Handle newline
      if (textWords.length === 0) {
        lines.push();
        textLines.shift();
        line--;
        continue;
      }

      let resultLine: any = textWords.join(' ');

      if (this.measureWidth(resultLine) <= targetWidth) {
        if (textLines.length === 1) {
          // Line is end of text and fits without truncating
          didTruncate = false;

          lines.push(resultLine);
          break;
        }
      }

      if (line === numLines) {
        // Binary search determining the longest possible line inluding truncate string
        const textRest = textWords.join(' ');

        let lower = 0;
        let upper = textRest.length - 1;

        while (lower <= upper) {
          const middle = Math.floor((lower + upper) / 2);

          const testLine = textRest.slice(0, middle + 1);
          if (this.measureWidth(testLine) + ellipsisWidth <= targetWidth) {
            lower = middle + 1;
          } else {
            upper = middle - 1;
          }
        }
        let lastLineText = textRest.slice(0, lower);
        if (trimWhitespace) {
          lastLineText = this.trimRight(lastLineText);

          // Remove blank lines from the end of text
          while (!lastLineText.length && lines.length) {
            const prevLine = lines.pop();

            lastLineText = this.trimRight(prevLine);
          }
        }

        resultLine = (
          <span>
            {lastLineText}
            {ellipsis}
          </span>
        );

      } else {
        // Binary search determining when the line breaks
        let lower = 0;
        let upper = textWords.length - 1;

        while (lower <= upper) {
          const middle = Math.floor((lower + upper) / 2);

          const testLine = textWords.slice(0, middle + 1).join(' ');
          if (this.measureWidth(testLine) <= targetWidth) {
            lower = middle + 1;
          } else {
            upper = middle - 1;
          }
        }

        // The first word of this line is too long to fit it
        if (lower === 0) {
          // Jump to processing of last line
          line = numLines - 1;
          continue;
        }

        resultLine = textWords.slice(0, lower).join(' ');
        textLines[0].splice(0, lower);
      }

      lines.push(resultLine);
    }

    this.onTruncate(didTruncate);

    return lines;
  }

  renderLine = (line: any, i: number, arr: any) => {
    if (i === arr.length - 1) {
      return <span key={i}>{line}</span>;
    } else {
      const br = <br key={i + 'br'} />;

      if (line) {
        return [<span key={i}>{line}</span>, br];
      } else {
        return br;
      }
    }
  };

  render() {
    const {
      elements: { target },
      props: { children, ellipsis, lines, ...spanProps },
      state: { targetWidth },
    } = this;

    let text;

    const mounted = !!(target && targetWidth);

    if (typeof window !== 'undefined' && mounted) {
      if (lines > 0) {
        const line = this.getLines();
        text = line ? line.map(this.renderLine) : null;
      } else {
        text = children;

        this.onTruncate(false);
      }
    }
    // @ts-ignore
    delete spanProps.onTruncate;
    // @ts-ignore
    delete spanProps.trimWhitespace;
    // @ts-ignore
    delete spanProps.width;

    return (
      <span
        {...spanProps}
        ref={(targetEl) => {
          this.elements.target = targetEl;
        }}
      >
        <span>{text}</span>
        <span
          ref={(textEl) => {
            this.elements.text = textEl;
          }}
        >
          {children}
        </span>
        <span
          ref={(ellipsisEl) => {
            this.elements.ellipsis = ellipsisEl;
          }}
          // @ts-ignore
          style={this.styles.ellipsis}
        >
          {ellipsis}
        </span>
      </span>
    );
  }

  styles = {
    ellipsis: {
      position: 'fixed',
      visibility: 'hidden',
      top: 0,
      left: 0
    }
  };
}
