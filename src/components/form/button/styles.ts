import styled, { css, keyframes } from "styled-components";
import { buttonState, buttonStyle } from ".";

export interface buttonStyleProps {
	$buttonStyle: buttonStyle;
	$buttonState: buttonState;
	disabled?: boolean;
}

const loading = keyframes`

from{
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}

`;

const primary = css`
	color: #fff;
	background-color: ${({ theme }) => theme.colors.brand.rigel};
`;
const secondary = css`
	color: ${({ theme }) => theme.colors.grayscale.gray_80};
	border: 1px solid ${({ theme }) => theme.colors.grayscale.gray_20};
	background-color: transparent;
`;
const text = css`
	color: ${({ theme }) => theme.colors.brand.black};
	padding: 0px;
`;
const link = css`
	color: ${({ theme }) => theme.colors.brand.pink};
	text-decoration: underline;
	padding: 0;
`;

const styles = {
	primary,
	secondary,
	text,
	link,
};

const normal = css``;
const error = css<buttonStyleProps>`
	${({ theme, $buttonStyle }) => {
		if ($buttonStyle === "primary") {
			return css`
				background-color: ${theme.colors.support.error};
				color: ${theme.colors.brand.white};

				&:hover {
					background-color: ${({ theme }) => theme.colors.support.error_02};
				}
			`;
		}

		return css`
			color: ${({ theme }) => theme.colors.support.error};
		`;
	}}
`;
const success = css<buttonStyleProps>`
	${({ theme, $buttonStyle }) => {
		if ($buttonStyle === "primary") {
			return css`
				background-color: ${theme.colors.support.success};
				color: ${theme.colors.brand.white};
			`;
		}

		return css`
			color: ${({ theme }) => theme.colors.support.success};
		`;
	}}
`;

const stateStyles = {
	normal,
	error,
	success,
};

export const ButtonStyles = css<buttonStyleProps>`
	border: 0;
	padding: 0.4em 1.2em;
	border-radius: 0.3em;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	gap: 1em;
	position: relative;
	transition: 0.3s;
	${({ theme }) => theme.font.p.normal};
	${({ $buttonStyle }) => styles[$buttonStyle]};
	${({ $buttonState }) => stateStyles[$buttonState]};

	${({ disabled }) => {
		if (disabled) {
			return css`
				cursor: no-drop;
				opacity: 0.3;
			`;
		}
	}}

	.loading-button {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		border-radius: 0.5em;
		background-color: rgba(0, 0, 0, 0.5);
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		.load-icon {
			width: 25px;
			color: ${({ theme }) => theme.colors.brand.white};
			animation: 1s ${loading} infinite linear;
		}
	}
`;

export const ButtonContainer = styled.button<buttonStyleProps>`
	${ButtonStyles}
`;
