import React from 'react';
import styled from 'styled-components';
const DEFAULT_STROKE_COLOR = '#434448';

export interface IIconProps {
  selected?: boolean;
}

const Icon = styled.svg<{ selected?: boolean }>`
  .stroke-element {
    stroke: ${(props: any) =>
      props.selected ? props.theme.highlightColor : DEFAULT_STROKE_COLOR};
  }
`;

export const UsersIcon = (props: IIconProps) => {
  return (
    <Icon
      id="Group_2605"
      data-name="Group 2605"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      selected={props.selected}
    >
      <g id="Group_2558" data-name="Group 2558" transform="translate(0)">
        <rect
          id="Rectangle_2424"
          data-name="Rectangle 2424"
          width="30"
          height="30"
          fill="none"
        />
      </g>
      <g
        id="Group_2560"
        data-name="Group 2560"
        transform="translate(0.75 0.799)"
      >
        <circle
          id="Ellipse_93"
          data-name="Ellipse 93"
          cx="1.994"
          cy="1.994"
          r="1.994"
          transform="translate(1.568)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <path
          id="Path_1640"
          data-name="Path 1640"
          d="M-454.236,1234.95a3.562,3.562,0,0,1,3.563-3.562,3.562,3.562,0,0,1,3.562,3.563Z"
          transform="translate(454.236 -1227.4)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <circle
          id="Ellipse_94"
          data-name="Ellipse 94"
          cx="1.994"
          cy="1.994"
          r="1.994"
          transform="translate(12.256)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <path
          id="Path_1641"
          data-name="Path 1641"
          d="M-418.612,1234.95a3.562,3.562,0,0,1,3.563-3.562,3.562,3.562,0,0,1,3.563,3.563Z"
          transform="translate(429.299 -1227.4)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <circle
          id="Ellipse_95"
          data-name="Ellipse 95"
          cx="1.994"
          cy="1.994"
          r="1.994"
          transform="translate(22.943)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <path
          id="Path_1642"
          data-name="Path 1642"
          d="M-382.987,1234.95a3.562,3.562,0,0,1,3.563-3.562,3.562,3.562,0,0,1,3.563,3.563Z"
          transform="translate(404.362 -1227.4)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <circle
          id="Ellipse_96"
          data-name="Ellipse 96"
          cx="1.994"
          cy="1.994"
          r="1.994"
          transform="translate(1.568 20.829)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <path
          id="Path_1643"
          data-name="Path 1643"
          d="M-454.236,1304.38a3.562,3.562,0,0,1,3.563-3.562,3.562,3.562,0,0,1,3.562,3.563Z"
          transform="translate(454.236 -1276)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <circle
          id="Ellipse_97"
          data-name="Ellipse 97"
          cx="1.994"
          cy="1.994"
          r="1.994"
          transform="translate(12.256 20.829)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <path
          id="Path_1644"
          data-name="Path 1644"
          d="M-418.612,1304.38a3.563,3.563,0,0,1,3.563-3.562,3.562,3.562,0,0,1,3.563,3.563Z"
          transform="translate(429.299 -1276)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <circle
          id="Ellipse_98"
          data-name="Ellipse 98"
          cx="1.994"
          cy="1.994"
          r="1.994"
          transform="translate(22.943 20.829)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <path
          id="Path_1645"
          data-name="Path 1645"
          d="M-382.987,1304.38a3.563,3.563,0,0,1,3.563-3.562,3.563,3.563,0,0,1,3.563,3.563Z"
          transform="translate(404.362 -1276)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      </g>
      <circle
        id="Ellipse_99"
        data-name="Ellipse 99"
        cx="1.994"
        cy="1.994"
        r="1.994"
        transform="translate(13.006 11.213)"
        fill="none"
        className="stroke-element"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
      />
      <path
        id="Path_1646"
        data-name="Path 1646"
        d="M-418.612,1269.665a3.563,3.563,0,0,1,3.563-3.562,3.562,3.562,0,0,1,3.563,3.563Z"
        transform="translate(430.049 -1250.901)"
        fill="none"
        className="stroke-element"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      />
      <g
        id="Group_2561"
        data-name="Group 2561"
        transform="translate(22.125 11.213)"
      >
        <circle
          id="Ellipse_100"
          data-name="Ellipse 100"
          cx="1.994"
          cy="1.994"
          r="1.994"
          transform="translate(1.569)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <path
          id="Path_1647"
          data-name="Path 1647"
          d="M-382.987,1269.665a3.563,3.563,0,0,1,3.563-3.562,3.563,3.563,0,0,1,3.563,3.563Z"
          transform="translate(382.987 -1262.114)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
      </g>
      <g
        id="Group_2562"
        data-name="Group 2562"
        transform="translate(0.75 11.213)"
      >
        <circle
          id="Ellipse_101"
          data-name="Ellipse 101"
          cx="1.994"
          cy="1.994"
          r="1.994"
          transform="translate(1.568)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <path
          id="Path_1648"
          data-name="Path 1648"
          d="M-454.236,1269.665a3.562,3.562,0,0,1,3.563-3.562,3.562,3.562,0,0,1,3.562,3.563Z"
          transform="translate(454.236 -1262.114)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      </g>
    </Icon>
  );
};

