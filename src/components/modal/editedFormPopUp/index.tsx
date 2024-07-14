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
				<h2>Fechar</h2>
			</PopUpHeader>

			<EditedFormContainer>
				<p>Tem certeza que deseja fechar ?</p>

				<div className="buttons-container">
					<PopUpTriggerClose $buttonStyle="text" $buttonState="normal">
						Voltar
					</PopUpTriggerClose>

					<Button onClick={handleConfirmClose}>Fechar</Button>
				</div>
			</EditedFormContainer>
		</PopUp>
	);
};

export default EditedFormPopUp;
