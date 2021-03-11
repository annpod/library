import * as React from 'react';
import { FormComponentProps } from 'antd/lib/form/Form';

import { FormItemBox } from '../../../form';
import { DeskFeatureStyles } from './desk-features.styled';

import { APP_CONFIG } from '../../../../constants/config';

import { IDeskFeature } from '../desk-details.typings';

export interface IDeskCapabilityFormControlProps extends FormComponentProps {
  options: IDeskFeature[];
  id: string;
}

export const DeskFeatures = (props: IDeskCapabilityFormControlProps) => {
  const [currentOptions, setCurrentOptions] = React.useState<IDeskFeature[]>(
    []
  );
  const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);

  React.useEffect(() => {
    setCurrentOptions(props.options);
    setSelectedKeys(props.options.filter((x) => x.isSelected).map((x) => x.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.options.length]);

  const onSelectFeature = (e: any) => {
    const value = e.target.value;
    const formValue = props.form.getFieldValue(props.id);
    const newFormValue = formValue.includes(value)
      ? formValue.filter((el: string) => el !== value)
      : [...formValue, value];
    props.form.setFieldsValue({ [props.id]: newFormValue });
    setSelectedKeys(newFormValue);
  };

  return (
    <DeskFeatureStyles.Wrapper>
      <FormItemBox>
        {props.form.getFieldDecorator(props.id, {
          initialValue: selectedKeys,
          valuePropName: 'value',
        })(
          <>
            {currentOptions.map((item) => (
              <DeskFeatureStyles.CheckboxWrapper key={`capCheck_${item.id}`}>
                <DeskFeatureStyles.Checkbox
                  id={`slc_${item.id}`}
                  value={item.id}
                  checked={selectedKeys.includes(item.id)}
                  onChange={onSelectFeature}
                />
                <DeskFeatureStyles.IconWrapper>
                  <DeskFeatureStyles.Icon
                    src={`${APP_CONFIG.iconsUrl}${item.iconUrl}`}
                  />
                </DeskFeatureStyles.IconWrapper>
                <DeskFeatureStyles.Label htmlFor={`slc_${item.id}`}>
                  {item.name}
                </DeskFeatureStyles.Label>
              </DeskFeatureStyles.CheckboxWrapper>
            ))}
          </>
        )}
      </FormItemBox>
    </DeskFeatureStyles.Wrapper>
  );
};