export const EstateIcon = (props: IIconProps) => {
  const fillColor = props.selected ? '#f7f7f7' : '#dbdbdb';

  return (
    <Icon
      id="Group_2866"
      data-name="Group 2866"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      selected={props.selected}
    >
      <g id="Group_2563" data-name="Group 2563" transform="translate(0 0)">
        <rect
          id="Rectangle_2426"
          data-name="Rectangle 2426"
          width="30"
          height="30"
          fill="none"
        />
      </g>
      <circle
        id="Ellipse_102"
        data-name="Ellipse 102"
        cx="14.128"
        cy="14.128"
        r="14.128"
        transform="translate(0.871 0.872)"
        fill="none"
        className="stroke-element"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
      />
      <ellipse
        id="Ellipse_103"
        data-name="Ellipse 103"
        cx="7.064"
        cy="14.128"
        rx="7.064"
        ry="14.128"
        transform="translate(7.935 0.872)"
        fill="none"
        className="stroke-element"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
      />
      <line
        id="Line_49"
        data-name="Line 49"
        x1="28.255"
        transform="translate(0.871 15)"
        fill="none"
        className="stroke-element"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
      />
      <line
        id="Line_50"
        data-name="Line 50"
        y2="28.255"
        transform="translate(14.999 0.872)"
        fill="none"
        className="stroke-element"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
      />
      <path
        id="Path_140"
        data-name="Path 140"
        d="M1584.01,3447.8a3.9,3.9,0,1,0-7.8,0c0,3.862,3.9,7.4,3.9,7.4S1584.01,3451.737,1584.01,3447.8Z"
        transform="translate(-1559.175 -3432.551)"
        fill={fillColor}
        className="stroke-element"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      />
      <path
        id="Path_1656"
        data-name="Path 1656"
        d="M1534.321,3424.664a24.713,24.713,0,0,0,21.055,0"
        transform="translate(-1529.85 -3419.083)"
        fill="none"
        className="stroke-element"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
      />
      <path
        id="Path_1657"
        data-name="Path 1657"
        d="M1555.376,3481.743a24.713,24.713,0,0,0-21.055,0"
        transform="translate(-1529.85 -3457.39)"
        fill="none"
        className="stroke-element"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
      />
      <path
        id="Path_140-2"
        data-name="Path 140"
        d="M1533.1,3412.865a3.9,3.9,0,0,0-7.8,0c0,3.863,3.9,7.4,3.9,7.4S1533.1,3416.8,1533.1,3412.865Z"
        transform="translate(-1523.534 -3408.095)"
        fill={fillColor}
        className="stroke-element"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      />
    </Icon>
  );
};

