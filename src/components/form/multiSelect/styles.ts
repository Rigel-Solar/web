/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from "react-select";
import styled, { css, RuleSet } from "styled-components";

const primary = css`
	${({ theme }) => {
		return css`
			background-color: ${theme.colors.brand.background};
			border: 1px solid #27272a;
			${theme.font.p.normal};
			color: ${theme.colors.fake_input.label};
		`;
	}}
`;

const secondary = css`
	${({ theme }) => {
		return css`
			background-color: transparent;
			border: 1px solid ${theme.colors.grayscale.gray_90};
			${theme.font.p.normal};
			color: ${theme.colors.grayscale.gray_60};
		`;
	}}
`;

const errorStyle = css`
	${({ theme }) => {
		return css`
			input {
				color: ${theme.colors.support.error};
			}
			background-color: transparent;
			border: 1px solid;
			${theme.font.p.normal};
			color: ${theme.colors.support.error};
		`;
	}}
`;

const styles: { [key: string]: RuleSet<object> } = {
	primary,
	secondary,
};

export interface multiSelectStyleProps {
	$readOnly?: boolean;
	required?: boolean;
	disabled?: boolean;
	error?: string;
	$selectStyle?: any;
}

export const Container = styled.div<multiSelectStyleProps>`
	width: 100%;
	pointer-events: ${(prop) => prop.$readOnly && "none"};
	position: relative;
	z-index: 99;

	${({ required, theme }) => {
		if (required) {
			return css`
				&:after {
					content: attr(data-required-text);
					color: ${theme.colors.fake_input.label};
					background-color: ${({ theme }) => theme.colors.brand.background2};
					padding: 0.2em 0.5em;
					border-radius: 0.2em;
					${({ theme }) => theme.font.p.extra_small};
					position: absolute;
					top: -13px;
					right: 0.9em;
				}
			`;
		}
	}}

	.error-message {
		word-break: break-word;
		color: ${({ theme }) => theme.colors.support.error};
		${({ theme }) => theme.font.p.small};
	}
`;

export const MultiSelectContainer = styled(Select)<any>`
	.multi-select__control {
		width: 100%;
		display: flex;
		height: fit-content;
		align-items: center;
		justify-content: space-between;
		padding: 0.7em 20px;
		border-radius: 0.5em;
		cursor: pointer;
		${({ theme }) => theme.font.p.normal};
		color: ${({ theme }) => theme.colors.fake_input.label};
		${({ $selectStyle }) => styles[$selectStyle || "primary"]}
		${({ error }) => error && errorStyle};

		.multi-select__value-container {
			margin: 0;
			padding: 0;

			> div {
				color: ${({ theme }) => theme.colors.fake_input.label};
			}

			.multi-select__placeholder.multi-select__placeholder {
				color: ${({ theme }) => theme.colors.fake_input.label};
			}
		}
	}
	.multi-select__menu {
		width: 100%;
		border-radius: 0.5em;
		box-shadow:
			0px 0.4em 1.4em -0.7em rgba(22, 23, 24, 0.35),
			0px 0.7em 20px -15px rgba(22, 23, 24, 0.2);
		padding: 25px;
		background: ${({ theme }) => theme.colors.brand.background};

		.multi-select__option {
			${({ theme }) => theme.font.p.normal};
			border-radius: 0.5em;
			color: ${({ theme }) => theme.colors.fake_input.label};

			> div {
				color: ${({ theme }) => theme.colors.fake_input.label};
			}

			&:hover {
				background: ${({ theme }) => theme.colors.brand.background2};
			}

			&.multi-select__option--is-selected {
				background: ${({ theme }) => theme.colors.brand.rigel} !important;

				&:hover {
					background: ${({ theme }) => theme.colors.brand.background2};
				}
				> div {
					color: ${({ theme }) => theme.colors.brand.white};
				}
			}
			&.multi-select__option--is-focused {
				background: ${({ theme }) => theme.colors.grayscale.gray_10};
			}
		}
	}

	.multi-select__multi-value {
		background-color: ${({ theme }) => theme.colors.grayscale.gray_10};
		border-radius: 0.5em;
	}

	.multi-select__multi-value__label {
		color: ${({ theme }) => theme.colors.grayscale.gray_90};
	}
`;
