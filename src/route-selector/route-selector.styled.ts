import styled from 'styled-components';

export const RouteSelectorBody = styled.div`
  background-color: #dbdbdb;
  width: 60px;
  min-width: 60px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-top: 15px;
  border-radius: 5px 0 0 5px;
`;

export const RouteSelectorButtonBody = styled.div<{ selected: boolean }>`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props: { selected: boolean }) =>
    props.selected ? '#F7F7F7' : '#DBDBDB'};
`;
