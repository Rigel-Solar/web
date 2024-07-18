import { Table } from "@radix-ui/themes";
import styled, { css } from "styled-components";

interface RootProps {
	$background: boolean;
	theme: {
		colors: {
			brand: {
				background: string;
			};
		};
	};
}

interface BadgeProps {
	$text: "Finalizado" | "Em andamento" | "Negada";
}

export const Root = styled(Table.Root)<RootProps>`
	width: 100%;
	margin: auto;

	table {
		width: 100%;
		border-collapse: collapse;
		white-space: nowrap;
	}

	${({ theme, $background }) => {
		if ($background) {
			return css`
				background-color: ${theme.colors.brand.background};
				border: 1px solid #363636;
				border-radius: 6px;
				padding: 15px;

				tr th {
					border-top: 0;
					padding-top: 0;
				}
			`;
		}
	}}
`;

export const Header = styled(Table.Header)`
	text-align: start;
	th {
		color: ${({ theme }) => theme.colors.brand.text};
		${({ theme }) => theme.font.p.normal}
		padding: 10px 0;
		border-bottom: 1px solid #363636;
		border-top: 1px solid #363636;
	}
`;

export const Body = styled(Table.Body)`
	tr th {
		display: flex;
		flex-direction: column;
		align-items: start;
		margin-top: 8px;
	}
	div {
		display: flex;
		flex-direction: column;
		align-items: start;
		text-align: start;

		p {
			color: ${({ theme }) => theme.colors.brand.text};
		}

		p:nth-child(2) {
			${({ theme }) => theme.font.p.extra_small}
			margin-top: 4px;
		}
	}
`;

export const Row = styled(Table.Row)`
	text-align: center;
	border-bottom: 1px solid #27272a;

	&:last-of-type {
		border: 0;
	}
`;

export const Cell = styled(Table.Cell)`
	padding: 14px;
	${({ theme }) => theme.font.p.small}
	color: ${({ theme }) => theme.colors.brand.text};

	&:last-of-type {
		padding: 0;
	}

	.dropdown {
		button {
			border: 1px solid #27272a;
			border-radius: 6px;
			color: ${({ theme }) => theme.colors.brand.text};
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 8px;
		}

		@media (width <= 1280px) {
			padding: 8px;
		}
	}
`;

export const Badge = styled.div<BadgeProps>`
	margin: 0 auto;
	width: 50%;
	min-width: fit-content;
	display: flex;
	align-items: center !important;
	${({ theme }) => theme.font.p.extra_small}
	padding: 6px;
	border-radius: 30px;
	${(props) => {
		if (props.$text == "Finalizado")
			return "background-color: #042F2E; color: #2DD4BF";
		else if (props.$text == "Em andamento")
			return "background-color: #422006; color: #FACC15";
		else return "background-color: #450A0A; color: #FF8888";
	}}
`;

export const Pagination = styled.div`
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	color: ${({ theme }) => theme.colors.brand.text};
	margin-top: 5px;
	border-top: 1px solid #27272a;
	padding: 10px;

	@media (width <= 540px) {
		flex-direction: column;
		align-items: start;
		gap: 10px;
	}

	.pagination-left {
		flex: 1;
	}

	.pagination-right {
		flex: 1;
		display: flex;
		justify-content: end;
		gap: 30px;

		@media (width <= 540px) {
			flex-direction: column;
			justify-content: start;
			gap: 10px;
		}

		.items-per-page {
			display: flex;
			align-items: center;
			gap: 10px;

			select {
				background-color: ${({ theme }) => theme.colors.brand.background};
				border: 1px solid ${({ theme }) => theme.colors.brand.text};
				border-radius: 4px;
				padding: 2px 6px;
				color: ${({ theme }) => theme.colors.brand.text};
			}
		}

		.pages {
			display: flex;
			align-items: center;
			gap: 20px;

			.pagination-buttons {
				display: flex;
				align-items: center;
				gap: 6px;
				button {
					display: flex;
					align-items: center;

					padding: 4px;
					color: ${({ theme }) => theme.colors.brand.text};
					border: 1px solid #27272a;
					background-color: ${({ theme }) => theme.colors.brand.background};
					border-radius: 6px;
				}
			}
		}
	}
`;
