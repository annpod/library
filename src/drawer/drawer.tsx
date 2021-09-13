import React from 'react';
import styled from 'styled-components';

// import { Drawer as DrawerAntd } from 'antd';
// import { IDrawer } from '../typings';
import 'antd/lib/drawer/style/css';
import { ButtonStyled } from '../button';
import { IconButton } from '../icon-button';
import { Icon } from '../icon';
import { CustomScrollbars } from '../scrollbars';

const Overlay = styled.div<{ visible?: boolean }>`
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  ${(props) =>
    props.visible
      ? `display: block;`
      : `display: none;`}
`;

const FlyoutContainer = styled.div<{ visible?: boolean }>`
  @keyframes slideIn {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  width: 292px;
  grid-template-rows: 50px 1fr 50px;
  background: #ffffff;
  position: fixed;
  z-index: 40;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vw;
  ${(props) =>
    props.visible
      ? `animation: 0.5s ease-in slideIn;
         display: grid;`
      : `animation: 0.5s ease-out slideOut;
         display: none;
  `} 
`;

const Header = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.borderColorLight};
  padding: 0px 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
  justify-content: space-between;
  background: #f7f7f7;
  height: 54px;
`;

const Form = styled.div`
  padding: 20px 20px;
`;

export const Drawer = (props: any) => {
  const { children, headerTitle, goBack, visible } = props;

  return (
    <>
      <Overlay onClick={goBack} visible={visible} />
      <FlyoutContainer visible={visible} data-location='drawer'>
        <Header>
          <span>{headerTitle}</span>
          <IconButton
            className='close-button'
            icon={<Icon size={25} type='close' />}
            onClick={props.onCancel}
          />
        </Header>
        <CustomScrollbars>
          <Form>{children}</Form>
          <Footer>
            {props.okText && (
              <ButtonStyled.Primary
                data-location='okButton'
                onClick={props.onOk}
                disabled={props.okButtonProps && props.okButtonProps.disabled}
              >
                {props.okText}
              </ButtonStyled.Primary>
            )}
            {props.cancelText && (
              <ButtonStyled.Light
                data-location='cancelButton'
                onClick={props.onCancel}
                disabled={
                  props.cancelButtonProps && props.cancelButtonProps.disabled
                }
              >
                {props.cancelText}
              </ButtonStyled.Light>
            )}
          </Footer>
        </CustomScrollbars>
      </FlyoutContainer>
    </>
  );
};

const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  padding: 20px 20px;
`;
