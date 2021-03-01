import React, { forwardRef, useImperativeHandle } from 'react';
import Form from 'antd/lib/form/Form';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormIconSelect } from './form-icon-select';

const args = {
  label: 'Label',
  id: 'facilityIcon',
  initialValue: '32',
  icons: [
    {
      key: '32',
      url:
        '/systemicons/AudioVisual.svg?t=L3N5c3RlbWljb25zL3wzMjM3MjAyMDYxfDQyYWFiYjY1NmE4MWRlMWIxMDcwYmMyN2VlYmE3YzI1NTUzY2JmOTM='
    },
    {
      key: '33',
      url:
        '/systemicons/DataPoint.svg?t=L3N5c3RlbWljb25zL3wzMjM3MjAyMDYxfDQyYWFiYjY1NmE4MWRlMWIxMDcwYmMyN2VlYmE3YzI1NTUzY2JmOTM='
    }
  ],
  validateTrigger: 'onBlur',
  rules: [
    {
      required: true,
      message: 'error'
    }
  ]
};

export default {
  title: 'Form/FormIconSelect',
  component: FormIconSelect,
  args,
  parameters: {
    docs: {
      source: {
        code: `<FormIconSelect 
                form={this.props.form}
                label={detailsScreen.icon.label}
                id="facilityIcon"
                initialValue={iconKey}
                icons={icons}
                validateTrigger="onBlur"
                rules={[
                  {
                    required: true,
                    message: detailsScreen.icon.error,
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
      <FormIconSelect {...args} form={form} />
    </Form>
  );
});

const EnhancedForm = Form.create<any>()(TestForm);

const Template: Story<any> = (args) => <EnhancedForm {...args} />;

export const Primary = Template.bind({});
