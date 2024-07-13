import styled from "styled-components";

export const PageContainer = styled.section`
	position: relative;
	display: flex;
	width: 100%;
	min-height: 100dvh;
	background-color: ${({ theme }) => theme.colors.brand.background};

	> button {
		display: none;
		position: absolute;
		left: 40px;
		top: 15px;
		color: #fafafa;
	}

	@media (max-width: 860px) {
		display: flex;
		flex-direction: column;

		button {
			display: block;
		}
	}
`;
