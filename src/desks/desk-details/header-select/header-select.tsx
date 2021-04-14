import * as React from 'react';
import { IFormSelectProps } from '../../../typings/form';

import {
  Wrapper,
  ModalPopUpWrapper,
  PopUpContent
} from './header-select.styled';
import { strings } from '../../../constants/strings';
import { Modal } from '../../../modal';

import { StatusSelect } from '../../../status-select';
interface IHeaderSelect<F> extends IFormSelectProps<F> {
  isNewDesk: boolean;
  deskName?: string;
}

export const HeaderSelect = <F extends {}>(props: IHeaderSelect<F>) => {
  const { initialValue } = props;
  const [isShowModal, setIsShowModal] = React.useState(false);
  const [modalAbout, setModalAbout] = React.useState(
    strings.resources.desks.detailsScreen.modalWindowText.arc
  );

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
      [props.id]: initialValue
    });
    setIsShowModal(false);
  };

  return (
    <Wrapper>
      <Modal
        type={'modalHeaderSelect'}
        headerTitle={modalAbout.header}
        confirmButton={{
          label: modalAbout.buttonLabel,
          onClick: () => setIsShowModal(false)
        }}
        cancelButton={{
          label: strings.resources.button.back,
          onClick: onCancelButtonClick
        }}
        visible={isShowModal}
      >
        <ModalPopUpWrapper>
          <PopUpContent>{props.deskName}</PopUpContent>
          {modalAbout.content.map((e) => {
            return <PopUpContent key={e}>{e}</PopUpContent>;
          })}
        </ModalPopUpWrapper>
      </Modal>
      <StatusSelect
        form={props.form}
        isNewDesk={props.isNewDesk}
        initialValue={initialValue}
        id={props.id}
        label={props.label}
        rules={props.rules}
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChangeStatus={onChangeStatus}
      />
    </Wrapper>
  );
};
