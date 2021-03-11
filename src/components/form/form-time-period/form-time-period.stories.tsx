import React, { forwardRef, useImperativeHandle } from 'react';
import Form from 'antd/lib/form/Form';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormTimePeriod } from './form-time-period';

const args = {
  id: 'facilityDescription',
  initialValue: { amount: 15, units: 'Minutes' },
  label: 'Facility',
  timePeriodData: {
    Days: ['0', '1', '2', '3', '4', '5', '6', '7'],
    Hours: [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23'
    ],
    Minutes: ['0', '15', '30', '45']
  }
};

export default {
  title: 'Form/FormTimePeriod',
  component: FormTimePeriod,
  args,
  parameters: {
    docs: {
      source: {
        code: `<FormTimePeriod
                form={this.props.form}
                label={detailsScreen.setUpTime.label}
                id="setUpTime"
                initialValue={initialSetUpTime}
                timePeriodData={timePeriodData}
              />`
      }
    }
  }
} as Meta;

const TestForm = forwardRef<any, any>(({ form, onSubmit }: any, ref) => {
  useImperativeHandle(ref, () => ({
    form
  }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Form
      onSubmit={handleSubmit}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 12 }}
    >
      <FormTimePeriod {...args} form={form} />
    </Form>
  );
});

const EnhancedForm = Form.create<any>()(TestForm);

const Template: Story<any> = (args) => <EnhancedForm {...args} />;

export const Primary = Template.bind({});
