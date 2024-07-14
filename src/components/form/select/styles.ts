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

const errorColor = css`
	${({ theme }) => theme.colors.support.error}
`;

const primary = css`
	${({ theme }) => {
		return css`
			background-color: #18181b;
			border: 1px solid ${theme.colors.grayscale.gray_10};
			${theme.font.p.normal};
			color: #fafafa;
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
	width: 100%;
	pointer-events: ${(prop) => prop.$readOnly && "none"};
	position: relative;

	${({ required }) => {
		if (required) {
			return css`
				&:after {
					content: attr(data-required-text);
					color: #fafafa;
					background-color: #18181b;
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

	* {
		pointer-events: ${(prop) => prop.disabled && "none"};
		fill: ${(prop) => prop.disabled && disabledColor};
	}
	div[data-radix-popper-content-wrapper] {
		z-index: 99999;
	}

	label {
		display: block;
		margin-bottom: 0.5em;
		${({ theme }) => theme.font.p.small};
		color: ${({ theme }) => theme.colors.grayscale.gray_40};
	}

	p {
		word-break: break-word;
		color: ${errorColor};
		${({ theme }) => theme.font.p.small};
	}
`;

export const StyledRoot = styled(Select.Root)`
	width: 100%;
	position: relative;
`;

const styles = {
	primary,
	secondary,
};

export const StyledTrigger = styled(Select.SelectTrigger)<ContainerProp>`
	width: 100%;
	display: flex;
	height: fit-content;
	align-items: center;
	justify-content: space-between;
	padding: 1.2em 20px;
	border-radius: 0.5em;
	cursor: pointer;
	${({ theme }) => theme.font.p.normal};
	color: ${({ theme }) => theme.colors.grayscale.gray_60};

	${({ $selectStyle }) => styles[$selectStyle || "primary"]}

	${({ error }) => error && errorStyle}
`;

export const StyledContent = styled(Select.Content)<ContainerProp>`
	width: 100%;
	border-radius: 0.5em;
	box-shadow:
		0px 0.4em 1.4em -0.7em rgba(22, 23, 24, 0.35),
		0px 0.7em 20px -15px rgba(22, 23, 24, 0.2);
	padding: 25px;
	transform-origin: top;
	top: 70px;
	animation: 0.4s ${entranceAnimation} ease;
	z-index: 999999;
	position: relative;
	background-color: #18181b;
`;

export const StyledViewPort = styled(Select.Viewport)`
	max-height: 400px;
	padding: 0px;
	z-index: 9999;
`;

export const StyledItem = styled(Select.Item)<ContainerProp>`
	padding: 0.5em 0.7em 0.5em 30px;
	cursor: pointer;
	${({ theme }) => theme.font.p.normal};
	color: #fafafa;
	transition: 0.2s;
	border-radius: 0.5em;
	position: relative;

	&:hover {
		background-color: #28282b;
		border: 0;
		outline: 0;
	}

	&[data-state="unchecked"] {
		&::after {
			content: "";
			width: 15px;
			height: 15px;
			position: absolute;
			left: 2px;
			top: 50%;
			transform: translateY(-50%);
			border: 1px solid ${({ theme }) => theme.colors.grayscale.gray_60};
			border-radius: 99px;
		}
	}
`;

export const SelectIndication = styled(Select.ItemIndicator)`
	width: 20px;
	height: 20px;
	border: 2px solid ${({ theme }) => theme.colors.brand.tiffany};
	border-radius: 99px;
	position: absolute;
	left: 2px;

	&::after {
		content: "";
		position: absolute;
		top: 1px;
		bottom: 1px;
		left: 1px;
		right: 1px;
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
	width: 100%;
	padding: 1.2em 0.8em;
	border-radius: 0.5em;
	position: relative;
	overflow: hidden;
`;
