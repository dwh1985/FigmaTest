import { Tabs } from ".";

export default {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    selection: {
      options: ["zone-selected", "adjacent-constraint-selected", "gate-selected", "pushback-conflict-selected"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    selection: "zone-selected",
    className: {},
    overlapGroupClassName: {},
  },
};
