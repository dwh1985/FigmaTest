/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Delete13 } from "../../icons/Delete13";
import "./style.css";

export const ButtonDeletegate = ({ stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <div
      className={`button-deletegate ${state.state} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <Delete13 className="delete" color={state.state === "default" ? "#898989" : "#FF6669"} />
      {state.state === "hover-text" && <div className="text-wrapper-2">Delete gate</div>}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover-text",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

ButtonDeletegate.propTypes = {
  stateProp: PropTypes.oneOf(["hover-text", "hover-1", "default"]),
};
