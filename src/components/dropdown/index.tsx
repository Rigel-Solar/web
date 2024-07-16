import { DropdownMenu, Flex } from "@radix-ui/themes";
import { IoChevronForward } from "react-icons/io5";
import { Content, Item, Root, Trigger } from "./styles";

export interface DropdownProps {
	handleOpenModal(): void;
}

const Dropdown = ({ handleOpenModal }: DropdownProps) => {
	return (
		<Root>
			<Trigger>
				<DropdownMenu.TriggerIcon />
			</Trigger>
			<Content>
				<Flex gap={"10"} direction={"column"}>
					<Item onClick={handleOpenModal}>
						<p>Ver</p> <IoChevronForward size={12} color="#E0E0E0" />
					</Item>
					<Item onClick={handleOpenModal}>
						<p>Editar</p> <IoChevronForward size={12} color="#E0E0E0" />
					</Item>
				</Flex>
			</Content>
		</Root>
	);
};

export default Dropdown;
