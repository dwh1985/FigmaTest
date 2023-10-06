/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { ActionButtonText } from "../ActionButtonText";
import { TerminalSelectBg } from "../TerminalSelectBg";
import "./style.css";

export const TerminalTabs = ({ terminalSelection }) => {
  const [state, dispatch] = useReducer(reducer, {
    terminalSelection: terminalSelection || "a",
  });

  return (
    <div
      className="terminal-tabs"
      data-collection-1-mode={
        state.terminalSelection === "b"
          ? "terminal-b-selected"
          : state.terminalSelection === "c"
          ? "terminal-c-selected"
          : state.terminalSelection === "d"
          ? "terminal-d-selected"
          : "terminal-a-selected"
      }
    >
      <div className="overlap-group-2">
        <TerminalSelectBg
          className={`${
            state.terminalSelection === "b"
              ? "terminal-b"
              : state.terminalSelection === "c"
              ? "terminal-c"
              : state.terminalSelection === "d"
              ? "terminal-d"
              : "terminal-a"
          }`}
        />
        <div className="buttons">
          <ActionButtonText
            className="terminal-a"
            onClick={() => {
              dispatch("click_559");
            }}
            state={state.terminalSelection === "a" ? "selected" : "unselected"}
            text="Terminal A"
          />
          <ActionButtonText
            className="terminal-b"
            onClick={() => {
              dispatch("click");
            }}
            state={state.terminalSelection === "b" ? "selected" : "unselected"}
            text="Terminal B"
          />
          <ActionButtonText
            className="terminal-c"
            onClick={() => {
              dispatch("click_551");
            }}
            state={state.terminalSelection === "c" ? "selected" : "unselected"}
            text="Terminal C"
          />
          <ActionButtonText
            className="terminal-d"
            onClick={() => {
              dispatch("click_553");
            }}
            state={state.terminalSelection === "d" ? "selected" : "unselected"}
            text="Terminal D"
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
        terminalSelection: "b",
      };

    case "click_551":
      return {
        ...state,
        terminalSelection: "c",
      };

    case "click_553":
      return {
        ...state,
        terminalSelection: "d",
      };

    case "click_559":
      return {
        ...state,
        terminalSelection: "a",
      };
  }

  return state;
}

TerminalTabs.propTypes = {
  terminalSelection: PropTypes.oneOf(["b", "d", "c", "a"]),
};
