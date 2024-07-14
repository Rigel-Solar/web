import styled from "styled-components";

export const DefaultPageContainer = styled.section`
	width: 100%;
	${({ theme }) => theme.font.p.normal};
	color: ${({ theme }) => theme.colors.brand.white};
	margin-top: 30px;
	background-color: ${({ theme }) => theme.colors.brand.background};
`;
