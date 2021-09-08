import React from "react";

 const Kiosk = ({ color }: { color?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.33 99.06">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon
            points="1.5 40.86 14.49 1.5 83.84 1.5 96.83 40.86 1.5 40.86"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <line
            x1="42.3"
            y1="96.56"
            x2="42.3"
            y2="41.37"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <line
            x1="56.03"
            y1="96.56"
            x2="56.03"
            y2="41.37"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <line
            x1="32.27"
            y1="97.56"
            x2="66.06"
            y2="97.56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <line
            x1="75.15"
            y1="1.63"
            x2="67.56"
            y2="9.22"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <line
            x1="83.84"
            y1="1.5"
            x2="69.85"
            y2="15.5"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        </g>
      </g>
    </svg>
  );
};


export default Kiosk