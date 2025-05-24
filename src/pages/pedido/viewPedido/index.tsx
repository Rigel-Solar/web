import { DialogClose } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineLeftCircle } from "react-icons/ai";
import Button from "../../../components/form/button";
import FakeInput from "../../../components/form/fakeInput";
import {
	FormContainer,
	FormFieldsContainer,
} from "../../../components/form/styles";
import { Modal } from "../../../components/modal";
import {
	ActionAlertDialogContent,
	ActionAlertDialogDescription,
	ActionAlertDialogHeader,
	ActionAlertDialogTitle,
} from "../../../components/modal/actionAlertModal";
import AddNewOrder from "../../../components/modal/addNewOrder";
import EditedFormPopUp from "../../../components/modal/editedFormPopUp";
import { PedidoTS } from "../../../models/pedido";
import { ModalContainer } from "../../cliente/createClient/styles";

export interface ViewPedidoProps {
	data: PedidoTS;
}

const ViewPedido = ({ data }: ViewPedidoProps) => {
	const [openModal, setOpenModal] = useState(false);
	const [openConfirmCloseModal, setOpenConfirmCloseModal] = useState(false);
	const [hasEditedData, setHasEditedData] = useState(false);

	const [enderecoArray, setEnderecoArray] = useState<string[]>([
		"",
		"",
		"",
		"",
		"",
	]);

	useEffect(() => {
		if (data?.idClienteNavigation?.endereco) {
			const parts = data.idClienteNavigation.endereco
				.split(", ")
				.map((part) => part.trim());
			setEnderecoArray(parts);
		}
	}, [data]);

	const onOpenChange = () => {
		if (hasEditedData) {
			setOpenConfirmCloseModal(true);
			return;
		}
		setOpenModal(!openModal);
	};

	const onConfirmCloseModal = () => {
		setHasEditedData(false);
		setOpenConfirmCloseModal(false);
		setOpenModal(false);
	};

	const handleOpenModal = () => {
		setOpenModal(true);
		setHasEditedData(false);
		setOpenConfirmCloseModal(false);
	};

	const handleSuccess = () => {
		onConfirmCloseModal();
	};

	return (
		<ModalContainer>
			<EditedFormPopUp
				open={hasEditedData && openConfirmCloseModal}
				onOpenChange={() => setOpenConfirmCloseModal(!openConfirmCloseModal)}
				onConfirmCloseModal={onConfirmCloseModal}
			/>
			<Modal open={openModal} onOpenChange={onOpenChange}>
				<AddNewOrder
					onClose={onOpenChange}
					onSuccess={handleSuccess}
					onSetEditedData={setHasEditedData}
					data={data}
				/>
			</Modal>
			<ActionAlertDialogHeader $between={!!data}>
				<DialogClose>
					<AiOutlineLeftCircle size={20} />
				</DialogClose>
				<ActionAlertDialogTitle>Detalhes do Pedido</ActionAlertDialogTitle>
				<Button
					buttonStyle="text"
					style={{ padding: 5, fontSize: 20 }}
					onClick={handleOpenModal}
				>
					<AiOutlineEdit />
				</Button>
			</ActionAlertDialogHeader>
			<ActionAlertDialogContent>
				<FormContainer>
					<FormFieldsContainer>
						<FormFieldsContainer columns={2}>
							<FakeInput
								value={data?.idClienteNavigation?.nome}
								label="Nome do cliente"
							/>
							<FakeInput
								value={data.idTecnicoNavigation.usuario?.nome}
								label="Técnico Responsável"
							/>
						</FormFieldsContainer>
						<FakeInput value={data?.idClienteNavigation?.email} label="E-mail" />
						<FormFieldsContainer columns={2}>
							<FakeInput value={enderecoArray[0]} label="Cidade" />
							<FakeInput value={enderecoArray[1]} label="Bairro" />
						</FormFieldsContainer>
						<FakeInput value={enderecoArray[2]} label="Rua" />
						<FormFieldsContainer columns={2}>
							<FakeInput value={enderecoArray[3]} label="Número" />
							<FakeInput value={enderecoArray[4]} label="CEP" />
						</FormFieldsContainer>
						<FakeInput value={data.tipoInstalacao} label="Tipo de Instalação" />
						<FakeInput value={data.solucoes} label="Soluções" />
						<FakeInput
							value={data.pretendeInstalarEm}
							label="Pretende instalar em: "
						/>
						<FakeInput value="Não há" label="Concessionarias" />
						<FakeInput
							value={data.valorContaLuz}
							label="Custo da conta de Luz"
						/>
						<FakeInput value={data.comentarios} label="Comentários" />
					</FormFieldsContainer>
				</FormContainer>
			</ActionAlertDialogContent>
			<VisuallyHidden>
				<ActionAlertDialogDescription>
					Modal do pedido
				</ActionAlertDialogDescription>
			</VisuallyHidden>
		</ModalContainer>
	);
};

export default ViewPedido;
