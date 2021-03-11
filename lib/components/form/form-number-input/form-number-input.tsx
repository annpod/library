import * as React from 'react';
import { FormItemBox } from '../form.styled';
import { IFormElementProps } from '../form-typings';
import { SearchInput } from '../../search-input';

export interface IFormAmountProps<F> extends IFormElementProps<F, number> {
  onChange: (name: string, value: string) => void;
  width?: string;
}

export const FormNumberInput = <F extends {}>(props: IFormAmountProps<F>) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return props.onChange(props.id, event.currentTarget.value);
  };
  const { width } = props;
  return (
    <FormItemBox label={props.label}>
      {props.form.getFieldDecorator(props.id, {
        initialValue: props.initialValue || undefined,
        rules: props.rules,
        getValueFromEvent: handleSearchChange,
        validateTrigger: props.validateTrigger,
      })(
        <SearchInput
          disabled={props.disabled}
          autoComplete={props.id}
          style={width ? { width } : {}}
        />
      )}
    </FormItemBox>
  );
};
