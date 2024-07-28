import { VisuallyHidden } from "@radix-ui/themes";
import { AiOutlineCloseCircle } from "react-icons/ai";
import FakeInput from "../../../components/form/fakeInput";
import {
	FormContainer,
	FormFieldsContainer,
} from "../../../components/form/styles";
import Image from "../../../components/image";
import { addNewProps } from "../../../models/add-new";
import { Banho } from "../../../models/banho";
import {
	Content,
	Description,
	Header,
	Table,
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
			</Header>
			<Content>
				<div className="top">
					<div className="left-side">
						<Image src="https://via.placeholder.com/1000" alt="random image" />
						<Image src="https://via.placeholder.com/2000" alt="random image" />
						<Image src="https://via.placeholder.com/1000" alt="random image" />
						<Image src="https://via.placeholder.com/2000" alt="random image" />
					</div>
					<FormContainer>
						<FormFieldsContainer>
							<FakeInput label="Técnico" value={data.technician} />
							<FakeInput label="Nome" value={data.name} />
							<FormFieldsContainer columns={2}>
								<FakeInput label="Cidade" value={data.city} />
								<FakeInput label="Estado" value={data.state} />
							</FormFieldsContainer>
							<FakeInput label="Rua" value={data.street} />
							<FakeInput label="Número" value={data.neighborhood} />
							<FormFieldsContainer columns={2}>
								<FakeInput label="Número" value={data.type} />
								<FakeInput label="Número" value={data.cellphone} />
							</FormFieldsContainer>
						</FormFieldsContainer>
					</FormContainer>
				</div>
				<div className="bottom">
					<Table>
						<thead>
							<tr>
								<th>Quantidade em metros</th>
								<th>Itens de vistoria</th>
							</tr>
						</thead>
						{data.inspectionItems.map((item) => (
							<tr>
								<td className="quantity">{item.quantity}</td>
								<td>{item.description}</td>
							</tr>
						))}
					</Table>
				</div>
			</Content>
			<Description>
				<VisuallyHidden>Detalhes do pedido</VisuallyHidden>
			</Description>
			<TriggerButtons>
				<TriggerSuccess onClick={props.onClose}>Salvar</TriggerSuccess>
			</TriggerButtons>
		</>
	);
};

export default ModalBanho;
