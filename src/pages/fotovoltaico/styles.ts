import styled from "styled-components";

export const Container = styled.main`
	flex: 1;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 25px 40px;

	.table {
		width: 100%;
		border-collapse: collapse;
		border-radius: 4px;
		overflow: auto;
	}
`;
