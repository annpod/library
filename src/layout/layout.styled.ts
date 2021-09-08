import styled from "styled-components";

export const WrapperColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  width: 100%;
  margin: 0 auto;
  min-height: calc(100vh - 90px);
`;

export const Wrapper = styled.div`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  box-sizing: border-box;
`;

export const Panel = styled.div`
  width: 240px;
  min-width: 240px;
  background: #f7f7f7;
  padding: 0px 20px;
  border-right: 1px solid #dbdbdb;
`;
