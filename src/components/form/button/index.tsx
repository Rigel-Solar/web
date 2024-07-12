import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";
import { AiOutlineLoading } from "react-icons/ai";

export type buttonStyle = "primary" | "secondary" | "text" | "link";
export type buttonState = "normal" | "error" | "success";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: buttonStyle;
  buttonState?: buttonState;
  isLoading?: boolean;
}

const Button = ({
  children,
  type = "button",
  buttonStyle = "primary",
  buttonState = "normal",
  isLoading,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer
      {...{
        ...props,
        type,
        $buttonStyle: buttonStyle,
        $buttonState: buttonState,
        disabled,
      }}
    >
      {children}
      {isLoading && (
        <div className="loading-button">
          <AiOutlineLoading className="load-icon" />
        </div>
      )}
    </ButtonContainer>
  );
};
export default Button;
