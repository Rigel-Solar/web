import { DialogProps } from "@radix-ui/react-dialog";
import Button from "../../form/button";
import { PopUp, PopUpHeader, PopUpTriggerClose } from "../popUp";
import { EditedFormContainer } from "./styles";

export interface editedFormPopUp extends DialogProps {
	onConfirmCloseModal(): void;
}

const EditedFormPopUp = ({
	onConfirmCloseModal,
	...props
}: editedFormPopUp) => {
	const handleConfirmClose = () => {
		onConfirmCloseModal();
	};

	return (
		<PopUp {...props} hasPortal>
			<PopUpHeader>
				<h2>Sair</h2>
			</PopUpHeader>

			<EditedFormContainer>
				<p>Tem certeza que deseja sair ?</p>

				<div className="buttons-container">
					<PopUpTriggerClose $buttonStyle="text" $buttonState="normal">
						Voltar
					</PopUpTriggerClose>

					<Button buttonState="error" onClick={handleConfirmClose}>
						Fechar
					</Button>
				</div>
			</EditedFormContainer>
		</PopUp>
	);
};

export default EditedFormPopUp;
