import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Header, { HeaderProps } from "./index";

const meta: Meta<typeof Header> = {
	title: "Components/Header",
	component: Header,
	decorators: [
		(Story) => (
			<BrowserRouter>
				<Story />
			</BrowserRouter>
		),
	],
	argTypes: {
		open: {
			control: "boolean",
		},
		setOpen: { action: "setOpen" },
	},
};

export default meta;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const Default: StoryFn<HeaderProps> = Template.bind({});
Default.args = {
	open: true,
};

export const Closed: StoryFn<HeaderProps> = Template.bind({});
Closed.args = {
	open: false,
};
