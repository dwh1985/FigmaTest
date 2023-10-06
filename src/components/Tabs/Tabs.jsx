/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { TabButtonText } from "../TabButtonText";
import "./style.css";

export const Tabs = ({ selection, className, overlapGroupClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    selection: selection || "gate-selected",
  });

  return (
    <div className={`tabs ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <div className="indicator-container">
          <div className={`active-indicator-2 ${state.selection}`} />
        </div>
        <div className={`tab-container selection-${state.selection}`}>
          <TabButtonText
            className={`${state.selection === "gate-selected" ? "class" : "class-2"}`}
            onClick={() => {
              dispatch("click_614");
            }}
            state="enabled"
            tabLabelClassName={`${state.selection === "gate-selected" && "class-3"}`}
            text="Gate"
          />
          <TabButtonText
            className={`${state.selection === "gate-selected" ? "class" : "class-4"}`}
            onClick={() => {
              dispatch("click");
            }}
            state="enabled"
            tabLabelClassName={`${state.selection === "zone-selected" && "class-3"}`}
            text="Zone"
          />
          <TabButtonText
            className={`${state.selection === "gate-selected" ? "class" : "class-5"}`}
            onClick={() => {
              dispatch("click_605");
            }}
            state="enabled"
            tabLabelClassName={`${state.selection === "pushback-conflict-selected" && "class-3"}`}
            text="Pushback conflict"
          />
          <TabButtonText
            className={`${state.selection === "gate-selected" ? "class" : "class-6"}`}
            onClick={() => {
              dispatch("click_607");
            }}
            state="enabled"
            tabLabelClassName={`${state.selection === "adjacent-constraint-selected" && "class-3"}`}
            text="Adjacent constraint"
          />
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        selection: "zone-selected",
      };

    case "click_605":
      return {
        ...state,
        selection: "pushback-conflict-selected",
      };

    case "click_607":
      return {
        ...state,
        selection: "adjacent-constraint-selected",
      };

    case "click_614":
      return {
        ...state,
        selection: "gate-selected",
      };
  }

  return state;
}

Tabs.propTypes = {
  selection: PropTypes.oneOf([
    "zone-selected",
    "adjacent-constraint-selected",
    "gate-selected",
    "pushback-conflict-selected",
  ]),
};