export const ResourcesIcon = (props: IIconProps) => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      selected={props.selected}
    >
      <g id="Symbol_47" data-name="Symbol 47" transform="translate(-1021 -225)">
        <g
          id="Group_2609"
          data-name="Group 2609"
          transform="translate(1021 225)"
        >
          <g id="Group_2578" data-name="Group 2578" transform="translate(0 0)">
            <rect
              id="Rectangle_2433"
              data-name="Rectangle 2433"
              width="30"
              height="30"
              fill="none"
            />
          </g>
          <path
            id="Path_1662"
            data-name="Path 1662"
            d="M2351.369,2021.514c0,3-6.006,5.428-13.417,5.428s-13.417-2.43-13.417-5.428"
            transform="translate(-2322.968 -1997.752)"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
          <line
            id="Line_58"
            data-name="Line 58"
            y2="17.524"
            transform="translate(1.568 6.238)"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
          <line
            id="Line_59"
            data-name="Line 59"
            y1="13.144"
            transform="translate(28.401 10.618)"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
          <path
            id="Path_1663"
            data-name="Path 1663"
            d="M2345.779,1963.1l-10.062,3.589v17.524a28.443,28.443,0,0,0,20.125,0V1971.07l-10.062-3.589Z"
            transform="translate(-2330.795 -1956.862)"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
          <line
            id="Line_60"
            data-name="Line 60"
            y2="14.19"
            transform="translate(14.984 0.81)"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
          <path
            id="Path_1664"
            data-name="Path 1664"
            d="M2335.718,1995.9a28.446,28.446,0,0,0,20.123,0l-10.061-3.589Z"
            transform="translate(-2330.796 -1977.307)"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
          <path
            id="Path_1665"
            data-name="Path 1665"
            d="M2327.89,1954.025c-2.087-.957-3.354-2.214-3.354-3.59,0-3,6.007-5.428,13.417-5.428"
            transform="translate(-2322.968 -1944.197)"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
          <path
            id="Path_1666"
            data-name="Path 1666"
            d="M2369.258,1959.607c7.41,0,13.417,2.43,13.417,5.428,0,1.376-1.267,2.633-3.354,3.59l-10.062-3.59Z"
            transform="translate(-2354.274 -1954.417)"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
        </g>
      </g>
    </Icon>
  );
};

export const ReportingIcon = (props: IIconProps) => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      selected={props.selected}
    >
      <g id="Symbol_48" data-name="Symbol 48" transform="translate(-1201 -225)">
        <g
          id="Group_2607"
          data-name="Group 2607"
          transform="translate(1201 225)"
        >
          <g id="Group_2565" data-name="Group 2565" transform="translate(0 0)">
            <rect
              id="Rectangle_2427"
              data-name="Rectangle 2427"
              width="30"
              height="30"
              fill="none"
            />
          </g>
          <g
            id="Group_2566"
            data-name="Group 2566"
            transform="translate(4.369 0.962)"
          >
            <path
              id="Path_1658"
              data-name="Path 1658"
              d="M674.9,1458.448h-1.651a.986.986,0,0,1-.6-.2l-3.728-2.842h0A4.376,4.376,0,0,0,664,1455.4l-.013.008-3.728,2.842a.985.985,0,0,1-.6.2H658.01a2.185,2.185,0,0,0-2.184,2.185v20.1a2.185,2.185,0,0,0,2.184,2.185H674.9a2.185,2.185,0,0,0,2.185-2.185v-20.1A2.185,2.185,0,0,0,674.9,1458.448Z"
              transform="translate(-655.826 -1454.64)"
              fill="none"
              className="stroke-element"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            />
          </g>
          <circle
            id="Ellipse_104"
            data-name="Ellipse 104"
            cx="6.095"
            cy="6.095"
            r="6.095"
            transform="translate(8.776 12.752)"
            strokeWidth="1"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            id="Path_1660"
            data-name="Path 1660"
            d="M694.077,1490.775a6.1,6.1,0,0,1,6.1,6.1h-6.1Z"
            transform="translate(-678.233 -1478.972)"
            fill="#dbdbdb"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
          <path
            id="Path_1661"
            data-name="Path 1661"
            d="M681.631,1465.422a2.2,2.2,0,0,1,.862,1.74v1.018a1.8,1.8,0,0,1-1.8,1.8h-9.538a1.811,1.811,0,0,1-1.819-1.8v-1.018a2.2,2.2,0,0,1,.862-1.74"
            transform="translate(-660.914 -1461.225)"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
        </g>
      </g>
    </Icon>
  );
};

