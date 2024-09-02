import { ReactNode } from "react";
import { GroupBase, Props } from "react-select";
import { Container, MultiSelectContainer } from "./styles";

export interface multiSelectOptionType<Data = unknown> {
	label: ReactNode;
	value: string | object | string[] | Data;
}

export interface multiSelectProps {
	error?: string;
}

const MultiSelect = <
	Option = unknown,
	IsMulti extends boolean = false,
	Group extends GroupBase<Option> = GroupBase<Option>,
>(
	props: Props<Option, IsMulti, Group> & multiSelectProps
) => {
	return (
		<Container required={props.required} data-required-text="Obrigatório">
			<MultiSelectContainer classNamePrefix="multi-select" {...props} />

			{props?.error && <p className="error-message">{props.error}</p>}
		</Container>
	);
};

export default MultiSelect;
