
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Document } from './docs';

export default {
  title: 'Document/Versions',
  component: Document
} as Meta;

const Template: Story<any> = () => <Document />;

export const Versions = Template.bind({});
