import * as React from 'react';
import { FormItemBox } from '../form.styled';
import { SearchInput } from '../../search-input';
import { IFormAmountProps } from '../../typings'

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
