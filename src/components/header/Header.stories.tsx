// Header.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import Header, { HeaderProps } from "./index";

const meta: Meta<typeof Header> = {
	title: "Components/Header",
	component: Header,
	decorators: [
		(Story) => (
			<Provider store={store}>
				<BrowserRouter>
					<Story />
				</BrowserRouter>
			</Provider>
		),
	],
	argTypes: {
		open: {
			control: "boolean",
		},
		setOpen: { action: "setOpen" },
	},
};

export default meta;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const Default: StoryFn<HeaderProps> = Template.bind({});
Default.args = {
	open: true,
};

export const Closed: StoryFn<HeaderProps> = Template.bind({});
Closed.args = {
	open: false,
};
