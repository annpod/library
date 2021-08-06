import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BreadcrumbsComponent as Breadcrumbs } from "./breadcrumbs";

const breadcrumbs = [{
  breadcrumb: "System Configuration",
  match: {
    isExact: true,
    params: {},
    path: "/systemconfiguration/",
    url: "/systemconfiguration"
  },

  path: "/systemconfiguration/",
},
{
  breadcrumb: "User Directory",
  match: {
    isExact: true,
    params: {},
    path: "/systemconfiguration/userDirectory",
    url: "/systemconfiguration/userDirectory",
  },
  path: "/systemconfiguration/userDirectory",
},
{
  breadcrumb: "Providers",
  match: {
    isExact: true,
    params: {},
    path: "/systemconfiguration/userDirectory/providers",
    url: "/systemconfiguration/userDirectory/providers",
  },
  path: "/systemconfiguration/userDirectory/providers",
}]

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    docs: {
      source: {
        code: `<Header 
                menu={menu}
                onLogout={() => {}}
               />`
      }
    }
  }
} as Meta;

const Template: Story<any> = (args: any) => <Breadcrumbs {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  lastItem: "Name",
  breadcrumbs
};
