import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IBreadcrumbRouteMatch  } from '../typings';


interface IBreadcrumbs {
  breadcrumbs: IBreadcrumbRouteMatch[],
  lastItem: string
}

export const Breadcrumbs = ({ 
  breadcrumbs, 
  lastItem,
 }: IBreadcrumbs) => (
  <div>
    {breadcrumbs.map((item: IBreadcrumbRouteMatch, index: number) => (
      <span key={item.path}>
        {!lastItem && index === breadcrumbs.length - 1 ? (
          <div>{item.breadcrumb}</div>
        ) : (
          <>
            <NavLink to={item.match.url}>{item.breadcrumb}</NavLink>
            <span>{" > "}</span>
          </>
        )}
      </span>
    ))}
    {lastItem && <div>{lastItem}</div>}
  </div>
);
