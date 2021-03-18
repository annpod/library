import React, { forwardRef, useImperativeHandle } from 'react';
import Form from 'antd/lib/form/Form';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormCheck } from './form-check';

const args = {
  id: 'id1',
  initialValues: ['1'],
  options: [{ value: '1', label: 'string' }]
};

export default {
  title: 'Form/FormCheck',
  component: FormCheck,
  args,
  parameters: {
    docs: {
      source: {
        code: `<FormCheck 
                form={form}
                id='id1',
                initialValues=['1'],
                options=[{ value: '1', label: 'string' }],
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
      <FormCheck {...args} form={form} />
    </Form>
  );
});

const EnhancedForm = Form.create<any>()(TestForm);

const Template: Story<any> = (args) => <EnhancedForm {...args} />;

export const Primary = Template.bind({});
