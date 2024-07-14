import { Meta, StoryFn } from "@storybook/react";
import {
	actionModalRootProps,
	Modal,
	ModalContent,
	ModalHeader,
	ModalTriggerButtons,
	ModalTriggerClose,
	ModalTriggerSuccess,
} from "./index";

const meta: Meta<typeof Modal> = {
	title: "Components/Modal",
	component: Modal,
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
				options: ["left", "right", "center"],
			},
		},
		open: {
			control: "boolean",
		},
		onOpenChange: { action: "onOpenChange" },
	},
};

export default meta;

const Template: StoryFn<actionModalRootProps> = (args) => (
	<Modal {...args}>
		<ModalHeader>
			<ModalTriggerClose>X</ModalTriggerClose>
			<h3>Modal Title</h3>
		</ModalHeader>
		<ModalContent>
			<p>This is the content of the modal</p>
		</ModalContent>
		<ModalTriggerButtons>
			<ModalTriggerClose>Close</ModalTriggerClose>
			<ModalTriggerSuccess>Success</ModalTriggerSuccess>
		</ModalTriggerButtons>
	</Modal>
);

export const Default: StoryFn<actionModalRootProps> = Template.bind({});
Default.args = {
	open: true,
	position: "center",
	contentStyle: {},
	overlayStyle: {},
};

export const LeftPosition: StoryFn<actionModalRootProps> = Template.bind({});
LeftPosition.args = {
	open: true,
	position: "left",
	contentStyle: {},
	overlayStyle: {},
};

export const RightPosition: StoryFn<actionModalRootProps> = Template.bind({});
RightPosition.args = {
	open: true,
	position: "right",
	contentStyle: {},
	overlayStyle: {},
};

export const CenterPosition: StoryFn<actionModalRootProps> = Template.bind({});
CenterPosition.args = {
	open: true,
	position: "center",
	contentStyle: {},
	overlayStyle: {},
};

export const CustomStyles: StoryFn<actionModalRootProps> = Template.bind({});
CustomStyles.args = {
	open: true,
	position: "center",
	contentStyle: { backgroundColor: "lightblue" },
	overlayStyle: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
};

export const Closed: StoryFn<actionModalRootProps> = Template.bind({});
Closed.args = {
	open: false,
	position: "center",
	contentStyle: {},
	overlayStyle: {},
};
