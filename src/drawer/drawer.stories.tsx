import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Drawer } from './drawer';
import { IDrawer } from '../typings';

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
      source: {
        code: `<Drawer
                  visible={false}
                  headerTitle={'Drawer Header'} 
                  onOk={() => {}}
                  okText={'okText'}
                  cancelText={'cancelText'}
                  onClose={() => {}}
                  onCancel={() => {}}
                  okButtonProps={{disabled: true}}
                  cancelButtonProps={{disabled: true}} 
                >
                Drawer Content
              </Drawer>`
      }
    }
  }
} as Meta;

const Template = (args: IDrawer) => {
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
