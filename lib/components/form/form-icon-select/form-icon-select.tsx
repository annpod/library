import * as React from 'react';
import Select from 'antd/lib/select';

import { FormItemBox } from '../form.styled';
import { IFormIconSelectProps } from '../form-typings';
import { APP_CONFIG } from '../../../constants/config';

import { OptionIcon, IconSelectBase } from './form-icon-select.styled';

export const FormIconSelect = <F extends {}>(
  props: IFormIconSelectProps<F>
) => (
  <FormItemBox label={props.label}>
    {props.form.getFieldDecorator(props.id, {
      initialValue: props.initialValue || undefined,
      rules: props.rules,
      validateTrigger: props.validateTrigger,
    })(
      <IconSelectBase
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChange={props.onChange}
      >
        {props.icons.map((icon) => (
          <Select.Option key={`${props.id}_${icon.key}`} value={icon.key}>
            <OptionIcon src={`${APP_CONFIG.iconsUrl}${icon.url}`} />
          </Select.Option>
        ))}
      </IconSelectBase>
    )}
  </FormItemBox>
);
