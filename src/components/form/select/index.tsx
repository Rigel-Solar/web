import { Portal } from "@radix-ui/react-select";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { CSSProperties } from "styled-components";
import {
	Container,
	ScrollDownButton,
	ScrollUpButton,
	SelectIndication,
	StyledContent,
	StyledItem,
	StyledItemText,
	StyledRoot,
	StyledSelectedValue,
	StyledTrigger,
	StyledViewPort,
} from "./styles";

export type selectStyle = "primary" | "secondary";

export interface selectOptionType {
	label: ReactNode;
	value: string;
}

export interface SelectProps {
	label?: string;
	preSelected?: boolean;
	options: selectOptionType[];
	defaultOption?: {
		label: string;
		value: string;
	};
	selectStyle?: selectStyle;
	defaultValue?: string | null | undefined;
	onValueChange?(value: string): void;
	readOnly?: boolean;
	required?: boolean;
	disabled?: boolean;
	error?: string;
	style?: CSSProperties | undefined;
	triggerStyle?: CSSProperties | undefined;
	triggerClassName?: string;
	contentClassName?: string;
	itemClassName?: string;
	bottomElement?: ReactNode;
	value?: string;
}

const defaultOpt = {
	value: "default",
	label: "Selecionar",
};

const SelectComponent = ({
	options,
	label,
	onValueChange,
	defaultValue = "",
	preSelected,
	readOnly,
	required,
	error,
	disabled,
	style,
	triggerStyle,
	triggerClassName,
	selectStyle = "primary",
	bottomElement,
	defaultOption = defaultOpt,
	value,
	...props
}: SelectProps) => {
	const [selectValue, setSelectValue] = useState(defaultValue || "default");

	const selectOptions = !preSelected ? [defaultOption, ...options] : options;

	useEffect(() => {
		if (value !== undefined) {
			setSelectValue(value);
		}
	}, [value]);

	const handleValueChange = (newValue: string) => {
		setSelectValue(newValue);
		if (onValueChange) onValueChange(newValue);
	};

	const AditionalElement = useMemo(() => {
		if (bottomElement) {
			return bottomElement;
		}
	}, [bottomElement]);

	return (
		<Container
			$readOnly={readOnly}
			disabled={disabled}
			style={style}
			required={required}
			data-required-text="Obrigatório"
		>
			{label && <label>{label}</label>}
			<StyledRoot
				value={selectValue}
				onValueChange={handleValueChange}
				{...props}
			>
				<StyledTrigger
					error={error}
					disabled={disabled}
					style={triggerStyle}
					className={triggerClassName}
					$selectStyle={selectStyle}
				>
					<StyledSelectedValue>
						{selectOptions.find((opt) => opt.value === selectValue)?.label}
					</StyledSelectedValue>
					<AiOutlineDown />
				</StyledTrigger>
				<Portal>
					<StyledContent align="end">
						<ScrollUpButton>
							<AiOutlineUp />
						</ScrollUpButton>
						<StyledViewPort>
							{selectOptions.map((item, index: number) => (
								<span key={index}>
									<StyledItem value={item.value}>
										<SelectIndication />
										<StyledItemText>{item.label}</StyledItemText>
									</StyledItem>
								</span>
							))}
						</StyledViewPort>
						{AditionalElement}
						<ScrollDownButton>
							<AiOutlineDown />
						</ScrollDownButton>
					</StyledContent>
				</Portal>
			</StyledRoot>
			{error && <p>O tipo do cliente é obrigatório</p>}
		</Container>
	);
};

export default SelectComponent;
