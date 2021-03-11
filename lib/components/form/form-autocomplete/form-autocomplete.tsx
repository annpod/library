import * as React from 'react';
import styled from 'styled-components';

import { FormItemBox, AutocompleteInput } from '../form.styled';
import { IFormElementProps } from '../form-typings';

export interface IAutoCompleteOption {
  text: string;
  value: string;
}

interface IAutoComplete {
  data: Array<{ text: string; value: string }>;
  isHideError?: boolean;
  onSearch: (x: string) => void;
  onSelect?: (x: any) => void;
}

const Wrapper = styled<any>(FormItemBox)`
  .ant-form-explain {
    ${(props) => (props.isHideError ? 'display: none' : '')};
  }
  .ant-select-auto-complete.ant-select .ant-input {
    ${(props) => (props.isHideError ? 'border-color: rgb(217,217,217)' : '')};
  }
`;

export const FormAutoComplete = <F extends {}>(
  props: IFormElementProps<F, string> & IAutoComplete
) => (
  <Wrapper
    isHideError={props.isHideError}
    label={props.label}
    style={props.style}
  >
    {props.form.getFieldDecorator(props.id, {
      initialValue: props.initialValue || undefined,
      rules: props.rules,
      validateTrigger: props.validateTrigger,
    })(
      <AutocompleteInput
        backfill={true}
        placeholder={props.placeholder}
        style={props.style}
        disabled={props.disabled}
        dataSource={props.data}
        onSearch={props.onSearch}
        onSelect={props.onSelect}
      />
    )}
  </Wrapper>
);
