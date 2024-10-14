import { DialogProps } from "@radix-ui/react-dialog";
import { PopUp, PopUpHeader, PopUpTriggerClose } from "..";
import Button from "../../../form/button";
import { EditedFormContainer } from "../../editedFormPopUp/styles";

export interface PopUpDeleteProps extends DialogProps {
	onDelete?(): void;
}

const PopUpDelete = ({ onDelete, ...props }: PopUpDeleteProps) => {
	return (
		<PopUp {...props} hasPortal>
			<PopUpHeader>
				<h2>Deletar</h2>
			</PopUpHeader>

			<EditedFormContainer>
				<p>Tem certeza que deseja apagar ?</p>

				<div className="buttons-container" style={{ fontSize: 14 }}>
					<PopUpTriggerClose $buttonStyle="text" $buttonState="normal">
						Cancelar
					</PopUpTriggerClose>

					<Button onClick={onDelete}>Apagar</Button>
				</div>
			</EditedFormContainer>
		</PopUp>
	);
};

export default PopUpDelete;
