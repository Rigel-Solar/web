import { DropdownMenu } from "@radix-ui/themes";
import styled from "styled-components";

export const Root = styled(DropdownMenu.Root)``;

export const Trigger = styled(DropdownMenu.Trigger)`
	background: transparent;
	border: none;
	cursor: pointer;
	&:hover {
		transform: scale(1.1);
		transition: transform 0.2s;
	}
`;

export const Content = styled(DropdownMenu.Content)`
	display: flex;
	flex-direction: column;
	gap: 12px;
	background-color: #1e1e1e;
	border: 1px solid #373737;
	border-radius: 8px;
	padding: 12px 14px;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease-in-out;

	&:hover {
		background-color: #2c2c2c;
	}
`;

export const Item = styled(DropdownMenu.Item)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: ${({ theme }) => theme.colors.brand.text};
	cursor: pointer;
	padding: 8px 12px;
	border-radius: 4px;
	transition: background-color 0.2s;

	&:hover {
		background-color: #3c3c3c;
	}

	p {
		${({ theme }) => theme.font.p.small}
	}
`;
