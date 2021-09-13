import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Drawer } from './drawer';

export default {
  title: 'Drawer',
  component: Drawer,
  args: {
    visible: false,
    headerTitle: 'Drawer Header',
    okText: 'okText',
    cancelText: 'cancelText',
    okButtonProps: {
      disabled: false
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Based on https://ant.design/components/drawer/'
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
    }
  }
} as Meta;

const Template = (args: any) => {
  const [visible, setState] = React.useState<boolean>(false);

  const onChange = () => {
    setState(!visible);
  };
  return (
    <>
      <button onClick={onChange}>Click</button>
      <Drawer
        {...args}
        visible={visible}
        onClose={onChange}
        onCancel={onChange}
      >
        Drawer Content
      </Drawer>
    </>
  );
};

export const Primary = Template.bind({});
