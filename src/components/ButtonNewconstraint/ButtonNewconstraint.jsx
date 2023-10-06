/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonNewconstraint = ({ text = "New constraint", className }) => {
  return (
    <div className={`button-newconstraint ${className}`}>
      <img className="add" alt="Add" src="/img/add-1.svg" />
      <div className="button-text-2">{text}</div>
    </div>
  );
};

ButtonNewconstraint.propTypes = {
  text: PropTypes.string,
};
