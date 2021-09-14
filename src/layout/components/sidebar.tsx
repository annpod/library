import React from 'react';
import styled from 'styled-components';
import { SidebarContent } from './sidebar-content';
import { ITab } from '../../typings';
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
  tabs?: ITab[];
  backButton?: string;
  selectedTab?: string;
  isExternalMenu?: boolean;
  onSelectTab?: (title: string) => void;
  onBack?: () => void;
  NavLink?: any;
  children?: React.ReactElement;
}) => {
  const onTabClick = (title: string) => {
    if (onSelectTab) onSelectTab(title);
  };

  return (
    <SidebarContent backButton={backButton} onBack={onBack}>

      {tabs &&
        <TabsWrapper data-location='tabs'>
          {tabs.map((item: ITab, index: number) =>
            isExternalMenu ? (
              <NavLink key={`navItem-${index}`} to={item.to} className='tab'>
                {item.title}
              </NavLink>
            ) : (
              <TabItem
                key={`tabItem-${index}`}
                isActive={selectedTab === item.title}
                onClick={() => onTabClick(item.title)}
              >
                {item.title}
              </TabItem>
            )
          )}
        </TabsWrapper>}

      {children}
    </SidebarContent>
  );
};

interface ITabItem {
  isActive: boolean;
}

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 10px;
`;

const TabItem = styled.div<ITabItem>`
  color: ${(props) =>
    props.isActive
      ? props.theme.textColorMain
      : props.theme.contentHeaderColor};
  border-width: 1px;
  border-color: ${(props) =>
    props.isActive ? props.theme.textColorMain : 'transparent'};
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
