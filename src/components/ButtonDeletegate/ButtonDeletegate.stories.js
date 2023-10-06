import { ButtonDeletegate } from ".";

export default {
  title: "Components/ButtonDeletegate",
  component: ButtonDeletegate,
  argTypes: {
    stateProp: {
      options: ["hover-text", "hover-1", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "hover-text",
    className: {},
  },
};
