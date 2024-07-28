import { DialogClose } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/themes";
import { useState } from "react";
import { AiOutlineEdit, AiOutlineLeftCircle } from "react-icons/ai";
import ModalClient from "..";
import Button from "../../../../components/form/button";
import FakeInput from "../../../../components/form/fakeInput";
import {
	FormContainer,
	FormFieldsContainer,
} from "../../../../components/form/styles";
import ViewHistory from "../../../../components/history";
import { Modal } from "../../../../components/modal";
import {
	ActionAlertDialogContent,
	ActionAlertDialogDescription,
	ActionAlertDialogHeader,
	ActionAlertDialogTitle,
	ActionAlertDialogTriggerButtons,
} from "../../../../components/modal/actionAlertModal";
import EditedFormPopUp from "../../../../components/modal/editedFormPopUp";
import { historyItems } from "../../../../constants/historyItems";
import { addNewProps } from "../../../../models/add-new";
import { ClientTS } from "../../../../utils/clientSchema";
import { ModalContainer } from "../styles";

export interface ViewClientProps extends addNewProps {
	data: ClientTS;
}

const ViewClient = ({ data }: ViewClientProps) => {
	const [openModal, setOpenModal] = useState(false);
	const [openConfirmCloseModal, setOpenConfirmCloseModal] = useState(false);
	const [hasEditedData, setHasEditedData] = useState(false);
	const [modalType, setModalType] = useState<"history" | "client">("client");

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

	const handleOpenModal = (modalType: "history" | "client") => {
		setOpenModal(true);
		setHasEditedData(false);
		setOpenConfirmCloseModal(false);
		setModalType(modalType);
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
				{modalType === "history" ? (
					<ViewHistory
						onClose={onOpenChange}
						onSuccess={handleSuccess}
						data={historyItems}
						onSetEditedData={setHasEditedData}
					/>
				) : (
					<ModalClient
						onClose={onOpenChange}
						onSuccess={handleSuccess}
						data={data}
						onSetEditedData={setHasEditedData}
					/>
				)}
			</Modal>
			<ActionAlertDialogHeader $between={!!data}>
				<DialogClose>
					<AiOutlineLeftCircle size={20} />
				</DialogClose>
				<ActionAlertDialogTitle>Perfil do Cliente</ActionAlertDialogTitle>
				<Button
					buttonStyle="text"
					style={{ padding: 5, fontSize: 20 }}
					onClick={() => handleOpenModal("client")}
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
						<FormFieldsContainer columns={2}>
							<FakeInput value={data.address.city} label="Cidade" />
							<FakeInput value={data.address.neighbourhood} label="Bairro" />
						</FormFieldsContainer>
						<FakeInput value={data.address.street} label="Rua" />
						<FormFieldsContainer columns={2}>
							<FakeInput value={data.address.zipCode} label="CEP" />
							<FakeInput value={data.address.number} label="Nº" />
						</FormFieldsContainer>
					</FormFieldsContainer>
				</FormContainer>
			</ActionAlertDialogContent>
			<ActionAlertDialogTriggerButtons>
				<Button
					buttonStyle="secondary"
					style={{ flex: 1 }}
					onClick={() => handleOpenModal("history")}
				>
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
