import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Drawer } from './drawer';

export default {
  title: 'Drawer',
  component: Drawer,
  args: {
    visible: true,
    headerTitle: 'Drawer Header',
    // drawerContent:'Drawer Content',
    okText:'okText',
    cancelText:'cancelText',
    okButtonProps: {
      disabled: false
    }
  },  
  parameters: {
    docs: {
      description: {
        component: 'Based on https://ant.design/components/drawer/',
      },
      source: {
        code: `<Drawer
                  visible={false}
                  drawerContent={<div>Drawer Content</div>}
                  headerTitle={'Drawer Header'} 
                  onOk={() => {}}
                  okText={'okText'}
                  cancelText={'cancelText'}                 
                />`
      }
    },   
  }
} as Meta;

export const Primary = (args: any) => (
  <Drawer
    {...args}   
  >Drawer Content</Drawer>
);
