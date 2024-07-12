import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Header from "./index";

const meta: Meta<typeof Header> = {
	title: "Components/Header",
	component: Header,
	decorators: [
		(Story) => (
			<BrowserRouter>
				<Story />
			</BrowserRouter>
		),
	],
};

export default meta;

const Template: StoryFn = (args) => <Header {...args} />;

export const Default: StoryFn = Template.bind({});
Default.args = {};

// Estilos de exemplo (Certifique-se de que `styles` tem esses componentes)
const Styles = {
	Header: styled.header`
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background-color: #f5f5f5;
	`,
	Logout: styled.div`
		display: flex;
		align-items: center;
		cursor: pointer;
		color: #333;
		font-size: 1rem;
		svg {
			margin-right: 0.5rem;
		}
	`,
};

// Componente SwitchTheme fictício para exemplo
const SwitchTheme = () => <button>Switch Theme</button>;

// Importe os componentes utilizados no Header (ajuste conforme necessário)
export { Styles as C, SwitchTheme };
