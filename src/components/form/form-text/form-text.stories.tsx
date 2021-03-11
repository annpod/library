import React, { forwardRef, useImperativeHandle } from 'react';
import Form from 'antd/lib/form/Form';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormText } from './form-text';

const args = {
  id:"facilityDescription",
  initialValue: '',
  rows: 4,
  label: 'Facility',
};

export default {
  title: 'Form/FormText',
  component: FormText,
  args,
  parameters: {
    docs: {
      source: {
        code: `<FormText
                form={this.props.form}
                label={description.label}
                id="facilityDescription"
                initialValue={description}
                rows={4}
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
      <FormText {...args} form={form} />
    </Form>
  );
});

const EnhancedForm = Form.create<any>()(TestForm);

const Template: Story<any> = (args) => <EnhancedForm {...args} />;

export const Primary = Template.bind({});
