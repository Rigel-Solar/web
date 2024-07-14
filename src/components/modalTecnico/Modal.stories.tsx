import { Meta, StoryFn } from "@storybook/react";
import { Modal } from "../modal";
import ModalTecnico, { ModalTecnicoProps } from "./index";

const meta: Meta<typeof ModalTecnico> = {
	title: "Components/Modal/ModalTecnico",
	component: ModalTecnico,
	argTypes: {
		onSetEditedData: { action: "setEditedData" },
		onSuccess: { action: "success" },
		onClose: { action: "close" },
	},
};

export default meta;

const Template: StoryFn<ModalTecnicoProps> = (args) => {
	return (
		<Modal open>
			<ModalTecnico {...args} />
		</Modal>
	);
};

export const Default: StoryFn<ModalTecnicoProps> = Template.bind({});
Default.args = {
	onSetEditedData: (edited) => console.log("Edited:", edited),
	onSuccess: () => console.log("Success!"),
	onClose: () => console.log("Modal closed"),
};

export const ValidData: StoryFn<ModalTecnicoProps> = Template.bind({});
ValidData.args = {
	onSetEditedData: (edited) => console.log("Edited:", edited),
	onSuccess: () => console.log("Success!"),
	onClose: () => console.log("Modal closed"),
};

export const WithErrors: StoryFn<ModalTecnicoProps> = Template.bind({});
WithErrors.args = {
	onSetEditedData: (edited) => console.log("Edited:", edited),
	onSuccess: () => console.log("Success!"),
	onClose: () => console.log("Modal closed"),
};
