import styled from "styled-components";

export const Container = styled.main`
	flex: 1;
	color: #fff;

	.cards {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
    gap: 30px;
	}
`;
