import type { Meta, StoryObj } from "@storybook/react";
import { ListBox } from ".";
import { ListBoxOption } from "./ListBoxItem";

const people = [
  {
    name: "Wade Cooper",
    id: "Wade Cooper",
  },
  {
    name: "Arlene Mccoy",
    id: "Arlene Mccoy",
  },
  {
    name: "Devon Webb",
    id: "Devon Webb",
  },
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Inputs/ListBox",
  component: ListBox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {
    items: people,
    name: "name",
  },
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    selected: people[0],
    multiple: false,
    setSelected: (item: ListBoxOption) => {
      console.log("setSelected", item);
    },
  },
};

export const Multiple: Story = {
  args: {
    selected: [people[0]],
    multiple: true,
    setSelected: (item: ListBoxOption[]) => {
      console.log("setSelected", item);
    },
  },
};
