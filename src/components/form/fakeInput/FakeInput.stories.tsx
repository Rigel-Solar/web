import { Meta, StoryFn } from "@storybook/react";
import FakeInput, { fakeInputProps } from "./index";

export default {
	title: "Components/Form/FakeInput",
	component: FakeInput,
	argTypes: {
		label: { control: "text" },
		value: { control: "text" },
	},
} as Meta;

const Template: StoryFn<fakeInputProps> = (args) => <FakeInput {...args} />;

export const Default: StoryFn<fakeInputProps> = Template.bind({});
Default.args = {
	label: "Default Label",
	value: "Default Value",
};

export const WithoutLabel: StoryFn<fakeInputProps> = Template.bind({});
WithoutLabel.args = {
	value: "Value without label",
};

export const CustomStyled: StoryFn<fakeInputProps> = Template.bind({});
CustomStyled.args = {
	label: "Styled Label",
	value: "Styled Value",
	style: { backgroundColor: "lightgrey", padding: "10px", borderRadius: "5px" },
};
