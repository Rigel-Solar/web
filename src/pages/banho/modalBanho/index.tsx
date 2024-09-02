import { VisuallyHidden } from "@radix-ui/themes";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import FakeInput from "../../../components/form/fakeInput";
import {
	FormContainer,
	FormFieldsContainer,
} from "../../../components/form/styles";
import TechnicianSelect from "../../../components/form/technicianSelect";
import Image from "../../../components/image";
import { CloseButton } from "../../../components/image/styles";
import { Modal } from "../../../components/modal";
import useModal from "../../../functions/use-modal";
import { addNewProps } from "../../../models/add-new";
import { Banho } from "../../../models/banho";
import {
	CarouselContainer,
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
	const { openModal, onOpenChange, handleOpenModal } = useModal();
	const [currentImage, setCurrentImage] = useState<string | null>(null);

	const handleImageClick = (src: string) => {
		setCurrentImage(src);
		handleOpenModal();
	};

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
						<CarouselContainer
							showThumbs={false}
							emulateTouch
							onClickItem={(index) => handleImageClick(data.imgUrl[index])}
						>
							{data.imgUrl.map((src, index) => (
								<Image
									src={src}
									alt={`Imagem ${index + 1}`}
									key={index}
									onClick={() => handleImageClick(src)}
								/>
							))}
						</CarouselContainer>
					</div>

					<FormContainer>
						<FormFieldsContainer>
							{data.technician ? (
								<FakeInput label="Técnico" value={data.technician} />
							) : (
								<TechnicianSelect
									placeholder="Selecione um tecnico"
									onSelect={() => console.log(".")}
									required
								/>
							)}
							<FormFieldsContainer columns={2}>
								<FakeInput label="Nome" value={data.name} />
								<FakeInput label="Tipo de Cliente" value={data.type} />
							</FormFieldsContainer>
							<FormFieldsContainer columns={2}>
								<FakeInput label="Cidade" value={data.city} />
								<FakeInput label="Estado" value={data.state} />
							</FormFieldsContainer>

							<FormFieldsContainer columns={2}>
								<FakeInput label="Rua" value={data.street} />
								<FakeInput label="Bairro" value={data.neighborhood} />
							</FormFieldsContainer>
							<FormFieldsContainer columns={2}>
								<FakeInput label="Número" value={data.number} />
								<FakeInput label="Celular" value={data.cellphone} />
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
						<tbody>
							{data.inspectionItems.map((item) => (
								<tr key={item.description}>
									<td className="quantity">{item.quantity}</td>
									<td>{item.description}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			</Content>
			<Description>
				<VisuallyHidden>Detalhes do pedido</VisuallyHidden>
			</Description>
			<TriggerButtons>
				<TriggerSuccess onClick={props.onClose}>Salvar</TriggerSuccess>
			</TriggerButtons>

			<Modal open={openModal} onOpenChange={onOpenChange} position="center">
				<CloseButton>
					<AiOutlineCloseCircle size={32} color="white" />
				</CloseButton>
				{currentImage && (
					<img className="img-modal" src={currentImage} alt="Imagem ampliada" />
				)}
			</Modal>
		</>
	);
};

export default ModalBanho;
