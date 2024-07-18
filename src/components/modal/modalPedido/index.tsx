import { VisuallyHidden } from "@radix-ui/themes";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { addNewProps } from "../../../models/add-new";
import {
	Content,
	Description,
	Header,
	Title,
	TriggerButtons,
	TriggerClose,
	TriggerSuccess,
} from "./styles";

export interface ModalPedidoProps extends addNewProps {}

const ModalPedido = () => {
	return (
		<>
			<Header>
				<TriggerClose>
					<AiOutlineCloseCircle />
				</TriggerClose>
				<Title>Detalhes do pedido</Title>
			</Header>
			<Content>
				<p>Aqui está os detalhes do pedido</p>
			</Content>
			<Description>
				<VisuallyHidden>teste</VisuallyHidden>
			</Description>
			<TriggerButtons>
				<TriggerSuccess>Salvar</TriggerSuccess>
			</TriggerButtons>
		</>
	);
};

export default ModalPedido;
