import React, { useState } from 'react';
import styled from 'styled-components';
import { Truncate } from './truncate';
import { IShowMoreText } from '../typings'

export const ShowMoreText = (props: IShowMoreText) => {
  const [isExpanded, setIsExpanded] = useState(props.expanded);
  const [isTruncated, setIsTruncated] = useState(false);

  const handleTruncate = (truncated: boolean) => {
    if (isTruncated !== truncated) {
      setIsTruncated(truncated);
    }
  }

  const toggleLines = (event: any) => {
    event.preventDefault();
    setIsExpanded(!isExpanded)
  }

  const { lines, more, less, width, children, floatLine } = props;

  const moreText = more || "Show More";
  const lessText = less || "Show Less";
  const [isShowButton, setIsShowButton] = React.useState(false);
  const [height, setHeight] = React.useState<any>();
  const container = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (!floatLine) {
      return;
    }
    if (container.current) {
      const currentLineHeight = window
        .getComputedStyle(container.current)
        .getPropertyValue('line-height');
      const currentHeight = window
        .getComputedStyle(container.current)
        .getPropertyValue('height');
      console.log("currentHeight", currentHeight)
      // tslint:disable-next-line:no-console
      console.log('"currentLineHeight', currentLineHeight);

      if (Number.parseInt(currentHeight) > Number.parseInt(currentLineHeight)) {
        setIsShowButton(true);
        setHeight(currentLineHeight);
      } else {
        setIsShowButton(false);
      }
    }
  }, []);
  if (floatLine) {
    return (
      <div>
        <TextWrapper isExpanded={isExpanded}>
          <Text ref={container} isExpanded={isExpanded} height={height}>
            {children}
          </Text>
          {isShowButton && (
            <span> <Button onClick={toggleLines}>
              {isExpanded ? lessText : moreText}
            </Button></span>

          )}

        </TextWrapper>
        {'dfkgjdlfkgjdlfhkjdkhjfg;hfghkfghfghf'}
      </div>
    );
  }
  return (
    <div>
      <Truncate
        lines={!isExpanded && lines ? lines : 0}
        width={width}
        ellipsis={(
          <Button onClick={toggleLines}>{moreText}</Button>
        )}
        onTruncate={handleTruncate}
      >
        {children}
      </Truncate>
      {!isTruncated && isExpanded && (
        <span> <Button onClick={toggleLines}>{lessText}</Button></span>
      )}
    </div>
  );
};

const Button = styled.button`
  font-size: 11px;
  color: #ee4656;
  border: none;
  background: none;
  cursor: pointer;
  white-space: nowrap;
`;

const Text = styled.span<any>`  
  overflow: hidden;
  text-overflow: ellipsis;
  height: ${(props) => (props.isExpanded ? 'auto' : props.height)};
  width: ${(props) => (props.isExpanded ? '100%' : 'calc( 100% - 70px )')};  
  display: ${(props) => (props.isExpanded ? 'inline' : 'inline-block')};
`;

const TextWrapper = styled.div<any>`
  display: ${(props) => (props.isExpanded ? 'inline-block' : 'flex')};
  align-items: flex-end;
`;
