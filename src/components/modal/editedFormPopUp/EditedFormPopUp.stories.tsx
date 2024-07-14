import { Meta, StoryFn } from "@storybook/react";
import EditedFormPopUp, { editedFormPopUp } from "./index";

const meta: Meta<typeof EditedFormPopUp> = {
	title: "Components/EditedFormPopUp",
	component: EditedFormPopUp,
	argTypes: {
		open: {
			control: "boolean",
		},
		onOpenChange: { action: "onOpenChange" },
		onConfirmCloseModal: { action: "onConfirmCloseModal" },
	},
};

export default meta;

const Template: StoryFn<editedFormPopUp> = (args) => (
	<EditedFormPopUp {...args} />
);

export const Default: StoryFn<editedFormPopUp> = Template.bind({});
Default.args = {
	open: true,
};

export const Closed: StoryFn<editedFormPopUp> = Template.bind({});
Closed.args = {
	open: false,
};
