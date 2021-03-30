import styled from 'styled-components';
import { Button } from '../button';

export const ComponentWrapper = styled.div`
  padding: 0 20px;
`;

export const ParamsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
`;

export const ParamsPanelBody = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #f7f7f7;
`;

export const ParamsPanelTitle = styled.div`
  color: ${(props) => props.theme.highlightColor};
  font-size: 23px;
  font-weight: 400;
  padding: 15px 20px;
`;

export const CollapseBtn = styled(Button)`
  position: absolute;
  top: 25px;
  right: 0;
  transform: translateX(50%);
  color: ${(props) => props.theme.highlightColor};
  background-color: #f7f7f7;
  min-width: 25px;
  min-height: 25px;
  max-width: 25px;
  max-height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: 1px solid ${(props) => props.theme.highlightColor};
  box-shadow: none;

  &:hover,
  &:active,
  &:focus {
    color: white;
    background-color: #f7f7f7;
    border: 1px solid ${(props) => props.theme.highlightColor};
  }
`;
