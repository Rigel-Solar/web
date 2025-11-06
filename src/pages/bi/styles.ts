import styled from "styled-components";

export const Container = styled.main`
	padding: 25px 40px;
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 90vh;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.brand.background};
`;

export const IframeWrapper = styled.div`
	position: relative;
	width: 100%;
	max-width: 1600px;
	aspect-ratio: 16 / 9;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);

	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: none;
	}
`;
