import { DialogClose } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/themes";
import { useState } from "react";
import { AiOutlineEdit, AiOutlineLeftCircle } from "react-icons/ai";
import ModalTecnico from "..";
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
import { Technician } from "../../../../models/technician";
import { ModalContainer } from "../styles";

export interface ViewTecnicoProps extends addNewProps {
	data: Technician;
}

const ViewTecnico = ({ data }: ViewTecnicoProps) => {
	const [openModal, setOpenModal] = useState(false);
	const [openConfirmCloseModal, setOpenConfirmCloseModal] = useState(false);
	const [hasEditedData, setHasEditedData] = useState(false);
	const [modalType, setModalType] = useState<"history" | "technician">(
		"technician"
	);

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

	const handleOpenModal = (modalType: "history" | "technician") => {
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
					<ModalTecnico
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
				<ActionAlertDialogTitle>Perfil do Técnico</ActionAlertDialogTitle>
				<Button
					buttonStyle="text"
					style={{ padding: 5, fontSize: 20 }}
					onClick={() => handleOpenModal("technician")}
				>
					<AiOutlineEdit />
				</Button>
			</ActionAlertDialogHeader>
			<ActionAlertDialogContent>
				<FormContainer>
					<FormFieldsContainer>
						<FakeInput value={data.name} label="Nome do técnico" />
						<FakeInput value={data.email} label="E-mail" />
						<FakeInput value={data.specialty} label="Especialidade" />
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
					Modal do técnico
				</ActionAlertDialogDescription>
			</VisuallyHidden>
		</ModalContainer>
	);
};

export default ViewTecnico;
