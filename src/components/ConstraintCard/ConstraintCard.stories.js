import { ConstraintCard } from ".";

export default {
  title: "Components/ConstraintCard",
  component: ConstraintCard,
  argTypes: {
    state: {
      options: ["hover", "enabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "hover",
    className: {},
  },
};
