import { DialogClose } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/themes";
import { useState } from "react";
import { AiOutlineEdit, AiOutlineLeftCircle } from "react-icons/ai";
import ModalClient from "..";
import Button from "../../form/button";
import FakeInput from "../../form/fakeInput";
import {
	FormContainer,
	FormFieldsContainer,
} from "../../form/styles";
import { Modal } from "../../modal";
import {
	ActionAlertDialogContent,
	ActionAlertDialogDescription,
	ActionAlertDialogHeader,
	ActionAlertDialogTitle,
	ActionAlertDialogTriggerButtons,
} from "../../modal/actionAlertModal";
import EditedFormPopUp from "../../modal/editedFormPopUp";
import { addNewProps } from "../../../models/add-new";
import { ClientTS } from "../../../utils/clientSchema"
import { ModalContainer } from "../styles";

export interface ViewClientProps extends addNewProps {
	data: ClientTS;
}

const ViewClient = ({ data }: ViewClientProps) => {
	const [openModal, setOpenModal] = useState(false);
	const [openConfirmCloseModal, setOpenConfirmCloseModal] = useState(false);
	const [hasEditedData, setHasEditedData] = useState(false);

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
				<ModalClient
					onClose={onOpenChange}
					onSuccess={handleSuccess}
					data={data}
					onSetEditedData={setHasEditedData}
				/>
			</Modal>
			<ActionAlertDialogHeader $between={!!data}>
				<DialogClose>
					<AiOutlineLeftCircle size={20} />
				</DialogClose>
				<ActionAlertDialogTitle>Perfil do Cliente</ActionAlertDialogTitle>
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
						<FakeInput value={data.name} label="Nome do Cliente" />
						<FakeInput value={data.email} label="E-mail" />
						<FakeInput value={data.type} label="Tipo de Cliente" />
						<FakeInput value={data.address.street} label="Rua" />
						<FakeInput value={data.address.neighbourhood} label="Bairro" />
						<FakeInput value={data.address.zipCode} label="CEP" />
						<FakeInput value={data.address.number} label="Nº" />
					</FormFieldsContainer>
				</FormContainer>
			</ActionAlertDialogContent>
			<ActionAlertDialogTriggerButtons>
				<Button buttonStyle="secondary" style={{ flex: 1 }}>
					Histórico de pedidos
				</Button>
			</ActionAlertDialogTriggerButtons>
			<VisuallyHidden>
				<ActionAlertDialogDescription>
					Modal do Cliente
				</ActionAlertDialogDescription>
			</VisuallyHidden>
		</ModalContainer>
	);
};

export default ViewClient;
