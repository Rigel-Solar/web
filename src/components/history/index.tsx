import { DialogClose } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/themes";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { addNewProps } from "../../models/add-new";
import { ModalContainer } from "../../pages/cliente/createClient/styles";
import Button from "../form/button";
import { FormContainer, FormFieldsContainer } from "../form/styles";
import {
	ActionAlertDialogContent,
	ActionAlertDialogDescription,
	ActionAlertDialogHeader,
	ActionAlertDialogTitle,
	ActionAlertDialogTriggerButtons,
} from "../modal/actionAlertModal";
import HistoryItem, { HistoryItemProps } from "./historyItem";

export interface ViewHistoryProps extends addNewProps {
	data: Array<HistoryItemProps>;
}

const ViewHistory = ({ data, ...props }: ViewHistoryProps) => {
	return (
		<ModalContainer>
			<ActionAlertDialogHeader>
				<DialogClose>
					<AiOutlineLeftCircle size={20} />
				</DialogClose>
				<ActionAlertDialogTitle>Histórico de Pedidos</ActionAlertDialogTitle>
			</ActionAlertDialogHeader>
			<ActionAlertDialogContent>
				<FormContainer>
					<FormFieldsContainer>
						{data.map((item) => {
							return <HistoryItem key={item.title} {...item} />;
						})}
					</FormFieldsContainer>
				</FormContainer>
				<ActionAlertDialogTriggerButtons>
					<Button
						buttonStyle="secondary"
						style={{ flex: 1 }}
						onClick={props.onClose}
					>
						Cancelar
					</Button>
				</ActionAlertDialogTriggerButtons>
			</ActionAlertDialogContent>
			<VisuallyHidden>
				<ActionAlertDialogDescription>
					Modal do Cliente
				</ActionAlertDialogDescription>
			</VisuallyHidden>
		</ModalContainer>
	);
};

export default ViewHistory;
