import Slider from 'antd/lib/slider';

import styled from 'styled-components';

const EMPTY_COLOR = '#dbdbdb';

export const DaySlider = styled(Slider)`
  && {
    .ant-slider-track {
      background-color: ${props => props.theme.sliderColor};
    }

    .ant-slider-rail {
      background-color: ${EMPTY_COLOR};
    }

    .ant-slider-dot {
      top: -5px;
      width: 15px;
      height: 15px;
      background-color: ${EMPTY_COLOR};
      border-color: transparent;
    }

    .ant-slider-dot-active {
      background-color: ${props => props.theme.sliderColor};
    }

    &:hover {
      .ant-slider-handle:not(.ant-tooltip-open) {
        border-color: transparent;
      }
    }

    .ant-slider-handle {
      width: 15px;
      height: 15px;
      margin-top: -5px;
      margin-left: -4px;
      background-color: ${props => props.theme.sliderColor};
      border-color: transparent;
      transform: none !important;
    }
    & > .ant-slider-handle-1,
    & > .ant-slider-handle-2 {
      transform: none !important;
    }
  }
`;
