import { ActionButtonText } from ".";

export default {
  title: "Components/ActionButtonText",
  component: ActionButtonText,
  argTypes: {
    state: {
      options: ["selected", "unselected"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "selected",
    className: {},
    text: "Terminal A",
  },
};
