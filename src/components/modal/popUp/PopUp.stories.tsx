import { Meta, StoryFn } from "@storybook/react";
import { PopUp, PopUpContent, PopUpHeader, popUpModalprops } from "./index";

const meta: Meta<typeof PopUp> = {
	title: "Components/PopUp",
	component: PopUp,
	argTypes: {
		contentStyle: {
			control: "object",
		},
		overlayStyle: {
			control: "object",
		},
		hasPortal: {
			control: "boolean",
		},
		open: {
			control: "boolean",
		},
		onOpenChange: { action: "onOpenChange" },
	},
};

export default meta;

const Template: StoryFn<popUpModalprops> = (args) => (
	<PopUp {...args}>
		<PopUpHeader>
			<h2>PopUp Title</h2>
		</PopUpHeader>
		<PopUpContent>
			<p>This is the content of the popup</p>
		</PopUpContent>
	</PopUp>
);

export const Default: StoryFn<popUpModalprops> = Template.bind({});
Default.args = {
	open: true,
	hasPortal: false,
	contentStyle: {},
	overlayStyle: {},
};

export const WithPortal: StoryFn<popUpModalprops> = Template.bind({});
WithPortal.args = {
	open: true,
	hasPortal: true,
	contentStyle: {},
	overlayStyle: {},
};

export const CustomStyles: StoryFn<popUpModalprops> = Template.bind({});
CustomStyles.args = {
	open: true,
	hasPortal: false,
	contentStyle: { backgroundColor: "lightblue" },
	overlayStyle: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
};

export const Closed: StoryFn<popUpModalprops> = Template.bind({});
Closed.args = {
	open: false,
	hasPortal: false,
	contentStyle: {},
	overlayStyle: {},
};
