import { Meta, StoryFn } from "@storybook/react";
import {
	ActionAlertDialogContent,
	ActionAlertDialogHeader,
	ActionAlertDialogRoot,
	ActionAlertDialogTriggerButtons,
	ActionAlertDialogTriggerClose,
	ActionAlertDialogTriggerSuccess,
	actionModalRootProps,
} from "./index";

const meta: Meta<typeof ActionAlertDialogRoot> = {
	title: "Components/Modal/ActionAlertDialog",
	component: ActionAlertDialogRoot,
	argTypes: {
		contentStyle: {
			control: "object",
		},
		overlayStyle: {
			control: "object",
		},
		position: {
			control: {
				type: "select",
				options: ["left", "right"],
			},
		},
		open: {
			control: "boolean",
		},
	},
};

export default meta;

const Template: StoryFn<actionModalRootProps> = (args) => (
	<ActionAlertDialogRoot {...args}>
		<ActionAlertDialogHeader>Alert Header</ActionAlertDialogHeader>
		<ActionAlertDialogContent>
			This is an alert dialog content.
		</ActionAlertDialogContent>
		<ActionAlertDialogTriggerButtons>
			<ActionAlertDialogTriggerClose>Cancelar</ActionAlertDialogTriggerClose>
			<ActionAlertDialogTriggerSuccess>Criar</ActionAlertDialogTriggerSuccess>
		</ActionAlertDialogTriggerButtons>
	</ActionAlertDialogRoot>
);

export const Default: StoryFn<actionModalRootProps> = Template.bind({});
Default.args = {
	contentStyle: {},
	overlayStyle: {},
	position: "right",
	open: true,
};

export const LeftPosition: StoryFn<actionModalRootProps> = Template.bind({});
LeftPosition.args = {
	contentStyle: {},
	overlayStyle: {},
	position: "left",
	open: true,
};

export const RightPosition: StoryFn<actionModalRootProps> = Template.bind({});
RightPosition.args = {
	contentStyle: {},
	overlayStyle: {},
	position: "right",
	open: true,
};

export const CustomStyles: StoryFn<actionModalRootProps> = Template.bind({});
CustomStyles.args = {
	contentStyle: { backgroundColor: "lightblue" },
	overlayStyle: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
	position: "right",
	open: true,
};

export const Closed: StoryFn<actionModalRootProps> = Template.bind({});
Closed.args = {
	contentStyle: {},
	overlayStyle: {},
	position: "right",
	open: false,
};
