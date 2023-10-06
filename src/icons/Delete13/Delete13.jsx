/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Delete13 = ({ color = "#FF6669", className }) => {
  return (
    <svg
      className={`delete-13 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6.20007 19C6.20007 20.1 7.10007 21 8.20007 21H16.2001C17.3001 21 18.2001 20.1 18.2001 19V7H6.20007V19ZM19.2001 4H15.7001L14.7001 3H9.70007L8.70007 4H5.20007V6H19.2001V4Z"
        fill={color}
      />
    </svg>
  );
};

Delete13.propTypes = {
  color: PropTypes.string,
};
