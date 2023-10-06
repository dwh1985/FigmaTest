/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TabButtonText = ({ state, className, tabLabelClassName, text = "Pushback conflict", onClick }) => {
  return (
    <div className={`tab-button-text ${state} ${className}`} onClick={onClick}>
      {state === "enabled" && <div className={`tab-label ${tabLabelClassName}`}>{text}</div>}

      {state === "selected" && (
        <>
          <div className="active-indicator" />
          <div className="tab-label-2">{text}</div>
        </>
      )}
    </div>
  );
};

TabButtonText.propTypes = {
  state: PropTypes.oneOf(["selected", "enabled"]),
  text: PropTypes.string,
};
