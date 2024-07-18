import styled from "styled-components";

export const PageContainer = styled.main`
	position: relative;
	display: flex;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.brand.background2};

	> button {
		display: none;
		position: absolute;
		left: 40px;
		top: 15px;
		color: ${({ theme }) => theme.colors.brand.text};
	}

	@media (max-width: 860px) {
		display: flex;
		flex-direction: column;

		button {
			display: flex;
		}
	}
`;
