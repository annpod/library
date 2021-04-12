import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  FormItemBox,
  FormLabel,
  SimpleInput,
  AutocompleteInput,
  SimpleTextArea,
  AmountInput,
  SelectColorBox,
  FormPanelBody,
  FormSectionStart,
  FormSectionStartNoTop,
  FormSectionStartNoBottom,
  FormSectionDescription,
  Block,
  Title,
  InputCustom,
  ErrorText
} from './form.styled';

export const Primary = () => {
  return (
    <div>
      <ExampleItem>
        <h3>{'<FormItemBox></FormItemBox> - styled(Form.Item)'}</h3>
        <FormItemBox>Content</FormItemBox>
      </ExampleItem>
      <ExampleItem>
        <h3>{'<FormLabel></FormLabel> - styled.span'}</h3>
        <FormLabel>Label</FormLabel>
      </ExampleItem>
      <ExampleItem>
        <h3>{'<SimpleInput /> - styled(Input) (antd)'}</h3>
        <SimpleInput />
      </ExampleItem>
      <ExampleItem>
        <h3>{'<AutocompleteInput /> - styled(Autocomplete) (antd)'}</h3>
        <AutocompleteInput />
      </ExampleItem>
      <ExampleItem>
        <h3>{'<SimpleTextArea/> - styled(Input.TextArea)  (antd)'}</h3>
        <SimpleTextArea />
      </ExampleItem>
      <ExampleItem>
        <h3>{'<AmountInput /> - styled(InputNumber) (antd)'}</h3>
        <AmountInput />
      </ExampleItem>
      <ExampleItem>
        <h3>{'<SelectColorBox />'}</h3>
        <SelectColorBox backgroundColor={'#456789'} />
      </ExampleItem>
      <ExampleItem>
        <h3>{'<FormPanelBody></FormLabel>'}</h3>
        <FormPanelBody>Content</FormPanelBody>
      </ExampleItem>
      <ExampleItem>
        <h3>{'<FormSectionStart></FormSectionStart>'}</h3>
        <FormSectionStart>Location</FormSectionStart>
      </ExampleItem>
      <ExampleItem>
        <h3>{'<FormSectionStartNoTop></FormSectionStartNoTop>'}</h3>
        <FormSectionStartNoTop>Desk Details</FormSectionStartNoTop>
      </ExampleItem>
      <ExampleItem>
        <h3>{'<FormSectionStartNoBottom></FormSectionStartNoBottom>'}</h3>
        <FormSectionStartNoBottom>Desk Details</FormSectionStartNoBottom>
      </ExampleItem>
      <ExampleItem>
        <h3>{'<FormSectionDescription></FormSectionDescription>'}</h3>
        <FormSectionDescription>These are the time periods during which the room is blocked for booking during set-up and clear down of the service.</FormSectionDescription>
      </ExampleItem>
      <ExampleItem>
        <h3>{'<Block></Block>'}</h3>
        <Block>Content</Block>
      </ExampleItem>
      <ExampleItem>
        <h3>{'<Title></Title>'}</h3>
        <Title>Title</Title>
      </ExampleItem>
      <ExampleItem>
        <h3>{'<InputCustom />'}</h3>
        <InputCustom value="text" />
      </ExampleItem>
      <ExampleItem>
        <h3>{'<ErrorText></ErrorText>'}</h3>
        <ErrorText>Error message</ErrorText>
      </ExampleItem>
    </div>
  );
};

const Fields = Primary.bind({});

export default {
  title: 'Form/StyledFields',
  component: Primary,
  parameters: {
    docs: {
      source: {
        code: ` `
      }
    }
  }
} as Meta;

const ExampleItem = styled.div`
  padding: 45px 30px;
  border-bottom: 1px solid #ddd;
`;
