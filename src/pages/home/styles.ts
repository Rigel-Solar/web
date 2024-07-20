import styled from "styled-components";

export const Container = styled.main`
	display: grid;
	padding: 25px 40px;
	height: 100%;
	grid-template-rows: 1fr 3fr 3fr;
	gap: 30px;
	flex: 1;
	color: #fff;

	.cards {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 30px;
	}

	.graphs {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 30px;

		.graph-1,
		.graph-2 {
			padding: 0 20px;
			width: 100%;
			background-color: ${({ theme }) => theme.colors.brand.background};
			border: 1px solid #363636;
			border-radius: 6px;
			min-height: 320px;
			max-height: 420px;

			canvas {
				margin: 0 auto;
				width: 100% !important;
				height: 100% !important;
				max-width: 100%;
				max-height: 380px;
			}
		}

		.graph-2 {
			display: grid;
			place-items: center;
		}
	}

	.table {
		width: 100%;
		border-collapse: collapse;
		border-radius: 4px;
		overflow: auto;
	}

	@media (max-width: 960px) {
		grid-template-rows: 1fr 2fr 2fr;

		.cards {
			grid-template-columns: repeat(2, 1fr);
		}

		.graphs {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 470px) {
		grid-template-rows: 1fr 1fr 1fr;

		.cards {
			grid-template-columns: 1fr;
		}
	}
`;
