import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from ".";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	argTypes: {
		buttonStyle: {
			control: {
				type: "select",
				options: ["primary", "secondary", "text", "link"],
			},
		},
		buttonState: {
			control: {
				type: "select",
				options: ["normal", "error", "success"],
			},
		},
		isLoading: {
			control: "boolean",
		},
		disabled: {
			control: "boolean",
		},
	},
};

export default meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary: StoryFn<ButtonProps> = Template.bind({});
Primary.args = {
	buttonStyle: "primary",
	children: "Primary Button",
	buttonState: "normal",
	isLoading: false,
	disabled: false,
};

export const Secondary: StoryFn<ButtonProps> = Template.bind({});
Secondary.args = {
	buttonStyle: "secondary",
	children: "Secondary Button",
	buttonState: "normal",
	isLoading: false,
	disabled: false,
};

export const Text: StoryFn<ButtonProps> = Template.bind({});
Text.args = {
	buttonStyle: "text",
	children: "Text Button",
	buttonState: "normal",
	isLoading: false,
	disabled: false,
};

export const Link: StoryFn<ButtonProps> = Template.bind({});
Link.args = {
	buttonStyle: "link",
	children: "Link Button",
	buttonState: "normal",
	isLoading: false,
	disabled: false,
};

export const Loading: StoryFn<ButtonProps> = Template.bind({});
Loading.args = {
	buttonStyle: "primary",
	children: "Loading Button",
	buttonState: "normal",
	isLoading: true,
	disabled: false,
};

export const Disabled: StoryFn<ButtonProps> = Template.bind({});
Disabled.args = {
	buttonStyle: "primary",
	children: "Disabled Button",
	buttonState: "normal",
	isLoading: false,
	disabled: true,
};

export const Success: StoryFn<ButtonProps> = Template.bind({});
Success.args = {
	buttonStyle: "primary",
	children: "Success Button",
	buttonState: "success",
	isLoading: false,
	disabled: false,
};

export const Error: StoryFn<ButtonProps> = Template.bind({});
Error.args = {
	buttonStyle: "primary",
	children: "Error Button",
	buttonState: "error",
	isLoading: false,
	disabled: false,
};
