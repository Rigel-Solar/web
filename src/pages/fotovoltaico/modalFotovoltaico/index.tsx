import { VisuallyHidden } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CollapsibleSection from "../../../components/form/collapsible-section";
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
import { IFotovoltaico } from "../../../models/fotovoltaico";
import {
	CarouselContainer,
	Content,
	Description,
	Header,
	Title,
	TriggerButtons,
	TriggerClose,
} from "./styles";

export interface ModalFotovoltaicoProps extends addNewProps {
	data: IFotovoltaico;
}

const ModalFotovoltaico = ({ data, ...props }: ModalFotovoltaicoProps) => {
	const { openModal, onOpenChange, handleOpenModal } = useModal();
	const [currentImage, setCurrentImage] = useState<string | null>(null);
	const [enderecoArray, setEnderecoArray] = useState<string[]>([
		"",
		"",
		"",
		"",
		"",
	]);

	console.log("aqui", data)

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
					{Array.isArray(data.fotos) && (
						<div className="left-side">
							<CarouselContainer showThumbs={false} emulateTouch>
								{data.fotos.map((data, index) => (
									<Image
										src={data.foto1}
										alt={`Imagem ${index + 1}`}
										key={index}
										onClick={() => handleImageClick(data.foto1)}
									/>
								))}
							</CarouselContainer>
						</div>
					)}

					<FormContainer>
						<FormFieldsContainer>
							{data.vistoriaDTO.tecnicoDTO && (
								<FakeInput
									label="Técnico"
									value={data.vistoriaDTO.tecnicoDTO.usuario?.nome}
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
								<FakeInput label="Estado" value="SP" />
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

				<CollapsibleSection title="Sistema Fotovoltaico Proposto">
					<FakeInput label="Quantidade de Módulos" value={data.quantidadeSf} />
					<FakeInput label="Potência do Módulo" value={data.potenciaSf} />
					<FakeInput label="Dimensões do Módulo" value={data.dimensoesSf} />
					<FakeInput label="Área de Ocupação" value={data.areaOcupacaoSf} />
					<FakeInput
						label="Quantidade de Inversores"
						value={data.quantidadeInversorSf}
					/>
					<FakeInput label="Modelo do Inversor" value={data.modeloInversorSf} />
				</CollapsibleSection>

				<CollapsibleSection title="Padrão de Entrada">
					<FakeInput
						label="Concessionária de Energia"
						value={data.concessionariaEnergiaPe}
					/>
					<FakeInput label="Tipo de Cliente" value={data.tipoidClienteNavigation.tipo} />
					<FakeInput
						label="Demanda Contratada"
						value={data.demandaContratadaPe}
					/>
					<FakeInput label="Tipo de Ligação" value={data.tipoLigacaoDTO.tipo} />
					<FakeInput
						label="Tensão Nominal"
						value={data.tensaoNominalDTO.tensao}
					/>
					<FakeInput
						label="Condição Padrão de Entrada"
						value={data.condicaoPadraoEntradaDTO.condicao}
					/>
					<FakeInput
						label="Dimensão da Caixa Padrão"
						value={data.dimensaoCaixaPadraoPe}
					/>
					<FakeInput
						label="Modelo do Relogio"
						value={data.modeloRelogioDTO.modelo}
					/>
					<FakeInput
						label="Aterramento"
						value={data.aterramentoPe ? "Sim" : "Não"}
					/>
					<FakeInput
						label="Disjuntor do Padrão de Entrada"
						value={data.disjuntorPadraoEntradaPe}
					/>
					<FakeInput label="Bitola do Condutor" value={data.bitolaCondutorPe} />
				</CollapsibleSection>

				<CollapsibleSection title="Quadro Principal de Energia">
					<FakeInput
						label="Disjuntor Quadro Principal"
						value={data.disjuntorQuadroPrincipalQpe}
					/>
					<FakeInput
						label="Condições Quadro Distribuição Principal de Energia"
						value={data.condicaoQuadroPrincipalDTO.condicao}
					/>
					<FakeInput
						label="Bitola do Condutor de Entrada no Quadro (Antes do Disjuntor Geral)"
						value={data.bitolaCondutorPe}
					/>
					<FakeInput label="Aterramento" value={data.aterramentoPe} />
				</CollapsibleSection>

				<CollapsibleSection title="Local de Instalação dos Módulos">
					<FakeInput
						label="Local"
						value={data.localInstalacaoModuloDTO.local}
					/>
					<FakeInput
						label="Idade do Telhado"
						value={data.idadeTelhadoDTO.idade}
					/>
					<FakeInput
						label="Material das Vigas do Telhado"
						value={data.materialVigasTelhadoDTO.condicao}
					/>
					<FakeInput
						label="Condições das Vigas"
						value={data.condicaoVigaDTO.condicao}
					/>
				</CollapsibleSection>

				<CollapsibleSection title="Solo">
					<FakeInput
						label="Dimensões Úteis (LxC)"
						value={`${data.larguraSolo} x ${data.comprimentoSolo}`}
					/>
					<FakeInput
						label="Nivelamento do Solo"
						value={data.nivelamentoSoloDTO.nivelamento}
					/>
					<FakeInput
						label="Tipo de Superfície"
						value={data.tipoSuperficieDTO.tipo}
					/>
				</CollapsibleSection>

				<CollapsibleSection title="Telhado">
					<FakeInput label="Acesso" value={data.telhadoAcessoDTO.acesso} />
					<FakeInput label="Tipo de Telha" value={data.tipoTelha} />
					<FakeInput
						label="Distância entre Ripas"
						value={data.distanciaRipasTelhado}
					/>
					<FakeInput
						label="Distância entre Caibros"
						value={data.distanciaCaibrosTelhado}
					/>
					<FakeInput
						label="Distância entre Terças"
						value={data.distanciaTercasTelhado}
					/>
					<FakeInput
						label="Distância Empena"
						value={data.distanciaEmpenaTelhado}
					/>
					<FakeInput
						label="Condição do Telhado"
						value={data.condicaoVigaDTO.condicao}
					/>
				</CollapsibleSection>
			</Content>

			<Description>
				<VisuallyHidden>Detalhes do pedido</VisuallyHidden>
			</Description>
			<TriggerButtons>
				<TriggerClose onClick={props.onClose}>Salvar</TriggerClose>
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

export default ModalFotovoltaico;
