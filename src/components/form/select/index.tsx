/** @format */

import { ReactNode, useEffect, useMemo, useState } from "react";
import { Portal } from "@radix-ui/react-select";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { CSSProperties } from "styled-components";
import {
  Container,
  StyledContent,
  StyledItem,
  StyledItemText,
  StyledRoot,
  StyledSelectedValue,
  StyledTrigger,
  StyledViewPort,
  ScrollUpButton,
  ScrollDownButton,
  LoadingSelect,
  SelectIndication,
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
  ...props
}: SelectProps) => {

  const [loadingSelect, setLoadingSelect] = useState(false);
  const [selectDefaultValue, setSelectDefaultValue] = useState(
    defaultValue || "default"
  );

  const selectOptions = !preSelected ? [defaultOption, ...options] : options;

  useEffect(() => {
    const handleSelectValueChange = async () => {
      setLoadingSelect(true);

      if (defaultValue) {
        setSelectDefaultValue(defaultValue);
      }

      setLoadingSelect(false);
    };

    handleSelectValueChange();
  }, [defaultValue, options, preSelected]);

  const AditionalElement = useMemo(() => {
    if (bottomElement) {
      return bottomElement;
    }
  }, [bottomElement]);

  if (loadingSelect) return <LoadingSelect />;

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
        defaultValue={selectDefaultValue}
        onValueChange={onValueChange}
        {...props}
      >
        <StyledTrigger
          error={error}
          disabled={disabled}
          style={triggerStyle}
          className={triggerClassName}
          $selectStyle={selectStyle}
        >
          <StyledSelectedValue />
          <AiOutlineDown />
        </StyledTrigger>
        <Portal>
          <StyledContent align="end">
            <ScrollUpButton>
              <AiOutlineUp />
            </ScrollUpButton>
            <StyledViewPort>
              {selectOptions.map((itens, index: number) => (
                <span key={index}>
                  <StyledItem value={itens.value}>
                    <SelectIndication />
                    <StyledItemText>{itens.label}</StyledItemText>
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
      {error && <p>{error}</p>}
    </Container>
  );
};

export default SelectComponent;
