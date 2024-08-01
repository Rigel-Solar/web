/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta, StoryFn } from "@storybook/react";
import MultiSelect, { multiSelectProps } from "./index";

const meta: Meta = {
	title: "Components/MultiSelect",
	component: MultiSelect,
	argTypes: {
		error: {
			control: "text",
			description: "Error message to be displayed",
		},
		required: {
			control: "boolean",
			description: "Indicates if the field is required",
		},
		$selectStyle: {
			control: {
				type: "select",
				options: ["primary", "secondary"],
			},
			description: "Style of the select component",
		},
	},
};

export default meta;

const Template: StoryFn<multiSelectProps & any> = (args) => (
	<MultiSelect options={} {...args} />
);

export const Default: StoryFn<multiSelectProps & any> = Template.bind({});
Default.args = {
	error: "",
	required: false,
	$selectStyle: "primary",
};

export const WithError: StoryFn<multiSelectProps & any> = Template.bind({});
WithError.args = {
	error: "This is an error message",
	required: true,
	$selectStyle: "primary",
};

export const SecondaryStyle: StoryFn<multiSelectProps & any> = Template.bind(
	{}
);
SecondaryStyle.args = {
	error: "",
	required: false,
	$selectStyle: "secondary",
};
