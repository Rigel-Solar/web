import { Meta, StoryFn } from "@storybook/react";
import PopUpDelete, { PopUpDeleteProps } from "./index";

const meta: Meta<typeof PopUpDelete> = {
	title: "Components/Modal/PopUpDelete",
	component: PopUpDelete,
	argTypes: {
		open: {
			control: "boolean",
		},
		onOpenChange: { action: "onOpenChange" },
	},
};

export default meta;

const Template: StoryFn<PopUpDeleteProps> = (args) => <PopUpDelete {...args} />;

export const Default: StoryFn<PopUpDeleteProps> = Template.bind({});
Default.args = {
	open: true,
};

export const Closed: StoryFn<PopUpDeleteProps> = Template.bind({});
Closed.args = {
	open: false,
};
