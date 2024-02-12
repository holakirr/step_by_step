import type { Meta, StoryObj } from "@storybook/react";
import { Notification } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Components/Notification",
	component: Notification,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {},
	args: {},
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		index: 0,
		id: "notification",
		title: "Notification",
		type: "info",
		message: "This is a notification",
		time: "2021-01-01T00:00:00.000Z",
	},
};
