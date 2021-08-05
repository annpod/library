export * from './breadcrumbs';
export * from './hoc';



// import React from "react";
// import { withBreadcrumbs } from "./hoc";
// // import { BreadcrumbsC } from "./breadcrumbs";
// import { matchPath, withRouter } from 'react-router-dom';
// import { IBreadcrumbRoute } from "../typings";

// // export interface IBreadcrumbRoute {
// //   path: string;
// //   breadcrumb: string;
// // }

// // export interface IBreadcrumbRouteMatch extends IBreadcrumbRoute {
// //   path: string;
// //   breadcrumb: string;
// //   match: any;
// // }

// const routes: IBreadcrumbRoute[] = [
//   { path: 'ROOT_ROUTE', breadcrumb: "System Configuration" },
//   { path: 'USER_DIRECTORY_ROUTE', breadcrumb: "User Directory" },
//   { path: 'USER_DIRECTORY_PROVIDERS_ROUTE', breadcrumb: "Providers" },
// ];

// export const Breadcrumbs = withBreadcrumbs(routes, matchPath, withRouter)(BreadcrumbsC);
