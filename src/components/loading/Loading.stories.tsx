import { Meta, StoryFn } from "@storybook/react";
import styled from "styled-components";
import Loading, { LoadingProps } from "./index";

const meta: Meta<typeof Loading> = {
	title: "Components/Loading",
	component: Loading,
};

export default meta;

const Template: StoryFn<LoadingProps> = (args) => (
	<Container>
		<Content>This is some content behind the loading overlay.</Content>
		<Loading {...args} />
	</Container>
);

export const Default: StoryFn = Template.bind({});
Default.args = {};

export const WithCustomText: StoryFn = Template.bind({});
WithCustomText.args = {
	children: "Loading custom content...",
};

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	background-color: #f0f0f0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Content = styled.div`
	font-size: 1.5rem;
	color: #333;
`;
