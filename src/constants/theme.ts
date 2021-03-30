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
} from './colors';
import { commonTheme, toast } from './common';

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
    toast,
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
    toast,
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
    toast,
  },
};
