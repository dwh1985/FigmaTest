/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ActionButtonText = ({ state, className, text = "Terminal A", onClick }) => {
  return (
    <div className={`action-button-text ${className}`} onClick={onClick}>
      <div className={`tab-label-3 state-${state}`}>{text}</div>
    </div>
  );
};

ActionButtonText.propTypes = {
  state: PropTypes.oneOf(["selected", "unselected"]),
  text: PropTypes.string,
};
