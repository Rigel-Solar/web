import styled, { css, keyframes } from "styled-components";

import * as Dialog from "@radix-ui/react-alert-dialog";
import { ReactNode } from "react";

export interface ModalHeaderProps {
	$between?: boolean;
	children: ReactNode;
}

export const entranceAnimation = keyframes`
from{
    transform: rotateY(90deg) ;
    opacity:0;    
  }
  to{
    transform: rotateY(0deg);
    opacity:1;
}
`;

export const closeModalAnimation = keyframes`
from{
    transform: rotateY(0deg) ;
  }
  to{
    transform: rotateY(90deg);
}
`;

export const closeOverlayAnimation = keyframes`
from{
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);

  }
  to{
    background: rgba(0, 0, 0, 0);
  backdrop-filter: blur(0px);

}
`;

export const ModalRoot = styled(Dialog.Root)``;
export const ModalPortal = styled(Dialog.Portal)``;

export const ModalHeader = styled.section<ModalHeaderProps>`
	margin: 0 -30px;
	padding: 1em 1.5em;
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 20px;
	border-bottom: solid 1px #27272a;

	${(props) =>
		props.$between &&
		css`
			display: flex;
			align-items: center;
			justify-content: space-between;
		`}

	h2,
	h3 {
		${({ theme }) => theme.font.p.medium};
		color: #fafafa;
	}

	button {
		text-align: start;
	}

	svg {
		color: #fafafa;
	}
`;

export const ModalOverlay = styled(Dialog.Overlay)<modalProps>`
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

export const ModalBody = styled.main`
	flex: 1;
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	gap: 60px;
	${({ theme }) => theme.font.p.small};
	color: ${({ theme }) => theme.colors.brand.white};

	form {
		padding: 0;
	}
`;

export const ButtonArea = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 12px;
`;

export const Cancel = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	background: transparent;
	border: 1px solid #27272a;
	${({ theme }) => theme.font.p.small};
	color: ${({ theme }) => theme.colors.grayscale.gray_10};
	border-radius: 6px;
	padding: 10px 20px;

	&:hover {
		opacity: 0.7;
	}
`;

export const Success = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	background-color: ${({ theme }) => theme.colors.brand.rigel};
	${({ theme }) => theme.font.p.small};
	color: ${({ theme }) => theme.colors.grayscale.gray_10};
	border-radius: 6px;
	padding: 10px 20px;

	&:hover {
		opacity: 0.7;
	}
`;

export interface modalProps {
	position?: "left" | "right" | "center";
	$closeAnimation: boolean;
}

export const StyledModalContent = styled(Dialog.Content)<modalProps>`
	width: 25vw;
	height: 100dvh;
	background: ${({ theme }) => theme.colors.brand.modal};
	position: absolute;
	transition: 0.3s;
	overflow: hidden;
	border-left: 1px solid rgba(50, 50, 50);
	border-right: 1px solid rgba(50, 50, 50);
	display: flex;
	flex-direction: column;
	padding: 10px 30px;
	${({ theme }) => theme.font.p.normal};
	color: ${({ theme }) => theme.colors.grayscale.gray_10};

	${({ $closeAnimation }) => {
		if ($closeAnimation) {
			return css`
				animation: 0.3s ${closeModalAnimation} ease forwards;
			`;
		}
		return css`
			animation: 0.4s ${entranceAnimation} ease;
		`;
	}}
	${({ position }) => {
		if (position == "left") {
			return css`
				left: 0;
				transform-origin: left;
			`;
		}
		return css`
			right: 0;
			transform-origin: right;
		`;
	}}

@media (width <= 768px) {
		width: 90vw;
	}
`;
