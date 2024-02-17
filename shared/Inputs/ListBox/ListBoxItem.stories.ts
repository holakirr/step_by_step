import type { Meta, StoryObj } from "@storybook/react";
import { ListBoxItem } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Components/ListBoxItem",
	component: ListBoxItem,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {},
	args: {},
} satisfies Meta<typeof ListBoxItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		name: "Wade Cooper",
		id: "Wade Cooper",
	},
};
