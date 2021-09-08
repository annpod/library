import React from "react";
import styled from "styled-components";
import { Breadcrumbs as BreadcrumbsLib } from '../../breadcrumbs';

interface IContentHeader {
  title?: string;
  isBreadcrumbs?: boolean;
  lastItem?: string;
  children?: React.ReactNode;
  // routes, matchPath, withRouter, NavLink, lastItem 
}

interface IProps {
  lastItem?: string;
}


export const ContentHeader = ({ routes, matchPath, withRouter, NavLink, lastItem, title, isBreadcrumbs, children }: any) => {
  const Breadcrumbs = ({ lastItem }: IProps ) => BreadcrumbsLib({ routes, matchPath, withRouter, NavLink, lastItem });

  return (
    <Wpapper data-location='content-header'>
      {title && <Title>{title}</Title>}
      {isBreadcrumbs &&
        <BreadcrumbsWrapper>
          <Breadcrumbs lastItem={lastItem} />
        </BreadcrumbsWrapper>}
      {children}
    </Wpapper>
  );
};

const BreadcrumbsWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  padding-left: 20px;
`;

const Wpapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  margin-bottom: 15px;
  border-bottom: 1px solid ${props => props.theme.contentHeaderBorderColor};
  background: ${(props) => props.theme.contentHeaderBg};
  color: ${(props) => props.theme.contentHeaderColor};
`;

const Title = styled.div`
  height: 45px;
  font-size: 14px;
  display: flex;
  align-items: center;
  padding: 0 30px;
`;