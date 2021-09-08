import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RadioGroup } from './radio-group';
import { IRadioGroupProps } from '../typings';
import { RadioChangeEvent } from 'antd/lib/radio';

export default {
  title: 'V1/RadioGroup',
  component: RadioGroup,
  docs: {
    description: {
      component: 'Based on https://3x.ant.design/components/radio/'
    }
  }
} as Meta;

const Template: Story<IRadioGroupProps> = (args) => {
  const [state, setState] = React.useState<{ [x: string]: string }>({
    status: 'act'
  });

  const onChange = (e: RadioChangeEvent) => {
    const { name, value } = e.target;

    if (!name) return;

    setState({ [name]: value });
  };

  return <RadioGroup {...args} onChange={onChange} value={state.status} />;
};

export const Primary = Template.bind({});
export const Buttons = Template.bind({});

Primary.args = {
  options: [
    {
      key: 'act',
      name: 'Active',
      tooltip: null
    },
    {
      key: 'arc',
      name: 'Archived',
      tooltip:
        'Hosts of meetings in these rooms will be emailed that they are available but their meetings will be unaffected'
    },
    {
      key: 'not',
      name: 'Unavailable',
      tooltip:
        'These rooms will be removed and no longer shown on the floorpan or results'
    }
  ],
  name: 'status'
};

Buttons.args = {
  options: [
    {
      key: 'item1',
      name: 'Item 1'
    },
    {
      key: 'item2',
      name: 'Item 2',
     },
    {
      key: 'item3',
      name: 'Item 4',
    }
  ],
  name: 'status',
  isButton: true,
};