export const SettingsIcon = (props: IIconProps) => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      selected={props.selected}
    >
      <g id="Symbol_58" data-name="Symbol 58" transform="translate(-1376 -225)">
        <g
          id="Group_2608"
          data-name="Group 2608"
          transform="translate(1376 225)"
        >
          <g id="Group_2575" data-name="Group 2575" transform="translate(0 0)">
            <g id="Group_2567" data-name="Group 2567">
              <rect
                id="Rectangle_2428"
                data-name="Rectangle 2428"
                width="30"
                height="30"
                fill="none"
              />
            </g>
            <g
              id="Group_2574"
              data-name="Group 2574"
              transform="translate(1.31 1.405)"
            >
              <g
                id="Group_2573"
                data-name="Group 2573"
                transform="translate(3.419)"
              >
                <g id="Group_2572" data-name="Group 2572">
                  <g id="Group_2568" data-name="Group 2568">
                    <line
                      id="Line_51"
                      data-name="Line 51"
                      y1="11.907"
                      transform="translate(0 15.282)"
                      fill="none"
                      className="stroke-element"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1"
                    />
                    <line
                      id="Line_52"
                      data-name="Line 52"
                      y1="7.723"
                      fill="none"
                      className="stroke-element"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1"
                    />
                  </g>
                  <g
                    id="Group_2569"
                    data-name="Group 2569"
                    transform="translate(6.823)"
                  >
                    <line
                      id="Line_53"
                      data-name="Line 53"
                      y1="5.907"
                      transform="translate(0 21.282)"
                      fill="none"
                      className="stroke-element"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1"
                    />
                    <line
                      id="Line_54"
                      data-name="Line 54"
                      y1="13.723"
                      fill="none"
                      className="stroke-element"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1"
                    />
                  </g>
                  <g
                    id="Group_2570"
                    data-name="Group 2570"
                    transform="translate(13.646)"
                  >
                    <line
                      id="Line_55"
                      data-name="Line 55"
                      y1="19.723"
                      fill="none"
                      className="stroke-element"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1"
                    />
                  </g>
                  <g
                    id="Group_2571"
                    data-name="Group 2571"
                    transform="translate(20.469)"
                  >
                    <line
                      id="Line_56"
                      data-name="Line 56"
                      y1="17.007"
                      transform="translate(0 10.182)"
                      fill="none"
                      className="stroke-element"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1"
                    />
                    <line
                      id="Line_57"
                      data-name="Line 57"
                      y1="2.623"
                      fill="none"
                      className="stroke-element"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1"
                    />
                  </g>
                </g>
              </g>
              <rect
                id="Rectangle_2429"
                data-name="Rectangle 2429"
                width="6.831"
                height="2.459"
                transform="translate(0 7.723)"
                fill="none"
                className="stroke-element"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1"
              />
              <rect
                id="Rectangle_2430"
                data-name="Rectangle 2430"
                width="6.831"
                height="2.459"
                transform="translate(6.827 13.723)"
                fill="none"
                className="stroke-element"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1"
              />
              <rect
                id="Rectangle_2431"
                data-name="Rectangle 2431"
                width="6.831"
                height="2.459"
                transform="translate(13.649 19.723)"
                fill="none"
                className="stroke-element"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1"
              />
              <rect
                id="Rectangle_2432"
                data-name="Rectangle 2432"
                width="6.831"
                height="2.459"
                transform="translate(20.472 2.632)"
                fill="none"
                className="stroke-element"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1"
              />
            </g>
          </g>
        </g>
      </g>
    </Icon>
  );
};

