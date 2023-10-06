import React from "react";
import { ButtonNewconstraint } from "../../components/ButtonNewconstraint";
import { ConstraintCard } from "../../components/ConstraintCard";
import { HeaderTop } from "../../components/HeaderTop";
import { Tabs } from "../../components/Tabs";
import { TerminalTabs } from "../../components/TerminalTabs";
import "./style.css";

export const AdjacentConstraint = () => {
  return (
    <div className="adjacent-constraint">
      <header className="header">
        <HeaderTop className="header-top-instance" />
        <div className="tabs-container">
          <Tabs
            className="tabs-instance"
            overlapGroupClassName="design-component-instance-node"
            selection="gate-selected"
          />
        </div>
      </header>
      <div className="content-area">
        <div className="content">
          <div className="action-row">
            <TerminalTabs terminalSelection="a" />
            <ButtonNewconstraint className="button-newconstraint-instance" text="New constraint" />
          </div>
          <div className="card-container">
            <ConstraintCard className="constraint-card-instance" state="enabled" />
            <ConstraintCard className="constraint-card-instance" state="enabled" />
            <ConstraintCard className="constraint-card-instance" state="enabled" />
            <ConstraintCard className="constraint-card-instance" state="enabled" />
            <ConstraintCard className="constraint-card-instance" state="enabled" />
            <ConstraintCard className="constraint-card-instance" state="enabled" />
            <ConstraintCard className="constraint-card-instance" state="enabled" />
            <ConstraintCard className="constraint-card-instance" state="enabled" />
            <ConstraintCard className="constraint-card-instance" state="enabled" />
            <ConstraintCard className="constraint-card-instance" state="enabled" />
            <ConstraintCard className="constraint-card-instance" state="enabled" />
            <ConstraintCard className="constraint-card-instance" state="enabled" />
          </div>
        </div>
      </div>
    </div>
  );
};
