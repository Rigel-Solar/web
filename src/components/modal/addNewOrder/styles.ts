import styled from "styled-components";
import { ActionAlertDialogTriggerButtons } from "../actionAlertModal";
import {
	ModalContent,
	ModalDescription,
	ModalHeader,
	ModalTitle,
	ModalTriggerClose,
	ModalTriggerSuccess,
} from "../index";

export const Header = styled(ModalHeader)``;
export const Content = styled(ModalContent)``;
export const Title = styled(ModalTitle)``;
export const Description = styled(ModalDescription)``;
export const TriggerButtons = styled(ActionAlertDialogTriggerButtons)`
	display: flex;
	justify-content: flex-end;
	padding: 20px;

	button {
		width: 100%;
	}
`;
export const TriggerClose = styled(ModalTriggerClose)``;
export const TriggerSuccess = styled(ModalTriggerSuccess)``;
