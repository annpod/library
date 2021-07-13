import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CheckboxGroup } from './checkbox-group';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { ICheckboxGroupProps } from '../typings';

export default {
  title: 'V1/CheckboxGroup',
  component: CheckboxGroup,
  docs: {
    description: {
      component: 'Based on https://3x.ant.design/components/checkbox'
    }
  }
} as Meta;

const Template: Story<ICheckboxGroupProps> = (args) => {
  const [formState, setFormState] = React.useState<CheckboxValueType[]>([
    '1',
    '4',
    '6'
  ]);

  const onChange = (checkedValues: CheckboxValueType[]) => {
    setFormState(checkedValues);
  };

  return <CheckboxGroup {...args} onChange={onChange} value={formState} />;
};

export const Primary = Template.bind({});

Primary.args = {
  options: [
    {
      key: '1',
      name: 'Boardroom',
      rightSideValue: '$45.0'
    },
    {
      key: '2',
      name: 'Classroom',
      rightSideValue: '$65.0'
    },
    {
      key: '3',
      name: 'Cleaning Service',
      rightSideValue: '$5.0'
    },
    {
      key: '4',
      name: 'Conference',
      rightSideValue: '$25.0'
    },
    {
      key: '5',
      name: 'Lecture',
      rightSideValue: '$49.0'
    },
    {
      key: '6',
      name: 'Rectangular Table',
      rightSideValue: '$0.00'
    },
    {
      key: '7',
      name: 'Round Table',
      rightSideValue: '$25.0'
    },
    {
      key: '8',
      name: 'Theater',
      rightSideValue: '$55.0'
    },
    {
      key: '9',
      name: 'U-Shape',
      rightSideValue: '$70.0'
    }
  ],
  name: 'status'
};
