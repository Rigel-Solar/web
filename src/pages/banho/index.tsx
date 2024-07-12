import {
	ActionAlertDialogContent,
	ActionAlertDialogRoot,
	ActionAlertDialogTriggerButtons,
	ActionAlertDialogTriggerClose,
	ActionAlertDialogTriggerSuccess,
} from "../../components/modal/actionAlertModal";
import { DefaultPageContainer } from "../styles";
import * as C from "./styles";

const Banho = () => {
	return (
		<DefaultPageContainer>
			<C.Container>
				<ActionAlertDialogRoot open>
					<ActionAlertDialogContent>
						This is an alert dialog content.
					</ActionAlertDialogContent>
					<ActionAlertDialogTriggerButtons>
						<ActionAlertDialogTriggerClose>
							Cancelar
						</ActionAlertDialogTriggerClose>
						<ActionAlertDialogTriggerSuccess>
							Criar
						</ActionAlertDialogTriggerSuccess>
					</ActionAlertDialogTriggerButtons>
				</ActionAlertDialogRoot>
			</C.Container>
		</DefaultPageContainer>
	);
};

export default Banho;
