import { css } from 'styled-components';

const SIZE = {
  tablet: '768px',
  landscape: '1024px',
  desktop: '1280px',
};

export const mediaStyled = {
  tablet: (payload: TemplateStringsArray) =>
    css`
      @media (min-width: ${SIZE.tablet}) {
        ${css(payload)};
      }
    `,
  landscape: (payload: TemplateStringsArray) =>
    css`
      @media (min-width: ${SIZE.landscape}) {
        ${css(payload)};
      }
    `,
  landscapeMax: (payload: TemplateStringsArray) =>
    css`
      @media (max-width: ${SIZE.landscape}) {
        ${css(payload)};
      }
    `,
  desktop: (payload: TemplateStringsArray) =>
    css`
      @media (min-width: ${SIZE.desktop}) {
        ${css(payload)};
      }
    `,
};
