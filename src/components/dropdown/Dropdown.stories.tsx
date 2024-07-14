// Dropdown.stories.tsx
import { Theme } from "@radix-ui/themes";
import { Meta, StoryFn } from "@storybook/react";
import Dropdown from "./index";

const meta: Meta<typeof Dropdown> = {
	title: "Components/Dropdown",
	component: Dropdown,
};

export default meta;

const Template: StoryFn = (args) => (
	<Theme>
		<Dropdown {...args} />
	</Theme>
);

export const Default: StoryFn = Template.bind({});
Default.args = {};
