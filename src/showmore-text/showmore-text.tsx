import React, { useState } from 'react';
import styled from 'styled-components';
import { Truncate } from './truncate';
import { IShowMoreText } from '../typings';

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

  const { lines, more, less, width, children } = props;

  const moreText = more || "Show More";
  const lessText = less || "Show Less";
  const [update, setUpdate] = React.useState<boolean>(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setUpdate(true)
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Truncate
        lines={!isExpanded && lines ? lines : 0}
        width={width}
        ellipsis={(
          <span>... <Button onClick={toggleLines}>{moreText}</Button></span>
        )}
        onTruncate={handleTruncate}
        update={update}
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
