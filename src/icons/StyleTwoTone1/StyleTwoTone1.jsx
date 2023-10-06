/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const StyleTwoTone1 = ({ color = "#1B1B1B", className }) => {
  return (
    <svg
      className={`style-two-tone-1 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12.6667 4.27333L11.7267 3.33333L8 7.06L4.27334 3.33333L3.33334 4.27333L7.06 8L3.33334 11.7267L4.27334 12.6667L8 8.94L11.7267 12.6667L12.6667 11.7267L8.94 8L12.6667 4.27333Z"
        fill={color}
      />
    </svg>
  );
};

StyleTwoTone1.propTypes = {
  color: PropTypes.string,
};
