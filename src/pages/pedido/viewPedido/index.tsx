import { DialogClose } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/themes";
import { useState } from "react";
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
import { orders } from "../../../constants/orders";
import { addNewProps } from "../../../models/add-new";
import { useFetch } from "../../../services/hooks/useFetch";
import { OrderTS } from "../../../utils/pedidoSchema";
import { ModalContainer } from "../../cliente/createClient/styles";

export interface ViewPedidoProps extends addNewProps {
	data: OrderTS;
}

const ViewPedido = ({ data }: ViewPedidoProps) => {
	const [openModal, setOpenModal] = useState(false);
	const [openConfirmCloseModal, setOpenConfirmCloseModal] = useState(false);
	const [hasEditedData, setHasEditedData] = useState(false);
	const [pedido, setPedido] = useState<OrderTS>();

	useFetch<OrderTS>(`/Vistoria`, ["vistoria"], {
		onSuccess: (data) => setPedido(data),
	});

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
					data={orders[0]}
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
					onClick={() => handleOpenModal()}
				>
					<AiOutlineEdit />
				</Button>
			</ActionAlertDialogHeader>
			<ActionAlertDialogContent>
				<FormContainer>
					<FormFieldsContainer>
						<FormFieldsContainer columns={2}>
							<FakeInput value={pedido?.idCliente} label="Nome do cliente" />
							<FakeInput value={data.idTecnico} label="Técnico Responsável" />
						</FormFieldsContainer>
						<FakeInput value={"email@gmail.com"} label="E-mail" />
						<FormFieldsContainer columns={2}>
							<FakeInput value="São Caetano do Sul" label="Cidade" />
							<FakeInput value="Bairro 1" label="Bairro" />
						</FormFieldsContainer>
						<FakeInput value="Rua 1" label="Rua" />
						<FormFieldsContainer columns={2}>
							<FakeInput value="CEP 1" label="CEP" />
							<FakeInput value="N 1" label="Nº" />
						</FormFieldsContainer>
						<FakeInput value={data.tipoInstalacao} label="Tipo de Instalação" />
						<FakeInput value={data.solucoes} label="Soluções" />
						<FakeInput
							value={data.pretendeInstalarEm}
							label="Pretende instalar em: "
						/>
						<FakeInput
							value={data.concessionarias ? data.concessionarias : "Nenhuma"}
							label="Concessionarias"
						/>
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
