import { VisuallyHidden } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import FakeInput from "../../../components/form/fakeInput";
import {
	FormContainer,
	FormFieldsContainer,
} from "../../../components/form/styles";
import Image from "../../../components/image";
import { CloseButton } from "../../../components/image/styles";
import { Modal } from "../../../components/modal";
import useModal from "../../../functions/use-modal";
import { addNewProps } from "../../../models/add-new";
import { IPiscina } from "../../../models/piscina";
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

export interface ModalPiscinaProps extends addNewProps {
	data: IPiscina;
}

const ModalPiscina = ({ data, ...props }: ModalPiscinaProps) => {
	const { openModal, onOpenChange, handleOpenModal } = useModal();
	const [currentImage, setCurrentImage] = useState<string | null>(null);
	const [enderecoArray, setEnderecoArray] = useState<string[]>([
		"",
		"",
		"",
		"",
		"",
	]);

	const handleImageClick = (src?: string) => {
		if (src) {
			setCurrentImage(src);
			handleOpenModal();
		}
	};

	useEffect(() => {
		if (data?.vistoriaDTO.idClienteNavigation.endereco) {
			const parts = data.vistoriaDTO.idClienteNavigation.endereco
				.split(", ")
				.map((part) => part.trim());
			setEnderecoArray(parts);
		}
	}, [data]);

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
					{Array.isArray(data.imgUrl) && (
						<div className="left-side">
							<CarouselContainer
								showThumbs={false}
								emulateTouch
								onClickItem={(index) => handleImageClick(data.imgUrl![index])}
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
					)}

					<FormContainer>
						<FormFieldsContainer>
							{data.vistoriaDTO.idTecnicoNavigation && (
								<FakeInput
									label="Técnico"
									value={data.vistoriaDTO.idTecnicoNavigation.usuario.nome}
								/>
							)}
							<FormFieldsContainer columns={2}>
								<FakeInput
									label="Nome"
									value={data.vistoriaDTO.idClienteNavigation.nome}
								/>
								<FakeInput
									label="Tipo de Cliente"
									value={data.vistoriaDTO.idClienteNavigation.tipo}
								/>
							</FormFieldsContainer>
							<FormFieldsContainer columns={2}>
								<FakeInput label="Cidade" value={enderecoArray[0]} />
								<FakeInput label="Estado" value={"SP"} />
							</FormFieldsContainer>

							<FormFieldsContainer columns={2}>
								<FakeInput label="Rua" value={enderecoArray[2]} />
								<FakeInput label="Bairro" value={enderecoArray[1]} />
							</FormFieldsContainer>
							<FormFieldsContainer columns={2}>
								<FakeInput label="Número" value={enderecoArray[3]} />
								<FakeInput label="CEP" value={enderecoArray[4]} />
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
							<tr>
								<td className="quantity">{data.largura}</td>
								<td>Largura</td>
							</tr>
							<tr>
								<td className="quantity">{data.comprimento}</td>
								<td>Comprimento</td>
							</tr>
							<tr>
								<td className="quantity">{data.profundidade}</td>
								<td>Profundidade Média</td>
							</tr>
							<tr>
								<td className="quantity">{data.temperaturaAgua}</td>
								<td>Temperatura desejada da Água</td>
							</tr>
							<tr>
								<td className="quantity">{data.usoCapaTermica}</td>
								<td>Uso da Capa térmica</td>
							</tr>
							<tr>
								<td className="quantity">{data.regiao}</td>
								<td>Região (1-Quente, 2-Fria, 3- Média)</td>
							</tr>
							<tr>
								<td className="quantity">{data.ambiente}</td>
								<td>Ambiente aberto ou fechado ( A/F)</td>
							</tr>
							<tr>
								<td className="quantity">{data.area ? data.area : 0}</td>
								<td>Área</td>
							</tr>
							<tr>
								<td className="quantity">{data.volume ? data.volume : 0}</td>
								<td>Volume</td>
							</tr>
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

export default ModalPiscina;
