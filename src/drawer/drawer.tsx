import React from 'react';
import styled from 'styled-components';

import { IDrawer } from '../typings';
import { ButtonStyled } from '../button';
import { IconButton } from '../icon-button';
import { Icon } from '../icon';
import { CustomScrollbars } from '../scrollbars';

const Overlay = styled.div<{ visible: boolean }>`
  background: rgba(0, 0, 0, 0.1);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  ${(props) => (props.visible ? `display: block;` : `display: none;`)}
`;

const FlyoutContainer = styled.div<{ visible?: boolean }>`
  @keyframes slide-in {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @keyframes slide-out {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
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
  height: 100vh;
  display: grid;
  transform: translateX(100%);
  box-shadow: ${(props) => (props.visible ? '-3px 0px 4px 0px rgba(0, 0, 0, .06)' : 'none')};
  &.slide-in {
    animation: slide-in 0.5s forwards;
  }
  &.slide-out {
    animation: slide-out 0.5s forwards;
  }
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
const Wrapper = styled.div`
  overflow: hidden;
`;
const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  padding: 20px 20px;
`;

export const Drawer = (props: IDrawer) => {
  const isVisible = false;
  const [go, setGo] = React.useState(false);

  const {
    children,
    headerTitle,
    onClose,
    onOk,
    okButtonProps,
    onCancel,
    cancelButtonProps,
    visible
  } = props;

  React.useEffect(() => {    
    if (!go && visible !== isVisible) {
      setGo(true);
    }
  }, [visible]);

  return (
    <Wrapper>
      <Overlay onClick={onClose} visible={visible} />
      <FlyoutContainer
        className={go ? visible ? 'slide-out' : 'slide-in' : ''}
        data-location='drawer'
        visible={visible}
      >
        <Header>
          <span>{headerTitle}</span>
          {onClose && (
            <IconButton
              className='close-button'
              icon={<Icon size={25} type='close' />}
              onClick={onClose}
            />
          )}
        </Header>
        <CustomScrollbars>
          <Form>{children}</Form>
          <Footer data-location='drawer-footer'>
            {props.okText && (
              <ButtonStyled.Primary
                onClick={onOk}
                disabled={okButtonProps && okButtonProps.disabled}
              >
                {props.okText}
              </ButtonStyled.Primary>
            )}
            {props.cancelText && (
              <ButtonStyled.Light
                onClick={onCancel}
                disabled={cancelButtonProps && cancelButtonProps.disabled}
              >
                {props.cancelText}
              </ButtonStyled.Light>
            )}
          </Footer>
        </CustomScrollbars>
      </FlyoutContainer>
    </Wrapper>
  );
};
