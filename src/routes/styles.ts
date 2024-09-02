import styled from "styled-components";

export const PageContainer = styled.main`
	position: relative;
	display: flex;
	inline-size: 100%;
	block-size: 100%;
	background-color: ${({ theme }) => theme.colors.brand.background2};

	> button {
		display: none;
		position: absolute;
		inset-inline-start: 40px;
		inset-block-start: 15px;
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
