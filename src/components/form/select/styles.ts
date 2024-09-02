import * as Select from "@radix-ui/react-select";
import styled, { css, keyframes } from "styled-components";
import { selectStyle } from ".";

const disabledColor = css`
	${({ theme }) => theme.colors.grayscale.gray_10}
`;

const entranceAnimation = keyframes`
from{
    transform:rotateX(90deg);
    opacity:0;    
}
to{
    transform:rotateX(0deg);
    opacity:1;
}
`;

const primary = css`
	${({ theme }) => {
		return css`
			background-color: ${theme.colors.brand.background};
			border: 1px solid #27272a;
			color: ${theme.colors.brand.text};
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
			background-color: transparent;
			border: 1px solid;
			${theme.font.p.normal};
			color: ${theme.colors.support.error};
		`;
	}}
`;

interface ContainerProp {
	$readOnly?: boolean;
	required?: boolean;
	disabled?: boolean;
	error?: string;
	$selectStyle?: selectStyle;
}

export const Container = styled.div<ContainerProp>`
	inline-size: 100%;
	pointer-events: ${(prop) => prop.$readOnly && "none"};
	position: relative;
	${({ theme }) => theme.font.p.small};

	${({ required }) => {
		if (required) {
			return css`
				&:after {
					content: attr(data-required-text);
					color: ${({ theme }) => theme.colors.brand.text};
					background-color: ${({ theme }) => theme.colors.brand.background};
					padding: 0.2em 0.5em;
					border-radius: 0.2em;
					${({ theme }) => theme.font.p.extra_small};
					position: absolute;
					inset-block-start: 13px;
					inset-inline-end: 0.9em;
				}
			`;
		}
	}}

	* {
		pointer-events: ${(prop) => prop.disabled && "none"};
		fill: ${(prop) => prop.disabled && disabledColor};
	}
	div[data-radix-popper-content-wrapper] {
		z-index: 99999;
	}

	label {
		display: block;
		margin-block-end: 0.5em;
		color: ${({ theme }) => theme.colors.brand.text};
	}

	p {
		margin-block-start: 0.5rem;
		${({ theme }) => theme.font.p.normal};
		color: ${({ theme }) => theme.colors.support.error};
	}
`;

export const StyledRoot = styled(Select.Root)`
	inline-size: 100%;
	position: relative;
`;

const styles = {
	primary,
	secondary,
};

export const StyledTrigger = styled(Select.SelectTrigger)<ContainerProp>`
	inline-size: 100%;
	display: flex;
	block-size: fit-content;
	align-items: center;
	justify-content: space-between;
	padding: 12px 1.3em;
	border-radius: 0.5em;
	cursor: pointer;
	${({ theme }) => theme.font.p.normal};
	color: ${({ theme }) => theme.colors.grayscale.gray_60};

	${({ $selectStyle }) => styles[$selectStyle || "primary"]}

	${({ error }) => error && errorStyle}
`;

export const StyledContent = styled(Select.Content)<ContainerProp>`
	inline-size: 100%;
	border-radius: 0.5em;
	box-shadow:
		0px 0.4em 1.4em -0.7em rgba(22, 23, 24, 0.35),
		0px 0.7em 20px -15px rgba(22, 23, 24, 0.2);
	padding: 25px;
	transform-origin: top;
	inset-block-start: 70px;
	animation: 0.4s ${entranceAnimation} ease;
	z-index: 999999;
	position: relative;
	background-color: ${({ theme }) => theme.colors.brand.background2};
`;

export const StyledViewPort = styled(Select.Viewport)`
	max-block-size: 400px;
	padding: 0px;
	z-index: 9999;
`;

export const StyledItem = styled(Select.Item)<ContainerProp>`
	padding: 0.5em 0.7em 0.5em 30px;
	cursor: pointer;
	${({ theme }) => theme.font.p.normal};
	color: ${({ theme }) => theme.colors.brand.text};
	transition: 0.2s;
	border-radius: 0.5em;
	position: relative;

	&:hover {
		background-color: ${({ theme }) => theme.colors.brand.background};
		border: 0;
		outline: 0;
	}

	&[data-state="unchecked"] {
		&::after {
			content: "";
			inline-size: 15px;
			block-size: 15px;
			position: absolute;
			inset-inline-start: 2px;
			inset-block-start: 50%;
			transform: translateY(-50%);
			border: 1px solid ${({ theme }) => theme.colors.grayscale.gray_60};
			border-radius: 99px;
		}
	}
`;

export const SelectIndication = styled(Select.ItemIndicator)`
	inline-size: 20px;
	block-size: 20px;
	border: 2px solid ${({ theme }) => theme.colors.brand.tiffany};
	border-radius: 99px;
	position: absolute;
	inset-inline-start: 2px;

	&::after {
		content: "";
		position: absolute;
		inset-block-start: 1px;
		inset-block-end: 1px;
		inset-inline-start: 1px;
		inset-inline-end: 1px;
		border: 3px solid ${({ theme }) => theme.colors.brand.tiffany};
		border-radius: 99px;
	}
`;

export const StyledSelectedValue = styled(Select.Value)`
	color: ${({ theme }) => theme.colors.grayscale.gray_90};
`;
export const StyledItemText = Select.ItemText;

const scrollButtons = css`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.2em 0;
`;

export const ScrollUpButton = styled(Select.ScrollUpButton)`
	${scrollButtons}
`;

export const ScrollDownButton = styled(Select.ScrollDownButton)`
	${scrollButtons}
`;

export const LoadingSelect = styled.div`
	inline-size: 100%;
	padding: 1.2em 0.8em;
	border-radius: 0.5em;
	position: relative;
	overflow: hidden;
`;
