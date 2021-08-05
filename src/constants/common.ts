import { RED2_COLOR } from '../constants/colors';
import { ThemeTypes } from '../typings';

export const commonTheme = {
  normalFontSize: '14px',
  headerFontSize: '16px',
  oversizeFontSize: '36px',
  dropdownBorderColor: '#CCCCCC',
  dropdownTextColor: '#707070',
  dropdownBgHoverColor: '#DBDCDB',
  dropdownBgColor: {
    [ThemeTypes.Primary]: '#ffffff',
    [ThemeTypes.Dark]: '#F7F7F7'
  },
  numberBgColor: {
    [ThemeTypes.Primary]: '#ffffff',
    [ThemeTypes.Dark]: '#F7F7F7'
  },
  dropdownDisabledBorder: '#DBDBDB',
  dropdownDisabledTextColor: '#CCCCCC',
  numberBorderColor: '#CCCCCC',
  numberTextColor: '#707070',
  numberBgHoverColor: '#dbdcdb'
};

export const toast = {
  toastErrorColor: RED2_COLOR,
  toastErrorBg: '#FFF5F6',
  toastSuccessColor: '#3E963E',
  toastSuccessBg: '#E7FAEC'
};
