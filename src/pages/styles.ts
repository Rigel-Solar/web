import styled from "styled-components";

export const DefaultPageContainer = styled.section`
	width: 100%;
	min-height: 100dvh;
	${({ theme }) => theme.font.p.normal};
	color: ${({ theme }) => theme.colors.brand.white};
`;
