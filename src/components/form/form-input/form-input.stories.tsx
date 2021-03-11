import React, { forwardRef, useImperativeHandle } from 'react';
import Form from 'antd/lib/form/Form';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormInput } from './form-input';

const args = {
  label: 'Site name',
  id: 'SiteName',
  initialValue: 'name',
  validateTrigger: 'onBlur',
  rules: [
    {
      required: true,
      message: 'Please enter a Site name'
    },
    {
      pattern: /^(\S.{1,46}\S)$/g,
      message: 'Please enter 3 or more characters'
    }
  ]
};

export default {
  title: 'Form/FormInput',
  component: FormInput,
  args,
  parameters: {
    docs: {
      source: {
        code: `<FormInput
              form={this.props.form}
              label={'Site name'}
              id="SiteName"
              initialValue={details.name}
              validateTrigger="onBlur"
              rules={[
                {
                  required: true,
                  message: 'Please enter a Site name',
                },
                {
                  pattern: /^(\S.{1,46}\S)$/g,
                  message: 'Please enter 3 or more characters',
                },
              ]}
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
      <FormInput {...args} form={form} />
    </Form>
  );
});

const EnhancedForm = Form.create<any>()(TestForm);

const Template: Story<any> = (args) => <EnhancedForm {...args} />;

export const Primary = Template.bind({});
