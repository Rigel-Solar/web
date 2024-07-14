import { DropdownMenu, Flex } from "@radix-ui/themes";
import { IoChevronForward } from "react-icons/io5";
import { Content, Item, Root, Trigger } from "./styles";

const Dropdown = () => {
	return (
		<Root>
			<Trigger>
				<DropdownMenu.TriggerIcon />
			</Trigger>
			<Content>
				<Flex gap={"10"} direction={"column"}>
					<Item>
						<p>Ver</p> <IoChevronForward size={12} color="#E0E0E0" />
					</Item>
					<Item>
						<p>Editar</p> <IoChevronForward size={12} color="#E0E0E0" />
					</Item>
				</Flex>
			</Content>
		</Root>
	);
};

export default Dropdown;
