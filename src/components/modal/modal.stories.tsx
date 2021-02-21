import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Modal, IModal } from './modal';

export default {
   title: 'Example/Modal',
   component: Modal
} as Meta;


const Template: Story<IModal> = (args) => <Modal {...args} />;

const onConfirm = () => {
  // tslint:disable-next-line:no-console
  console.log('onConfirm');  
}
const onCancel = () => {
  // tslint:disable-next-line:no-console
  console.log('onCancel');  
}

export const Primary = Template.bind({});
Primary.args = {
  visible: true,
  children: `<div>Modal Content</div>`,
  headerTitle: 'Modal Header',
  confirmButton: {
    label: 'confirm',
    onClick: onConfirm,
  },
  cancelButton: {
    label: 'cancel',
    onClick: onCancel,
  }
};
