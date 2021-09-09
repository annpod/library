import React from "react";
import styled from "styled-components";
import { IconButton } from '../../icon-button';
import { Icon } from '../../icon';

import { useHistory } from "react-router-dom";

export const SidebarContent = ({
  backButton,
  children,
  onBack,
}: {
  backButton?: string;
  children: React.ReactNode;
  onBack?: () => void;
}) => {
  const history = useHistory();

  const onClick = () => {
    if (onBack) { onBack() }
    else { history.goBack(); }
  }
  return (
    <Container>
      {backButton &&
        <BackButtonWrapper>
          <IconButton
            data-location="back-button"
            icon={<Icon size={10} type="arrowLeft" />}
            onClick={onClick}
            title={backButton}
          />
        </BackButtonWrapper>
      }
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background: ${props => props.theme.contentHeaderBg};;
  width: 240px;
  max-width: 240px;
  min-width: 240px;
  padding: 15px 20px;
  color: #646367;
  border-right: 1px solid ${props => props.theme.contentHeaderBorderColor};
  box-sizing: border-box;
`;

const BackButtonWrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.contentHeaderBorderColor};
  width: 100%;
  margin-bottom: 20px;
  padding-bottom: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

