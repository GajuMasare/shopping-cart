import React from "react";

const RemoveSvg = ({ remove }) => {
  return (
    <div onClick={remove}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="md:h-5 md:w-5 h-3 w-3 text-red-500 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default RemoveSvg;
