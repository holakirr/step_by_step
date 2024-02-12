import type { Meta, StoryObj } from "@storybook/react";
import { Notifications } from ".";
import { Base as NotificationBase } from "./Notification/Notification.stories";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Components/Notifications",
	component: Notifications,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {},
	args: {},
} satisfies Meta<typeof Notifications>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [NotificationBase.args, NotificationBase.args];

export const Base: Story = {
	args: {
		data,
	},
};
