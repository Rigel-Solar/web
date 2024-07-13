import { Table } from "@radix-ui/themes";
import styled from "styled-components";

interface RootProps {
	$background: boolean;
}

interface BadgeProps {
	text: "Finalizado" | "Em andamento" | "Negada";
}

export const Root = styled(Table.Root)<RootProps>`
	width: 100%;
	max-height: 80vh;
	overflow-y: auto;
	margin: auto;

	table {
		width: 100%;
		border-collapse: collapse;
	}

	${({ $background }) =>
		$background &&
		`background-color: #121212; border: 1px solid #363636; border-radius: 6px; padding: 25px`}
`;

export const Header = styled(Table.Header)`
	text-align: start;
	th {
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

		p:nth-child(2) {
			color: #d4d4d8;
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
	padding: 16px;
	${({ theme }) => theme.font.p.small}

	button {
		display: flex;
		align-items: center;
		background-color: #18181b;
		border: 1px solid #27272a;
		font-size: 10px;
		border-radius: 6px;
		color: #fff;
		padding: 6px;
	}
`;

export const Badge = styled.div<BadgeProps>`
	margin: 0 auto;
	width: fit-content;
	display: flex;
	align-items: center !important;
	${({ theme }) => theme.font.p.extra_small}
	padding: 6px;
	border-radius: 30px;
	${(props) => {
		if (props.text == "Finalizado")
			return "background-color: #042F2E; color: #2DD4BF";
		else if (props.text == "Em andamento")
			return "background-color: #422006; color: #FACC15";
		else return "background-color: #450A0A; color: #F87171";
	}}
`;

export const Pagination = styled.div`
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	color: #d4d4d8;
	margin-top: 5px;
	border-top: 1px solid #27272a;
	padding: 10px;

	.pagination-left {
		flex: 1;
	}

	.pagination-right {
		flex: 1;
		display: flex;
		justify-content: end;
		gap: 30px;

		.items-per-page {
			display: flex;
			align-items: center;
			gap: 10px;

			select {
				background-color: #18181b;
				border: 1px solid #27272a;
				border-radius: 4px;
				padding: 2px 6px;
				color: #d4d4d8;
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
					color: #e7e2e9;
					border: 1px solid #27272a;
					background-color: #18181b;
					border-radius: 6px;
				}
			}
		}
	}
`;
