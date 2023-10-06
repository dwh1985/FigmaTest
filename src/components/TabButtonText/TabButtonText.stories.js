import { TabButtonText } from ".";

export default {
  title: "Components/TabButtonText",
  component: TabButtonText,
  argTypes: {
    state: {
      options: ["selected", "enabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "selected",
    className: {},
    tabLabelClassName: {},
    text: "Pushback conflict",
  },
};
