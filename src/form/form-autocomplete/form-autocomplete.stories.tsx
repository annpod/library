import React, { forwardRef, useImperativeHandle } from 'react';
import Form from 'antd/lib/form/Form';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormAutoComplete } from './form-autocomplete';

const args = {
  id: 'departments',
  initialValue: '',
  placeholder: 'Departments',
  data: [{ text: 'Development', value: '5' }],
  onSearch: () => {},
  onSelect: () => {},
  disabled: false
};

export default {
  title: 'Form/FormAutoComplete',
  component: FormAutoComplete,
  args,
  parameters: {
    docs: {
      description: {
        component: 'Based on https://ant.design/components/auto-complete/',
      },
      source: {
        code: `<FormAutoComplete
                form={this.props.form}
                id="departments"
                placeholder={selectPlaceholder}
                data={departments}
                onSearch={onSearch}
                onSelect={onSelectDepartment}
                disabled={false}
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
      <FormAutoComplete {...args} form={form} />
    </Form>
  );
});

const EnhancedForm = Form.create<any>()(TestForm);

const Template: Story<any> = (args) => <EnhancedForm {...args} />;

export const Primary = Template.bind({});
