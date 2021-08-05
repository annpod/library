import { CSSProperties } from 'react';
import { IThemeMap, ThemeTypes } from '../typings';

interface IProps {
  isDisabled: boolean;
  menuIsOpen: boolean;
}

export const dropdownStyles = (
  width: string,
  theme: IThemeMap,
  themeType: ThemeTypes
): any => {
  const bgColorMenu = theme.dropdownBgColor[themeType];

  return {
    control: (provided: CSSProperties, { isDisabled, menuIsOpen }: IProps) => ({
      ...provided,
      width,
      cursor: 'pointer',
      height: '34px',
      minHeight: '36px',
      border: `1px solid ${
        isDisabled ? theme.dropdownDisabledTextColor : theme.dropdownBorderColor
      }`,
      fontWeight: 400,
      fontSize: '12px',
      backgroundColor: bgColorMenu,
      borderBottomLeftRadius: `${menuIsOpen ? 0 : '5px'}`,
      borderBottomRightRadius: `${menuIsOpen ? 0 : '5px'}`,
      boxShadow: 'none',
      '&:hover': {
        border: `1px solid inherit`
      }
    }),
    valueContainer: (provider: CSSProperties) => ({
      ...provider,
      minHeight: '28px',
      paddingLeft: '15px',
      transform: 'translateY(-1px)',
      caretColor: bgColorMenu
    }),
    singleValue: (provider: CSSProperties, { isDisabled }: IProps) => {
      return {
        ...provider,
        color: `${
          isDisabled ? theme.dropdownDisabledTextColor : theme.dropdownTextColor
        }`,
        fontFamily: 'Gotham-Book'
      };
    },
    multiValue: (provider: CSSProperties) => ({
      ...provider,
      maxWidth: '90%'
    }),
    input: (provider: CSSProperties) => ({
      ...provider,
      padding: '0 12px'
    }),
    placeholder: (provider: CSSProperties, { isDisabled }: IProps) => ({
      ...provider,
      color: `${
        isDisabled ? theme.dropdownDisabledTextColor : theme.dropdownTextColor
      }`,
      fontFamily: 'Gotham-Book',
      fontSize: '12px'
    }),
    indicatorSeparator: () => ({
      display: 'none'
    }),
    indicatorsContainer: (provider: CSSProperties) => ({
      ...provider,
      paddingRight: '2px',
      minHeight: 'inherit',
      height: 'inherit'
    }),

    clearIndicator: (provider: CSSProperties) => ({
      ...provider,
      padding: '0'
    }),
    menu: (provider: CSSProperties) => ({
      ...provider,
      width,
      fontWeight: 400,
      fontSize: '12px',
      marginTop: '0px',
      backgroundColor: bgColorMenu,
      boxShadow: '0px',
      borderLeft: `1px solid ${theme.dropdownBorderColor}`,
      borderRight: `1px solid ${theme.dropdownBorderColor}`,
      borderTopLeftRadius: '0px',
      borderTopRightRadius: '0px'
    }),
    option: (provider: CSSProperties) => ({
      ...provider,
      borderBottom: `1px solid ${theme.dropdownBorderColor}`,
      cursor: 'pointer',
      backgroundColor: bgColorMenu,
      color: `${theme.dropdownTextColor}`,
      padding: '9px 12px 8px',
      '&:hover': {
        backgroundColor: `${theme.dropdownBgHoverColor}`
      }
    }),
    menuList: (provider: CSSProperties) => ({
      ...provider,
      padding: '0px'
    })
  };
};
