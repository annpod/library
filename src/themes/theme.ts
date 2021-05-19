import {
  WHITE_COLOR,
  COAL_COLOR,
  GREY_COLOR,
  LIGHT_GREY_COLOR,
  DARK_GREY_COLOR,
  SECONDARY_GREY,
  LIGHTER_GREY_COLOR,
  GREEN_COLOR,
  LIGHT_RED_COLOR,
  BLUE_COLOR,
  LIGHT_BLUE_COLOR,
  RED_COLOR,
  INDIGO_COLOR,
  RED2_COLOR,
  LIGHT_GREY2_COLOR,
  DARK_GREY2_COLOR,
  LIGHT_RED2_COLOR,
  GREY2_COLOR,
  LIGHT_RED3_COLOR,
  BLUE2_COLOR,
} from '../constants/colors';
import { BtnTypes } from "../typings";
import { commonTheme, toast } from '../constants/common';

export const DEFAULT_THEME = 'DEFAULT';
export const SCB_THEME = 'SCB';
export const BT_THEME = 'BT';

export const theme: Record<string, any> = {
  [DEFAULT_THEME]: {
    ...commonTheme,
    name: DEFAULT_THEME,
    faviconName: 'smartspace',
    logoImage: 'smartspace',
    bgColor: WHITE_COLOR,
    bgItemColor: LIGHT_GREY_COLOR,
    bgConfirmColor: GREEN_COLOR,
    bgActionColor: COAL_COLOR,
    borderColor: COAL_COLOR,
    borderFocusColor: LIGHT_RED_COLOR,
    contentHeaderBgColor: DARK_GREY_COLOR,
    contentHeaderSecondaryBgColor: LIGHTER_GREY_COLOR,
    textColorMain: LIGHT_RED_COLOR,
    textColorRegular: COAL_COLOR,
    textColor: DARK_GREY2_COLOR,
    textColorRevert: WHITE_COLOR,
    textColorNotes: SECONDARY_GREY,
    iconColorMain: GREY_COLOR,
    highlightColor: LIGHT_RED_COLOR,
    bgBackground: '#5aafe2',
    linkColor: LIGHT_BLUE_COLOR,
    statusButtonBg: GREEN_COLOR,
    routeButtonBg: LIGHT_RED_COLOR,
    uploadButtonBg: LIGHT_RED_COLOR,
    sliderColor: LIGHT_RED_COLOR,
    sortButtonColor: BLUE_COLOR,
    logoTextColor: COAL_COLOR,
    logoFontSize: '20px',
    errorColor: RED2_COLOR,
    activeColor: RED2_COLOR,
    elementBg: LIGHT_GREY2_COLOR,
    switchActiveBg: LIGHT_RED2_COLOR,
    switchActiveColor: RED2_COLOR,
    switchBg: GREY2_COLOR,
    toast,
    buttons: {
      [BtnTypes.primary]: {
        background: LIGHT_RED3_COLOR,
        color: WHITE_COLOR
      },
      [BtnTypes.dark]: {
        background: COAL_COLOR,
        color: WHITE_COLOR
      },
      [BtnTypes.light]: {
        background: WHITE_COLOR,
        color: DARK_GREY2_COLOR
      },
      [BtnTypes.blue]: {
        background: BLUE2_COLOR,
        color: WHITE_COLOR
      },
    },
  },
  [SCB_THEME]: {
    ...commonTheme,
    name: SCB_THEME,
    faviconName: 'smartspace',
    logoImage: 'scbLogo',
    bgColor: WHITE_COLOR,
    bgItemColor: LIGHT_GREY_COLOR,
    bgConfirmColor: GREEN_COLOR,
    bgActionColor: COAL_COLOR,
    borderColor: COAL_COLOR,
    borderFocusColor: RED_COLOR,
    contentHeaderBgColor: DARK_GREY_COLOR,
    contentHeaderSecondaryBgColor: LIGHTER_GREY_COLOR,
    textColorMain: '#27A135',
    textColorRegular: COAL_COLOR,
    textColor: DARK_GREY2_COLOR,
    textColorRevert: WHITE_COLOR,
    textColorNotes: SECONDARY_GREY,
    iconColorMain: GREY_COLOR,
    highlightColor: '#27A135',
    bgBackground: '#5aafe2',
    linkColor: LIGHT_BLUE_COLOR,
    statusButtonBg: GREEN_COLOR,
    routeButtonBg: LIGHT_RED_COLOR,
    uploadButtonBg: LIGHT_RED_COLOR,
    sliderColor: LIGHT_RED_COLOR,
    sortButtonColor: BLUE_COLOR,
    logoTextColor: COAL_COLOR,
    logoFontSize: '20px',
    errorColor: RED2_COLOR,
    activeColor: RED2_COLOR,
    elementBg: LIGHT_GREY2_COLOR,
    switchActiveBg: LIGHT_RED2_COLOR,
    switchBg: GREY2_COLOR,
    toast,
    buttons: {
      [BtnTypes.primary]: {
        background: LIGHT_RED3_COLOR,
        color: WHITE_COLOR
      },
      [BtnTypes.dark]: {
        background: COAL_COLOR,
        color: WHITE_COLOR
      },
      [BtnTypes.light]: {
        background: WHITE_COLOR,
        color: DARK_GREY2_COLOR
      },
      [BtnTypes.blue]: {
        background: BLUE2_COLOR,
        color: WHITE_COLOR
      },
    },
  },
  [BT_THEME]: {
    ...commonTheme,
    name: BT_THEME,
    faviconName: 'bt',
    logoImage: 'btLogo',
    bgColor: WHITE_COLOR,
    bgItemColor: LIGHT_GREY_COLOR,
    bgConfirmColor: GREEN_COLOR,
    bgActionColor: COAL_COLOR,
    borderColor: COAL_COLOR,
    borderFocusColor: RED_COLOR,
    contentHeaderBgColor: DARK_GREY_COLOR,
    contentHeaderSecondaryBgColor: LIGHTER_GREY_COLOR,
    textColorMain: INDIGO_COLOR,
    textColorRegular: COAL_COLOR,
    textColor: DARK_GREY2_COLOR,
    textColorRevert: WHITE_COLOR,
    textColorNotes: SECONDARY_GREY,
    iconColorMain: GREY_COLOR,
    highlightColor: INDIGO_COLOR,
    bgBackground: INDIGO_COLOR,
    linkColor: INDIGO_COLOR,
    statusButtonBg: GREEN_COLOR,
    routeButtonBg: INDIGO_COLOR,
    uploadButtonBg: INDIGO_COLOR,
    sliderColor: INDIGO_COLOR,
    sortButtonColor: INDIGO_COLOR,
    logoTextColor: COAL_COLOR,
    logoFontSize: '20px',
    errorColor: RED2_COLOR,
    activeColor: RED2_COLOR,
    elementBg: LIGHT_GREY2_COLOR,
    switchActiveBg: LIGHT_RED2_COLOR,
    switchBg: GREY2_COLOR,
    toast,
    buttons: {
      [BtnTypes.primary]: {
        background: LIGHT_RED3_COLOR,
        color: WHITE_COLOR
      },
      [BtnTypes.dark]: {
        background: COAL_COLOR,
        color: WHITE_COLOR
      },
      [BtnTypes.light]: {
        background: WHITE_COLOR,
        color: DARK_GREY2_COLOR
      },
      [BtnTypes.blue]: {
        background: BLUE2_COLOR,
        color: WHITE_COLOR
      },
    },
  },
};
