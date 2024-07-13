import { Decorator, Meta, StoryFn } from "@storybook/react";
import ModalTecnico, { ModalTecnicoProps } from "./index";

const withReactHookForm: Decorator = (Story) => <Story />;

const meta: Meta<typeof ModalTecnico> = {
	title: "Components/ModalTecnico",
	component: ModalTecnico,
	argTypes: {
		open: {
			control: "boolean",
		},
		onOpenChange: { action: "onOpenChange" },
		onSuccess: { action: "onSuccess" },
	},
	decorators: [withReactHookForm],
};

export default meta;

const Template: StoryFn<ModalTecnicoProps> = (args) => (
	<ModalTecnico {...args} />
);

export const Default: StoryFn<ModalTecnicoProps> = Template.bind({});
Default.args = {
	open: true,
};

export const Closed: StoryFn<ModalTecnicoProps> = Template.bind({});
Closed.args = {
	open: false,
};
