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
		.graph-1 {
			background-color: #121212;
			border: 1px solid #363636;
			border-radius: 6px;
		}
		.graph-2 {
			background-color: #121212;
			border: 1px solid #363636;
			border-radius: 6px;
		}
	}

	.table {
		width: 100%;
		border-collapse: collapse;
		border-radius: 4px;
		overflow: auto;
	}

	@media (width <= 1280px) {
		grid-template-rows: 1fr 2fr 2fr;
		.cards {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 30px;
		}

		.graphs {
			display: grid;
			grid-template-columns: 1fr;
			gap: 30px;
		}
	}

	@media (width <= 768px) {
		max-height: auto;
		grid-template-rows: 1fr 1fr 1fr;
		.cards {
			display: grid;
			grid-template-columns: 1fr;
			gap: 30px;
		}
	}
`;
