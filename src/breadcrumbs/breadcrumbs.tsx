import React from "react";
// import { NavLink } from "react-router-dom";
import { IBreadcrumbRouteMatch  } from '../typings';


interface IBreadcrumbs {
  breadcrumbs: IBreadcrumbRouteMatch[];
  lastItem: string;
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
            <a href={item.match.url}>{item.breadcrumb}</a>
            <span>{" > "}</span>
          </>
        )}
      </span>
    ))}
    {lastItem && <div>{lastItem}</div>}
  </div>
);
