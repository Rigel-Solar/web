import styled, { css, keyframes } from "styled-components";

import * as Dialog from "@radix-ui/react-dialog";
import { ButtonStyles, buttonStyleProps } from "../../form/button/styles";
import { closeOverlayAnimation, modalProps } from "../actionAlertModal/styles";

const entranceAnimation = keyframes`
to{
    scale:1 ;
    opacity:1;    
  }

`;
const closeModalAnimation = keyframes`
from{
    scale:1;
    opacity:1;    
  }
to{
    scale:0;
    opacity:0;    
  }

`;

export const PopUpRoot = styled(Dialog.Root)`
	z-index: 999;
`;
export const PopUpPortal = styled(Dialog.Portal)``;

export const PopUpHeaderContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1.2em;

	h2 {
		${({ theme }) => theme.font.p.medium_bold};
		color: ${({ theme }) => theme.colors.brand.text};
	}
`;

export const PopUpOverlay = styled(Dialog.Overlay)<modalProps>`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(2px);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 999;
	transition: 0.3s;

	${({ $closeAnimation }) => {
		if ($closeAnimation) {
			return css`
				animation: 0.4s ${closeOverlayAnimation} ease forwards;
			`;
		}
	}}
`;

export const PopUpBody = styled.main``;

export const Title = styled(Dialog.Title)`
	${({ theme }) => theme.font.h3}
	color: ${({ theme }) => theme.colors.brand.text};
`;

export const Description = styled(Dialog.Description)`
	${({ theme }) => theme.font.p.normal}
	color: ${({ theme }) => theme.colors.brand.text};
`;

export const StyledPopUpContent = styled(Dialog.Content)<modalProps>`
	min-width: 100px;
	max-height: 98vh;
	background: ${({ theme }) => theme.colors.brand.modal};
	position: relative;
	transition: 0.3s;
	box-shadow:
		0px 0.4em 1.4em -0.7em rgba(22, 23, 24, 0.35),
		0px 0.7em 20px -15px rgba(22, 23, 24, 0.2);
	border-radius: 1.2em;
	display: flex;
	padding: 1em;
	flex-direction: column;
	opacity: 0;
	transform-origin: 50%;
	scale: 0.4;

	${({ $closeAnimation }) => {
		if ($closeAnimation) {
			return css`
				animation: 0.3s ${closeModalAnimation} ease forwards;
			`;
		}
		return css`
			animation: 0.4s ${entranceAnimation} ease forwards;
		`;
	}}
`;

export const PopUpCloseButton = styled(Dialog.Close)<buttonStyleProps>`
	${ButtonStyles}
`;
