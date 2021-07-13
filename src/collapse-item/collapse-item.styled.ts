import styled from 'styled-components';

export const CollapseItemBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const CollapseTitleBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 34px;
`;

export const CollapseTitleText = styled.div`
  color: ${(props) => props.theme.text};
  font-size: 13px;
  font-weight: 400;
`;

export const CollapseTitleBtn = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  text-align: right;
  vertical-align: center;
  font-size: 16px;
  font-weight: 400;
`;

export const CollapseContentBody = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
`;
