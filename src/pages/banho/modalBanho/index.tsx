import { VisuallyHidden } from "@radix-ui/themes";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { addNewProps } from "../../../models/add-new";
import { Banho } from "../../../models/banho";
import {
	Content,
	Description,
	Header,
	Title,
	TriggerButtons,
	TriggerClose,
	TriggerSuccess,
} from "./styles";

export interface ModalBanhoProps extends addNewProps {
	data: Banho;
}

const ModalBanho = ({ data, ...props }: ModalBanhoProps) => {
	console.log(props.canEdit);
	return (
		<>
			<Header>
				<TriggerClose>
					<AiOutlineCloseCircle />
				</TriggerClose>
				<Title>Detalhes do pedido</Title>
				{data.bairro}
			</Header>
			<Content>
				<p>Aqui está os detalhes do pedido</p>
			</Content>
			<Description>
				<VisuallyHidden>Detalhes do pedido</VisuallyHidden>
			</Description>
			<TriggerButtons>
				<TriggerSuccess>Salvar</TriggerSuccess>
			</TriggerButtons>
		</>
	);
};

export default ModalBanho;
