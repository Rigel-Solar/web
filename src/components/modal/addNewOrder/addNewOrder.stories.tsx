// AddNewOrder.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import AddNewOrder, { AddNewOrderProps } from ".";
import { Modal } from "..";

const meta: Meta<typeof AddNewOrder> = {
	title: "Components/AddNewOrder",
	component: AddNewOrder,
	argTypes: {
		onSuccess: { table: { disable: true } },
		onSetEditedData: { table: { disable: true } },
		onClose: { table: { disable: true } },
	},
};

export default meta;

const Template: StoryFn<AddNewOrderProps> = (args: AddNewOrderProps) => (
	<Modal open>
		<AddNewOrder {...args} />
	</Modal>
);

export const Default: StoryFn<AddNewOrderProps> = Template.bind({});
Default.args = {
	onSuccess: () => {
		console.log("Success action triggered");
	},
	onSetEditedData: () => {
		console.log("Set edited data action triggered");
	},
	onClose: () => {
		console.log("Close action triggered");
	},
};