export const BookingsIcon = (props: IIconProps) => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="99.277"
      height="99.56"
      viewBox="0 0 99.277 99.56"
      selected={props.selected}
      style={{ width: 30, height: 30 }}
    >
      <g id="Calendar" transform="translate(1.839 1.839)">
        <g
          id="Component_145_1"
          data-name="Component 145 1"
          transform="translate(-3541.003 -4095.559)"
        >
          <path
            id="Path_2899"
            data-name="Path 2899"
            d="M3636.576,4121.62H3541v-20.242h95.6Z"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.677"
          />
          <line
            id="Line_308"
            data-name="Line 308"
            y1="5.807"
            transform="translate(3558.24 4095.559)"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.677"
          />
          <line
            id="Line_309"
            data-name="Line 309"
            y1="5.807"
            transform="translate(3619.305 4095.559)"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.677"
          />
          <path
            id="Path_2900"
            data-name="Path 2900"
            d="M3636.576,4191.442H3541V4101.36h95.6Z"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.677"
          />
          <line
            id="Line_310"
            data-name="Line 310"
            x1="0.325"
            transform="translate(3564.239 4167.161)"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.677"
          />
          <line
            id="Line_311"
            data-name="Line 311"
            x1="0.325"
            transform="translate(3581.221 4167.161)"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.677"
          />
          <line
            id="Line_312"
            data-name="Line 312"
            x1="0.325"
            transform="translate(3597.656 4167.161)"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.677"
          />
          <line
            id="Line_313"
            data-name="Line 313"
            x1="0.325"
            transform="translate(3614.633 4167.161)"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.677"
          />
          <line
            id="Line_318"
            data-name="Line 318"
            x1="0.325"
            transform="translate(3564.239 4144.782)"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.677"
          />
          <line
            id="Line_319"
            data-name="Line 319"
            x1="0.325"
            transform="translate(3581.221 4144.782)"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.677"
          />
          <line
            id="Line_320"
            data-name="Line 320"
            x1="0.325"
            transform="translate(3597.656 4144.782)"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.677"
          />
          <line
            id="Line_321"
            data-name="Line 321"
            x1="0.325"
            transform="translate(3614.633 4144.782)"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.677"
          />
        </g>
      </g>
    </Icon>
  );
};

export const CovidIcon = (props: IIconProps) => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="28.325"
      height="28.325"
      viewBox="0 0 28.325 28.325"
      selected={props.selected}
    >
      <g
        id="Group_7537"
        data-name="Group 7537"
        transform="translate(-3132.338 -6299.679)"
      >
        <circle
          id="Ellipse_262"
          data-name="Ellipse 262"
          cx="8.393"
          cy="8.393"
          r="8.393"
          transform="translate(3138.143 6305.383)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <circle
          id="Ellipse_263"
          data-name="Ellipse 263"
          cx="2.254"
          cy="2.254"
          r="2.254"
          transform="translate(3143.03 6315.382)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <circle
          id="Ellipse_264"
          data-name="Ellipse 264"
          cx="1.89"
          cy="1.89"
          r="1.89"
          transform="translate(3146.481 6307.848)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <circle
          id="Ellipse_265"
          data-name="Ellipse 265"
          cx="0.954"
          cy="0.954"
          r="0.954"
          transform="translate(3150.473 6313.229)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <circle
          id="Ellipse_266"
          data-name="Ellipse 266"
          cx="0.954"
          cy="0.954"
          r="0.954"
          transform="translate(3141.711 6310.829)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <path
          id="Path_2889"
          data-name="Path 2889"
          d="M3175.817,6305.471v-2.763a1.264,1.264,0,0,0,0-2.528h-2.528a1.264,1.264,0,1,0,0,2.528v2.77"
          transform="translate(-28.098)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <path
          id="Path_2890"
          data-name="Path 2890"
          d="M3210.684,6343.158h2.763a1.264,1.264,0,1,0,2.528,0v-2.528a1.264,1.264,0,1,0-2.528,0h-2.771"
          transform="translate(-55.812 -28.098)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <path
          id="Path_2891"
          data-name="Path 2891"
          d="M3173.61,6378.025v2.763a1.264,1.264,0,0,0,0,2.528h2.529a1.264,1.264,0,1,0,0-2.528v-2.77"
          transform="translate(-28.328 -55.813)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <path
          id="Path_2892"
          data-name="Path 2892"
          d="M3138.129,6340.951h-2.763a1.264,1.264,0,0,0-2.528,0v2.528a1.264,1.264,0,1,0,2.528,0h2.771"
          transform="translate(0 -28.328)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <path
          id="Path_2893"
          data-name="Path 2893"
          d="M3200.54,6315.646l1.954-1.954a1.264,1.264,0,1,0,1.788-1.788l-1.788-1.788a1.264,1.264,0,0,0-1.788,1.788l-1.959,1.959"
          transform="translate(-47.259 -6.862)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <path
          id="Path_2894"
          data-name="Path 2894"
          d="M3198.993,6367.881l1.954,1.954a1.264,1.264,0,0,0,1.788,1.788l1.788-1.788a1.264,1.264,0,0,0-1.788-1.788l-1.959-1.959"
          transform="translate(-47.435 -47.258)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <path
          id="Path_2895"
          data-name="Path 2895"
          d="M3146.744,6366.334l-1.954,1.954a1.264,1.264,0,1,0-1.788,1.788l1.788,1.788a1.264,1.264,0,0,0,1.788-1.788l1.959-1.959"
          transform="translate(-7.025 -47.435)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <path
          id="Path_2896"
          data-name="Path 2896"
          d="M3148.305,6314.085l-1.954-1.954a1.264,1.264,0,0,0-1.788-1.788l-1.788,1.789a1.264,1.264,0,0,0,1.788,1.788l1.959,1.958"
          transform="translate(-6.863 -7.025)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      </g>
    </Icon>
  );
};

