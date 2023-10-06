/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { StyleSharp } from "../../icons/StyleSharp";
import "./style.css";

export const HeaderTop = ({ className }) => {
  return (
    <div className={`header-top ${className}`}>
      <div className="text-wrapper">DFW</div>
      <div className="action-container">
        <button className="button">
          <button className="button-text">Create</button>
          <StyleSharp className="keyboard-arrow-down" color="white" />
        </button>
        <div className="avatar">
          <div className="avatar-image">
            <div className="div">SC</div>
          </div>
        </div>
      </div>
    </div>
  );
};
