import React, { forwardRef, useImperativeHandle } from 'react';
import Form from 'antd/lib/form/Form';
import { Story, Meta } from '@storybook/react/types-6-0';

import { StatusSelect, IStatusSelect } from './status-select';

const args = {
  initialValue: 'Active',
  id: '1',
  label: '',
  isNewDesk: true,
  rules: [
    {
      required: true,
      message: 'error'
    }
  ],
  disabled: false,
  placeholder: '',
  onChangeStatus: () => {}
};

export default {
  title: 'Form/StatusSelect',
  component: StatusSelect,
  args,
  parameters: {
    docs: {
      description: {
        component: 'Based on https://ant.design/components/select/',
      },
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
      <div style={{width: '120px'}}>
      <StatusSelect {...args} form={form} />
      </div>
    </Form>
  );
});

const EnhancedForm = Form.create<any>()(TestForm);

const Template: Story<any> = (args) => <EnhancedForm {...args} />;

export const Primary = Template.bind({});
