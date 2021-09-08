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

// const NavItem = styled(NavLink)<{ disabled: boolean }>`
//   font-size: 10px;
//   width: 60px;
//   height: 60px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
//   background: ${(props) =>
//     props.disabled
//       ? "repeating-linear-gradient(45deg,#909090,#909090 10px,#BEBEBE 10px,#BEBEBE 17px)"
//       : "transparent"};

//   svg {
//     width: 30px;
//     height: 30px;
//   }

//   &.active {
//     background: #f7f7f7;
//   }
// `;

export const Navigation = ({routes, pathname, selectedShard, routeTable, NavLink} : any) => {

  const isLinkActive = (route: string) => pathname.includes(routeTable[route]);

  return (
    <Container>
      {routes.map((route: IRoute) => {
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
