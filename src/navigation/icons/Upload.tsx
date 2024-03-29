import React from "react";

const Upload = ({ color }: { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="94.414"
      height="94.414"
      viewBox="0 0 94.414 94.414"
    >
      <g id="Group_6569" data-name="Group 6569" transform="translate(-1740.293 -4095.338)">
        <circle
          id="Ellipse_270"
          data-name="Ellipse 270"
          cx="45.707"
          cy="45.707"
          r="45.707"
          transform="translate(1741.793 4096.838)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <g id="Group_7562" data-name="Group 7562" transform="translate(1770.499 4115.412)">
          <line
            id="Line_306"
            data-name="Line 306"
            y1="28.169"
            transform="translate(10.293 0.003)"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <line
            id="Line_307"
            data-name="Line 307"
            y1="28.169"
            transform="translate(23.801 51.804) rotate(180)"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
            id="Path_2788"
            data-name="Path 2788"
            d="M1792.851,4131.57l-10.293-10.295-10.293,10.295"
            transform="translate(-1772.266 -4121.275)"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
            id="Path_2898"
            data-name="Path 2898"
            d="M20.585,10.295,10.293,0,0,10.295"
            transform="translate(34.093 51.811) rotate(180)"
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

export default Upload;
