import { HTMLAttributes, ReactNode } from "react";
import { FakeInputContainer } from "./styles";

export interface fakeInputProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  value: ReactNode;
}

const FakeInput = ({ label, value, ...props }: fakeInputProps) => {
  return (
    <FakeInputContainer {...props}>
      {label && <label className="label-container">{label}</label>}

      <div className="value-container">{value}</div>
    </FakeInputContainer>
  );
};

export default FakeInput;
