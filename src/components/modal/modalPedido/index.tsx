import { AiOutlineCloseCircle } from "react-icons/ai";
import { addNewProps } from "../../../models/add-new";
import {
	Content,
	Header,
	TriggerButtons,
	TriggerClose,
	TriggerSuccess,
} from "./stytles";

export interface ModalPedidoProps extends addNewProps {}

const ModalPedido = () => {
	return (
		<>
			<Header>
				<TriggerClose>
					<AiOutlineCloseCircle />
				</TriggerClose>
				<h3>Detalhes do pedido</h3>
			</Header>
			<Content>
				<p>Aqui está os detalhes do pedido</p>
			</Content>
			<TriggerButtons>
				<TriggerSuccess>Salvar</TriggerSuccess>
			</TriggerButtons>
		</>
	);
};

export default ModalPedido;
