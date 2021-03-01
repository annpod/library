import React, { forwardRef, useImperativeHandle } from 'react';
import Form from 'antd/lib/form/Form';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormAmount } from './form-amount';

const args = {
  min: 0,
  max: 10,
  label: 'Label',
  id: 'maxBookable',
  initialValue: 5
};

export default {
  title: 'Form/FormAmount',
  component: FormAmount,
  args,
  parameters: {
    docs: {
      source: {
        code: `<FormAmount 
                form={form}
                label="Label"
                id=10
                initialValue=1
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
      <FormAmount {...args} form={form} />
    </Form>
  );
});

const EnhancedForm = Form.create<any>()(TestForm);

const Template: Story<any> = (args) => <EnhancedForm {...args} />;

export const Primary = Template.bind({});
