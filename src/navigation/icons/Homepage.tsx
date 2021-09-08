import React from "react";

const Homepage = ({ color }: { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26.582"
      height="26.609"
      viewBox="0 0 26.582 26.609"
    >
      <path
        id="Path_1163"
        data-name="Path 1163"
        d="M2558.677,4364.67v8.711h9.974v-16.74l-12.791-8.869-12.791,8.869v16.74h9.974v-8.711Z"
        transform="translate(-2542.57 -4347.271)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      />
    </svg>
  );
};

export default Homepage;
