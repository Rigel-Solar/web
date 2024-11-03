import React, { useState } from 'react';
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { useAppSelector } from '../../../redux/hooks/useApp';
import * as C from "./styles";

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}


const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
  defaultOpen = false
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const theme = useAppSelector((state) => state.theme.status)

  return (
    <C.Section>
      <C.Header onClick={() => setIsOpen(!isOpen)}>
        <C.Title>{title}</C.Title>
        {isOpen ? <IoChevronUp size={20} color={theme == 'light' ? "black" : "white"}/> : <IoChevronDown size={20} color={theme == 'light' ? "black" : "white"}/>}
      </C.Header>
      <C.Content isOpen={isOpen}>
        {children}
      </C.Content>
    </C.Section>
  );
};

export default CollapsibleSection