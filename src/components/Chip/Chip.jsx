/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { StyleTwoTone1 } from "../../icons/StyleTwoTone1";
import "./style.css";

export const Chip = ({ className, chipLabelClassName, text = "No zone", visible = true }) => {
  return (
    <div className={`chip ${className}`}>
      <div className={`chip-label ${chipLabelClassName}`}>{text}</div>
      {visible && <StyleTwoTone1 className="close" color="white" />}
    </div>
  );
};

Chip.propTypes = {
  text: PropTypes.string,
  visible: PropTypes.bool,
};
