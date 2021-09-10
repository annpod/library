import React from "react";
import styled from "styled-components";
import { iconTable } from './iconTable';
import '../styles.css';

export interface IRoute {
  id: number;
  pathName: string;
  title: string;
  icon: string;
}
const Container = styled.div`
  width: 60px;
  background: #dbdbdb;
`;

export const Navigation = ({routes, pathname, selectedShard, routeTable, NavLink} : any) => {
  const isLinkActive = (route: string) => pathname.includes(routeTable[route]);

  return (
    <Container data-location='navigation'>
      {routes && routes.map((route: IRoute) => {
        const Icon = iconTable[route.icon];

        if (!Icon) {
          return null;
        }

        const isActive = isLinkActive(route.pathName);
        const secondaryColor = route.pathName === "select_shard" ? "#f7f7f7" : "#434448";

        return (
          <NavLink
            key={route.id}
            to={{
              pathname: routeTable[route.pathName],
            }}
            disabled={!selectedShard.shardKey}
            title={route.title}
            className={'navigation'}
          >
            <Icon color={isActive ? "#f93549" : secondaryColor} />
          </NavLink>
        );
      })}
    </Container>
  );
};
