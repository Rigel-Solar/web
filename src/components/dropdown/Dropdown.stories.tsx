import { Theme } from "@radix-ui/themes";
import { Meta, StoryFn } from "@storybook/react";
import Dropdown, { DropdownProps } from "./index";

const meta: Meta<typeof Dropdown> = {
	title: "Components/Dropdown",
	component: Dropdown,
	argTypes: {
		handleOpenModal: { action: "handleOpenModal" },
	},
};

export default meta;

const Template: StoryFn<DropdownProps> = (args) => (
	<Theme>
		<Dropdown {...args} />
	</Theme>
);

export const Default: StoryFn<DropdownProps> = Template.bind({});
Default.args = {};
