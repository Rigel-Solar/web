import { Meta, StoryFn } from "@storybook/react";
import Search, { SearchInput } from "./index";

const meta: Meta<typeof Search> = {
	title: "Components/Search",
	component: Search,
	argTypes: {
		placeholder: {
			control: {
				type: "text",
			},
		},
		value: {
			control: {
				type: "text",
			},
		},
		onChange: {
			action: "changed",
		},
	},
};

export default meta;

const Template: StoryFn<SearchInput> = (args) => <Search {...args} />;

export const Default: StoryFn<SearchInput> = Template.bind({});
Default.args = {
	placeholder: "Search...",
};

export const WithValue: StoryFn<SearchInput> = Template.bind({});
WithValue.args = {
	placeholder: "Search...",
	value: "Pre-filled search query",
};
