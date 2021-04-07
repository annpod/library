import React, { forwardRef, useImperativeHandle } from 'react';
import Form from 'antd/lib/form/Form';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormNumberInput } from './form-number-input';

const args = {
  label: 'Capacity',
  id: 'capacity',
  width: '90px',
  initialValue: 20,
  validateTrigger: 'onBlur',
  disabled: false,
  onChange: () => {},
  rules: [
    {
      required: true,
      message: 'Please enter capacity'
    }
  ]
};

export default {
  title: 'Form/FormNumberInput',
  component: FormNumberInput,
  args,
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `<FormNumberInput
        onChange={setSearchParameter}
        form={this.props.form}
        width={'90px'}
        label={detailsScreen.capacity.label}
        id="capacity"
        initialValue={room.details.capacity}
        validateTrigger="onBlur"
        disabled={isFacilityManagerOnly}
        rules={[
          {
            required: true,
            message: detailsScreen.capacity.error,
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
      <FormNumberInput {...args} form={form} />
    </Form>
  );
});

const EnhancedForm = Form.create<any>()(TestForm);

const Template: Story<any> = (args) => <EnhancedForm {...args} />;

export const Primary = Template.bind({});
