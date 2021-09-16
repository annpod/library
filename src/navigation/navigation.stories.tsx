import React from 'react';
import StoryRouter from 'storybook-react-router';
import {
  NavLink,
} from 'react-router-dom';
import { Navigation } from './navigation';
import { INavigation } from '../typings';

export const Primary = (args: INavigation) => (
  <Navigation
    {...args}   
  />
);

export default {
  title: 'Navigation',
  component: Navigation,
  decorators: [StoryRouter()],
  args: {
    routes: [
      {
        friendlyPageName: 'estate',
        icon: 'estate',
        id: 1,
        pathName: 'estate',
        routeName: '/administration/estate',
        title: 'Estate',
      },
      {
        friendlyPageName: 'resources',
        icon: 'resources',
        id: 2,
        pathName: 'resources',
        routeName: '/administration/resources',
        title: 'Resources',
      }],
  pathname: 'estate',
  routeTable: {
    estate: '/administration/estate',
    resources: '/administration/resources',
  },
  NavLink: NavLink,
  },
  argTypes: {
    setCurrentPage: {
      table: {
        category: 'Events'
      }
    }
  },
  parameters: {
    docs: {     
      source: {
        code: ``
      }
    }
  }
};
