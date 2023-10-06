import { TerminalTabs } from ".";

export default {
  title: "Components/TerminalTabs",
  component: TerminalTabs,
  argTypes: {
    terminalSelection: {
      options: ["b", "d", "c", "a"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    terminalSelection: "b",
  },
};
