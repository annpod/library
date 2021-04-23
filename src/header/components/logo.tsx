import * as React from 'react';
import styled, { withTheme } from 'styled-components';

import { Icon } from '../../icon';

import { IStyledProps } from '../../typings/styles';

const homePageURL = window.location.origin;

const LogoIcon = styled(Icon)`
  & > img {
    height: 35px;
  }
`;

interface ILogo extends IStyledProps {
  onClick?: () => void;
}

const LogoComponent = React.memo((props: ILogo) => {
  const { logoImage, logoName } = props.theme;

  const content = logoName ? logoName : <LogoIcon type={logoImage} />;

  return (
    <>
      {props.onClick ? (
        <LogoWrapper onClick={props.onClick}>{content}</LogoWrapper>
      ) : (
        <RedirectLink href={homePageURL}>
          <LogoWrapper>{content}</LogoWrapper>
        </RedirectLink>
      )}
    </>
  );
});

const RedirectLink = styled.a``;

const LogoWrapper = styled.div`
  cursor: pointer;
  ${(props) =>
    `color: ${props.theme.logoTextColor};
    font-size: ${props.theme.logoFontSize};
  `};
`;

export const Logo = withTheme(LogoComponent);
