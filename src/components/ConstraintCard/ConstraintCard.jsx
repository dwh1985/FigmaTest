/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonDeletegate } from "../ButtonDeletegate";
import { Chip } from "../Chip";
import "./style.css";

export const ConstraintCard = ({ state, className }) => {
  return (
    <div className={`constraint-card state-${state} ${className}`}>
      <div className="top">
        <div className="primary-label">Gate 44</div>
        <ButtonDeletegate className="button-deletegate-instance" stateProp="default" />
      </div>
      <div className="bottom">
        <div className="blocked-line">
          {state === "enabled" && <div className="text-wrapper-3">Blocked by</div>}

          {state === "hover" && (
            <>
              <p className="span-wrapper">
                <span className="span">Blocked by</span>
              </p>
              <p className="span-wrapper">
                <span className="text-wrapper-4">&nbsp;</span>
              </p>
              <p className="span-wrapper">
                <span className="text-wrapper-5">Gate 23</span>
              </p>
            </>
          )}
        </div>
        <div className="fitment-group">
          <Chip chipLabelClassName="chip-instance" className="instance-node" text="Narrow body" visible={false} />
          <Chip chipLabelClassName="chip-instance" className="instance-node" text="Wide body" visible={false} />
          <Chip chipLabelClassName="chip-instance" className="instance-node" text="A319" visible={false} />
          <Chip chipLabelClassName="chip-instance" className="instance-node" text="A320" visible={false} />
          <Chip chipLabelClassName="chip-instance" className="instance-node" text="A321" visible={false} />
          <Chip chipLabelClassName="chip-instance" className="instance-node" text="777" visible={false} />
          <Chip chipLabelClassName="chip-instance" className="instance-node" text="787" visible={false} />
          <Chip chipLabelClassName="chip-instance" className="instance-node" text="A737-800" visible={false} />
        </div>
      </div>
    </div>
  );
};

ConstraintCard.propTypes = {
  state: PropTypes.oneOf(["hover", "enabled"]),
};
