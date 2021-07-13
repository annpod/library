import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormCheck } from './form-check';

const args = {
  id: 'id1',
  initialValues: ['1'],
  options: [{ value: '1', label: 'string' }]
};

export default {
  title: 'Form/FormDocs',
  component: FormCheck,
  args,
  parameters: {
    docs: {
      description: {
        component: 'uses https://3x.ant.design/components/form/'
      },
      source: {
        code: `
        Create Parent component
      

        import React from 'react';
        import {
          BuildingDetailsForm,
          BuildingForm,
        } from './building-details.form';
        
        export const BuildingDetails = (props: IBuildingProps) => {
          const formRef = React.useRef<BuildingForm>(null);

          return (
            <Wrapper>
              <BuildingDetailsForm
                {...props}
                wrappedComponentRef={formRef}
              />
            </Wrapper>
          );
        };
        
        
        Create Form component
              
        
        
        import React, { Component } from 'react';
        import { Form } from 'antd';
        import { 
          FormInput,
        } from '@connectlabs/workplace-web-component-library';
        
        export class BuildingForm extends Component<IProps> {
           public render() {
            return (
              <div>
              <Form layout="vertical">
                    <FormInput
                      form={this.props.form}
                      id="BuildingName"
                      initialValue={props.value}
                      label={'Building'}
                      validateTrigger="onBlur"
                      rules={[
                        {
                          required: true,
                          message: 'Please enter a Building name',
                        },
                        {
                          pattern: /^(\S.{1,46}\S)$/g,
                          message: 'Please enter 3 or more characters',
                        },
                      ]}
                    />
              </Form>
              
              export const BuildingDetailsForm = Form.create<IProps>()(
                BuildingForm
              );
            );
          }
        }  `
      }
    }
  }
} as Meta;

const TestForm = () => {
  return (
    <div>
      uses https://3x.ant.design/components/form/
      <br />
      <br />
      <b>1. Create Parent component</b>
      <br />
      <br />
      <b>2. Create Form component</b>
      <br />
      <br />
      see example - Docs tab and Show Code
    </div>
  );
};

const Template: Story<any> = () => <TestForm />;

export const Primary = Template.bind({});
