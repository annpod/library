import * as React from 'react';

import { Scrollbars } from 'react-custom-scrollbars';

import { ICustomScrollbarsProps } from '../typings';

export const CustomScrollbars = (props: ICustomScrollbarsProps) => {
  const { isScrollToBottom } = props;
  const scrollbars: any = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!isScrollToBottom) {
      return;
    }
    let id: any;
    if (isScrollToBottom) {
      const scrollTop = scrollbars.current.getScrollTop();
      let i = scrollTop;
      id = setInterval(() => {
        scrollbars.current.scrollTop(i);
        i += 5;
      }, 10);
      setTimeout(() => {
        clearInterval(id);
      }, 500);
    }
    return () => {
      clearInterval(id);
    };
  }, [isScrollToBottom]);

  return (
    <Scrollbars
      style={{ height: props.height, flex: props.flex }}
      autoHide={true}
      autoHideTimeout={1000}
      autoHideDuration={200}
      autoHeight={false}
      thumbMinSize={30}
      ref={scrollbars}
    >
      {props.children}
    </Scrollbars>
  );
};
