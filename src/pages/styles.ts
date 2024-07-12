import styled from "styled-components";

export const DefaultPageContainer = styled.section`
	width: 100%;
	padding: 50px 40px;
	min-height: 100dvh;
	background-color: ${({ theme }) => theme.colors.brand.background};
	${({ theme }) => theme.font.p.normal};
	color: ${({ theme }) => theme.colors.brand.white};
`;
