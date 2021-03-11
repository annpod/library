import * as React from 'react';

import Select from 'antd/lib/select';

import { IFormSelectProps } from '../../../form/form-typings';
import { IHashMap } from '../../../../typings';

import {
  HeaderItemBox,
  GreenSelect,
  GreenSelectOption,
  Wrapper,
  ModalPopUpWrapper,
  PopUpContent,
} from './header-select.styled';
import { strings } from '../../../../constants/strings';
import { ModalPopup as ModalPopup } from '../../../modal';

interface IHeaderSelect<F> extends IFormSelectProps<F> {
  isNewDesk: boolean;
  deskName?: string;
}

const optionsMap: IHashMap<string[]> = {
  Active: ['Unavailable'],
  Archived: ['Active'],
  Unavailable: ['Active', 'Archived'],
};

export const HeaderSelect = <F extends {}>(props: IHeaderSelect<F>) => {
  const { initialValue } = props;
  const [isShowModal, setIsShowModal] = React.useState(false);
  const [modalAbout, setModalAbout] = React.useState(
    strings.resources.desks.detailsScreen.modalWindowText.arc
  );

  const value = props.form.getFieldValue(props.id) || initialValue;

  const options = optionsMap[value] || [];

  const onChangeStatus = (nextStatus: string) => {
    switch (nextStatus) {
      case 'Archived':
        setModalAbout(
          strings.resources.desks.detailsScreen.modalWindowText.arc
        );
        break;
      case 'Active':
        setModalAbout(
          strings.resources.desks.detailsScreen.modalWindowText.act
        );
        break;
      case 'Unavailable':
        setModalAbout(
          strings.resources.desks.detailsScreen.modalWindowText.not
        );
        break;
      default:
        return;
    }
    setIsShowModal(true);
  };

  const onCancelButtonClick = () => {
    props.form.setFieldsValue({
      [props.id]: initialValue,
    });
    setIsShowModal(false);
  };

  return (
    <Wrapper>
      <ModalPopup
        type={'modalHeaderSelect'}
        headerTitle={modalAbout.header}
        confirmButton={{
          label: modalAbout.buttonLabel,
          onClick: () => setIsShowModal(false),
        }}
        cancelButton={{
          label: strings.resources.button.back,
          onClick: onCancelButtonClick,
        }}
        visible={isShowModal}
      >
        <ModalPopUpWrapper>
          <PopUpContent>{props.deskName}</PopUpContent>
          {modalAbout.content.map((e) => {
            return <PopUpContent key={e}>{e}</PopUpContent>;
          })}
        </ModalPopUpWrapper>
      </ModalPopup>
      <HeaderItemBox label={props.label}>
        {props.form.getFieldDecorator(props.id, {
          initialValue: props.initialValue || undefined,
          rules: props.rules,
        })(
          <GreenSelect
            placeholder={props.placeholder}
            disabled={props.disabled}
            onChange={onChangeStatus}
          >
            {options.map((label) => (
              <Select.Option key={`${props.id}_${label}`} value={label}>
                <GreenSelectOption>{label}</GreenSelectOption>
              </Select.Option>
            ))}
          </GreenSelect>
        )}
      </HeaderItemBox>
    </Wrapper>
  );
};