export const UploadIcon = (props: IIconProps) => {
  return (
    <Icon
      selected={props.selected}
      xmlns="http://www.w3.org/2000/svg"
      width="28.067"
      height="28.067"
      viewBox="0 0 28.067 28.067"
    >
      <g
        id="Сгруппировать_6569"
        data-name="Сгруппировать 6569"
        transform="translate(-1741.293 -4096.338)"
      >
        <circle
          id="Эллипс_270"
          data-name="Эллипс 270"
          cx="13.534"
          cy="13.534"
          r="13.534"
          transform="translate(1741.793 4096.838)"
          fill="none"
          className="stroke-element"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <g
          id="Сгруппировать_7562"
          data-name="Сгруппировать 7562"
          transform="translate(-0.173 -0.229)"
        >
          <line
            id="Линия_306"
            data-name="Линия 306"
            y1="8.341"
            transform="translate(1753.513 4102.568)"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
          <line
            id="Линия_307"
            data-name="Линия 307"
            y1="8.341"
            transform="translate(1757.513 4117.906) rotate(180)"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
          <path
            id="Контур_2788"
            data-name="Контур 2788"
            d="M1778.36,4124.322l-3.048-3.048-3.048,3.048"
            transform="translate(-21.8 -18.707)"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
          <path
            id="Контур_2898"
            data-name="Контур 2898"
            d="M1778.36,4124.322l-3.048-3.048-3.048,3.048"
            transform="translate(3532.826 8239.183) rotate(180)"
            fill="none"
            className="stroke-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
        </g>
      </g>
    </Icon>
  );
};

export const MeetingsIcon = (props: IIconProps) => {
  return (
    <Icon
      selected={props.selected}
      xmlns="http://www.w3.org/2000/svg"
      width="15.8"
      height="16.401"
      viewBox="0 0 15.8 16.401"
    >
      <g
        fill="none"
        stroke="#434447"
        strokeLinecap="round"
        strokeWidth="0.8"
        data-name="Сгруппировать 7566"
        transform="translate(-1142.617 -5795.536)"
      >
        <g
          strokeMiterlimit="10"
          data-name="Сгруппировать 7564"
          transform="translate(1143.017 5795.936)"
        >
          <circle cx="1.246" cy="1.246" r="1.246" data-name="Эллипс 273" />
          <circle
            cx="1.246"
            cy="1.246"
            r="1.246"
            data-name="Эллипс 274"
            transform="translate(4.163)"
          />
          <circle
            cx="1.246"
            cy="1.246"
            r="1.246"
            data-name="Эллипс 275"
            transform="translate(8.325)"
          />
          <circle
            cx="1.246"
            cy="1.246"
            r="1.246"
            data-name="Эллипс 276"
            transform="translate(12.488)"
          />
        </g>
        <path
          strokeLinejoin="round"
          d="M1143.017 5800.098h15v7.276h-15z"
          data-name="Контур 2901"
        />
        <g
          strokeMiterlimit="10"
          data-name="Сгруппировать 7565"
          transform="translate(1143.037 5809.045)"
        >
          <circle
            cx="1.246"
            cy="1.246"
            r="1.246"
            data-name="Эллипс 277"
            transform="translate(12.488)"
          />
          <circle
            cx="1.246"
            cy="1.246"
            r="1.246"
            data-name="Эллипс 278"
            transform="translate(8.325)"
          />
          <circle
            cx="1.246"
            cy="1.246"
            r="1.246"
            data-name="Эллипс 279"
            transform="translate(4.163)"
          />
          <circle cx="1.246" cy="1.246" r="1.246" data-name="Эллипс 280" />
        </g>
      </g>
    </Icon>
  );
};
