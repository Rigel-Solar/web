import * as Dialog from "@radix-ui/react-dialog";
import styled, { css } from "styled-components";
import {
	closeModalAnimation,
	closeOverlayAnimation,
	entranceAnimation,
	modalProps,
} from "./actionAlertModal/styles";

export const ModalRoot = styled(Dialog.Root)``;
export const ModalPortal = styled(Dialog.Portal)``;

export const ModalHeaderContainer = styled.section`
	padding: 0.6em 1em;
	display: grid;
	grid-template-columns: 2fr 3fr;
	gap: 20px;
	border-bottom: solid 1px ${({ theme }) => theme.colors.grayscale.gray_10};

	button {
		margin: auto 0;
		padding: 0.35em 0.6em 0.25em 0.6em;
		height: fit-content;
		width: fit-content;
	}

	svg {
		color: ${({ theme }) => theme.colors.brand.text};
	}

	:is(h1, h2, h3, h4) {
		${({ theme }) => theme.font.h1};
		font-size: clamp(18px, 2vw, 20px);
		max-width: 400px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		font-weight: 500;
		margin: 10px 0;
		color: ${({ theme }) => theme.colors.brand.text};
	}

	@media screen and (max-width: 1000px) {
		padding: 7px 1.2em;
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
	color: ${({ theme }) => theme.colors.brand.text};
	${({ theme }) => theme.font.p.normal};
	padding: 20px;
`;

export const Title = styled(Dialog.Title)`
	${({ theme }) => theme.font.h3}
	& {
		color: ${({ theme }) => theme.colors.brand.text};
	}
`;

export const Description = styled(Dialog.Description)`
	${({ theme }) => theme.font.p.normal}
	color: ${({ theme }) => theme.colors.brand.text};
`;

export const ButtonArea = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 12px;
	padding: 20px;
`;

export const Cancel = styled(Dialog.Close)`
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

	& + svg {
		color: ${({ theme }) => theme.colors.brand.text};
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
`;

export const StyledModalContent = styled(Dialog.Content)<modalProps>`
	min-width: 500px;
	max-width: 50vw;
	top: 0.7em;
	bottom: 0.7em;
	background: ${({ theme }) => theme.colors.brand.modal};
	position: absolute;
	transition: 0.3s;
	overflow: hidden;
	box-shadow:
		0px 0.4em 1.4em -0.7em rgba(22, 23, 24, 0.35),
		0px 0.7em 20px -15px rgba(22, 23, 24, 0.2);
	display: flex;
	flex-direction: column;
	border-radius: 0.8em;
	p {
		color: ${({ theme }) => theme.colors.brand.text};
	}

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
				left: 0.7em;
				transform-origin: left;
			`;
		}
		if (position == "center") {
			return css`
				min-width: 70vw;
				height: 80vh;
				margin: auto;

				@media (width <= 768px) {
					min-width: 90vw !important;
				}
			`;
		}
		return css`
			right: 0.7em;
			transform-origin: right;
		`;
	}}


@media (width <= 768px) {
		max-width: 100vw;
		min-width: 50px;
	}
`;
