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
  GOLD_COLOR,
  FOREST_GREEN,
  LIGHT_GREY3_COLOR,
  LIGHT_GREY4_COLOR,
  BLACK_COLOR
} from '../constants/colors';
import {
  SelectBtnTypes,
  BtnTypes,
  InputTypes,
  DialogueTypes
} from '../typings';
import { commonTheme, toast } from '../constants/common';

export const DEFAULT_THEME = 'DEFAULT';
export const SCB_THEME = 'SCB';
export const BT_THEME = 'BT';
export const AMEREN_THEME = 'AMEREN';

const inputs = {
  [InputTypes.Primary]: {
    background: WHITE_COLOR,
    color: DARK_GREY2_COLOR,
    borderColor: LIGHT_GREY3_COLOR,
    disabledBg: LIGHT_GREY2_COLOR
  },
  [InputTypes.Dark]: {
    background: LIGHT_GREY2_COLOR,
    color: DARK_GREY2_COLOR,
    borderColor: LIGHT_GREY2_COLOR,
    disabledBg: LIGHT_GREY2_COLOR
  }
};

const modals = {
  [DialogueTypes.Primary]: {
    color: DARK_GREY2_COLOR,
    titleColor: BLACK_COLOR
  }
};

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
    borderColorLight: DARK_GREY_COLOR,
    borderFocusColor: LIGHT_RED_COLOR,
    contentHeaderBgColor: DARK_GREY_COLOR,
    contentHeaderBg: LIGHT_GREY2_COLOR,
    contentHeaderBorderColor: DARK_GREY_COLOR,
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
    switchActiveBg: RED2_COLOR,
    switchActiveColor: LIGHT_RED2_COLOR,
    switchBg: GREY2_COLOR,
    tooltip: GOLD_COLOR,
    radioButtonBg: LIGHT_GREY2_COLOR,
    radioButtonBorderColor: DARK_GREY_COLOR,
    radioButtonActiveBg: RED2_COLOR,
    radioButtonColor: DARK_GREY2_COLOR,
    radioButtonActiveColor: WHITE_COLOR,
    ...toast,
    modals,
    inputs,
    selectButton: {
      [SelectBtnTypes.Primary]: {
        background: LIGHT_RED3_COLOR,
        color: WHITE_COLOR,
        colorDisabled: COAL_COLOR,
        backgroundDisabled: LIGHT_GREY2_COLOR
      }
    },
    buttons: {
      [BtnTypes.Primary]: {
        background: LIGHT_RED3_COLOR,
        color: WHITE_COLOR,
        backgroundDisabled: DARK_GREY_COLOR
      },
      [BtnTypes.Dark]: {
        background: COAL_COLOR,
        color: WHITE_COLOR,
        backgroundDisabled: DARK_GREY_COLOR
      },
      [BtnTypes.Grey]: {
        background: DARK_GREY2_COLOR,
        color: WHITE_COLOR,
        backgroundDisabled: DARK_GREY_COLOR
      },
      [BtnTypes.Light]: {
        background: WHITE_COLOR,
        color: DARK_GREY2_COLOR,
        backgroundDisabled: WHITE_COLOR
      },
      [BtnTypes.Blue]: {
        background: BLUE2_COLOR,
        color: WHITE_COLOR,
        backgroundDisabled: DARK_GREY_COLOR
      },
      [BtnTypes.Small]: {
        background: 'transparent',
        color: BLUE2_COLOR,
        backgroundDisabled: 'transparent'
      },
      [BtnTypes.Cancel]: {
        background: LIGHT_GREY4_COLOR,
        color: WHITE_COLOR,
        backgroundDisabled: DARK_GREY_COLOR
      }
    }
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
    borderColorLight: LIGHT_GREY3_COLOR,
    borderFocusColor: RED_COLOR,
    contentHeaderBg: LIGHT_GREY2_COLOR,
    contentHeaderBgColor: DARK_GREY_COLOR,
    contentHeaderBorderColor: DARK_GREY_COLOR,
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
    tooltip: GOLD_COLOR,
    radioButtonBg: LIGHT_GREY2_COLOR,
    radioButtonBorderColor: DARK_GREY_COLOR,
    radioButtonActiveBg: RED2_COLOR,
    radioButtonColor: DARK_GREY2_COLOR,
    radioButtonActiveColor: WHITE_COLOR,
    ...toast,
    modals,
    inputs,
    selectButton: {
      [BtnTypes.Primary]: {
        background: LIGHT_RED3_COLOR,
        color: WHITE_COLOR,
        colorDisabled: COAL_COLOR,
        backgroundDisabled: LIGHT_GREY2_COLOR
      }
    },
    buttons: {
      [BtnTypes.Primary]: {
        background: LIGHT_RED3_COLOR,
        color: WHITE_COLOR,
        backgroundDisabled: DARK_GREY_COLOR
      },
      [BtnTypes.Dark]: {
        background: COAL_COLOR,
        color: WHITE_COLOR,
        backgroundDisabled: DARK_GREY_COLOR
      },
      [BtnTypes.Grey]: {
        background: DARK_GREY2_COLOR,
        color: WHITE_COLOR,
        backgroundDisabled: DARK_GREY_COLOR
      },
      [BtnTypes.Light]: {
        background: WHITE_COLOR,
        color: DARK_GREY2_COLOR,
        backgroundDisabled: WHITE_COLOR
      },
      [BtnTypes.Blue]: {
        background: BLUE2_COLOR,
        color: WHITE_COLOR,
        backgroundDisabled: DARK_GREY_COLOR
      },
      [BtnTypes.Small]: {
        background: 'transparent',
        color: BLUE2_COLOR,
        backgroundDisabled: 'transparent'
      },
      [BtnTypes.Cancel]: {
        background: LIGHT_GREY4_COLOR,
        color: WHITE_COLOR,
        backgroundDisabled: DARK_GREY_COLOR
      }
    }
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
    borderColorLight: LIGHT_GREY3_COLOR,
    borderFocusColor: RED_COLOR,
    contentHeaderBg: LIGHT_GREY2_COLOR,
    contentHeaderBgColor: DARK_GREY_COLOR,
    contentHeaderBorderColor: DARK_GREY_COLOR,
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
    tooltip: GOLD_COLOR,
    radioButtonBg: LIGHT_GREY2_COLOR,
    radioButtonBorderColor: DARK_GREY_COLOR,
    radioButtonActiveBg: RED2_COLOR,
    radioButtonColor: DARK_GREY2_COLOR,
    radioButtonActiveColor: WHITE_COLOR,
    ...toast,
    modals,
    inputs,
    selectButton: {
      [BtnTypes.Primary]: {
        background: LIGHT_RED3_COLOR,
        color: WHITE_COLOR,
        colorDisabled: COAL_COLOR,
        backgroundDisabled: LIGHT_GREY2_COLOR
      }
    },
    buttons: {
      [BtnTypes.Primary]: {
        background: LIGHT_RED3_COLOR,
        color: WHITE_COLOR,
        backgroundDisabled: DARK_GREY_COLOR
      },
      [BtnTypes.Dark]: {
        background: COAL_COLOR,
        color: WHITE_COLOR,
        backgroundDisabled: DARK_GREY_COLOR
      },
      [BtnTypes.Grey]: {
        background: DARK_GREY2_COLOR,
        color: WHITE_COLOR,
        backgroundDisabled: DARK_GREY_COLOR
      },
      [BtnTypes.Light]: {
        background: WHITE_COLOR,
        color: DARK_GREY2_COLOR,
        backgroundDisabled: DARK_GREY_COLOR
      },
      [BtnTypes.Blue]: {
        background: BLUE2_COLOR,
        color: WHITE_COLOR,
        backgroundDisabled: WHITE_COLOR
      },
      [BtnTypes.Small]: {
        background: 'transparent',
        color: BLUE2_COLOR,
        backgroundDisabled: 'transparent'
      },
      [BtnTypes.Cancel]: {
        background: LIGHT_GREY4_COLOR,
        color: WHITE_COLOR,
        backgroundDisabled: DARK_GREY_COLOR
      }
    }
  },
  [AMEREN_THEME]: {
    ...commonTheme,
    name: AMEREN_THEME,
    faviconName: 'ameren',
    logoImage: 'amerenLogo',
    bgColor: WHITE_COLOR,
    bgItemColor: LIGHT_GREY_COLOR,
    bgConfirmColor: GREEN_COLOR,
    bgActionColor: COAL_COLOR,
    borderColor: COAL_COLOR,
    borderColorLight: LIGHT_GREY3_COLOR,
    borderFocusColor: FOREST_GREEN,
    contentHeaderBgColor: DARK_GREY_COLOR,
    contentHeaderBorderColor: DARK_GREY_COLOR,
    contentHeaderSecondaryBgColor: LIGHTER_GREY_COLOR,
    textColorMain: FOREST_GREEN,
    textColorRegular: COAL_COLOR,
    textColor: DARK_GREY2_COLOR,
    textColorRevert: WHITE_COLOR,
    textColorNotes: SECONDARY_GREY,
    iconColorMain: GREY_COLOR,
    highlightColor: FOREST_GREEN,
    bgBackground: '#5aafe2',
    linkColor: LIGHT_BLUE_COLOR,
    statusButtonBg: GREEN_COLOR,
    routeButtonBg: FOREST_GREEN,
    uploadButtonBg: FOREST_GREEN,
    sliderColor: FOREST_GREEN,
    sortButtonColor: BLUE_COLOR,
    logoTextColor: COAL_COLOR,
    logoFontSize: '20px',
    errorColor: RED2_COLOR,
    activeColor: RED2_COLOR,
    elementBg: LIGHT_GREY2_COLOR,
    switchActiveBg: LIGHT_RED2_COLOR,
    switchActiveColor: RED2_COLOR,
    switchBg: GREY2_COLOR,
    tooltip: GOLD_COLOR,
    radioButtonBg: LIGHT_GREY2_COLOR,
    radioButtonBorderColor: DARK_GREY_COLOR,
    radioButtonActiveBg: RED2_COLOR,
    radioButtonColor: DARK_GREY2_COLOR,
    radioButtonActiveColor: WHITE_COLOR,
    ...toast,
    modals,
    inputs,
    selectButton: {
      [BtnTypes.Primary]: {
        background: LIGHT_RED3_COLOR,
        color: WHITE_COLOR,
        colorDisabled: COAL_COLOR,
        backgroundDisabled: LIGHT_GREY2_COLOR
      }
    },
    buttons: {
      [BtnTypes.Primary]: {
        background: LIGHT_RED3_COLOR,
        color: WHITE_COLOR,
        backgroundDisabled: DARK_GREY_COLOR
      },
      [BtnTypes.Dark]: {
        background: COAL_COLOR,
        color: WHITE_COLOR,
        backgroundDisabled: DARK_GREY_COLOR
      },
      [BtnTypes.Grey]: {
        background: DARK_GREY2_COLOR,
        color: WHITE_COLOR,
        backgroundDisabled: DARK_GREY_COLOR
      },
      [BtnTypes.Light]: {
        background: WHITE_COLOR,
        color: DARK_GREY2_COLOR,
        backgroundDisabled: WHITE_COLOR
      },
      [BtnTypes.Blue]: {
        background: BLUE2_COLOR,
        color: WHITE_COLOR,
        backgroundDisabled: DARK_GREY_COLOR
      },
      [BtnTypes.Small]: {
        background: 'transparent',
        color: BLUE2_COLOR,
        backgroundDisabled: 'transparent'
      },
      [BtnTypes.Cancel]: {
        background: LIGHT_GREY4_COLOR,
        color: WHITE_COLOR,
        backgroundDisabled: DARK_GREY_COLOR
      }
    }
  }
};
