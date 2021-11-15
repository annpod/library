import React, { forwardRef, useImperativeHandle } from 'react';
import Form from 'antd/lib/form/Form';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FormSelect } from './form-select';

const args = {
  label: 'Region',
  id: 'regionKey',
  width: '90px',
  initialValue: '1',
  disabled: false,
  onChange: () => {},
  rules: [
    {
      required: true,
      message: 'Please enter a Site name'
    }
  ],
  placeholder: 'region placeholder',
  options: [
    { value: '1', label: 'UK' },
    { value: '2', label: 'UA' }
  ]
};

export default {
  title: 'Form/FormSelect',
  component: FormSelect,
  args,
  parameters: {
    docs: {
      source: {
        code: `<FormSelect
                  form={this.props.form}
                  placeholder={region.placeholder}
                  label={region.location}
                  id="regionKey"
                  initialValue={regionKey}
                  options={regionOptions}
                  disabled={true}
                  onChange={onChangeLocation}
              />`
      }
    }
  }
} as Meta;

const TestForm = forwardRef<any, any>(({ form, onSubmit }, ref) => {
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
      <FormSelect {...args} form={form} ref={ref} />
    </Form>
  );
});

const EnhancedForm = Form.create<any>()(TestForm);

const Template: Story<any> = (args) => <EnhancedForm {...args} />;

export const Primary = Template.bind({});
