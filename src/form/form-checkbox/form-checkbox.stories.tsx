import React, { forwardRef, useImperativeHandle } from 'react';
import Form from 'antd/lib/form/Form';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormCheckbox } from './form-checkbox';

const args = {
  id:"isCheckInMandatory",
  label:"Is checkIn mandatory",
  initialValue: true
};

export default {
  title: 'Form/FormCheckbox',
  component: FormCheckbox,
  args,
  parameters: {
    docs: {
      description: {
        component: 'Based on https://ant.design/components/checkbox/',
      },
      source: {
        code: `<FormCheckbox 
        id="isCheckInMandatory"
        form={this.props.form}
        label="Is checkIn mandatory"
        initialValue={isCheckInMandatory}
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
      <FormCheckbox {...args} form={form} />
    </Form>
  );
});

const EnhancedForm = Form.create<any>()(TestForm);

const Template: Story<any> = (args) => <EnhancedForm {...args} />;

export const Primary = Template.bind({});
