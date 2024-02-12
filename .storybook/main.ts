import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
	stories: ["../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@storybook/addon-interactions",
	],
	build: {
		test: {
			disabledAddons: [
				"@storybook/addon-docs",
				"@storybook/addon-essentials/docs",
			],
		},
	},
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	typescript: {
		reactDocgen: "react-docgen",
	},
};

export default config;
