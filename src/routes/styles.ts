import styled from "styled-components";

export const PageContainer = styled.section`
	display: flex;
	width: 100%;
	min-height: 100dvh;
	background-color: ${({ theme }) => theme.colors.brand.background};
`;
