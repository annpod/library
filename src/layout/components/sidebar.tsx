import React from "react";
import styled from "styled-components";
import { SidebarContent } from "./sidebar-content";
import '../../styles.css';

export const Sidebar = ({
  tabs,
  backButton,
  selectedTab,
  isExternalMenu,
  onBack,
  onSelectTab,
  NavLink,
  children
}: {
  tabs?: any; // TODO add type
  backButton?: string;
  selectedTab?: string;
  isExternalMenu?: boolean;
  onSelectTab?: (title: string) => void;
  onBack?: () => void;
  NavLink?: any;
  children?: React.ReactChildren;
}) => {

  const onTabClick = (title: string) => {
    if (onSelectTab) onSelectTab(title)
  }

  return (
    <SidebarContent backButton={backButton} onBack={onBack}>
      <TabsWrapper>
        {tabs && tabs.map((item: any, index: number) =>
          isExternalMenu
            ? <NavLink key={`navItem-${index}`} to={item.to} className='tab'>{item.title}</NavLink>
            : <TabItem
              key={`tabItem-${index}`}
              isActive={selectedTab === item.title}
              onClick={() => onTabClick(item.title)}>
              {item.title}
            </TabItem>
        )}
      </TabsWrapper>
      {children}
    </SidebarContent>
  );
};

interface ITabItem {
  isActive: boolean
}

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 10px;
`;

const TabItem = styled.div<ITabItem>`
  color: ${props => props.isActive ? props.theme.textColorMain : props.theme.contentHeaderColor};
  border-width: 1px;
  border-color: ${props => props.isActive ? props.theme.textColorMain : 'transparent'};;
  border-style: solid;
  padding: 2px 10px;
  margin-right: 30px;
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;
  font-size: 13px;
  margin-bottom: 10px;
  font-family: Gotham-Medium;
  }
`;

// const NavItem = styled(NavLink)`
//   color: #707070;
//   border-width: 1px;
//   border-color: transparent;
//   border-style: solid;
//   padding: 2px 10px;
//   margin-right: 30px;
//   border-radius: 30px;
//   cursor: pointer;
//   text-decoration: none;
//   font-size: 13px;
//   margin-bottom: 10px;
//   font-family: Gotham-Medium;
//   &.active {
//     color: #f93549;
//     border-color: #f93549;
//   }
// `;
