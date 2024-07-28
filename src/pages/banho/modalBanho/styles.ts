import styled from "styled-components";
import {
	ModalContent,
	ModalDescription,
	ModalHeader,
	ModalTitle,
	ModalTriggerButtons,
	ModalTriggerClose,
	ModalTriggerSuccess,
} from "../../../components/modal";

export const Header = styled(ModalHeader)``;

export const Content = styled(ModalContent)`
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	gap: 20px;

	.top {
		display: flex;
		align-items: center;
		gap: 20px;

		@media (width <= 1280px) {
			flex-direction: column;
		}
		@media (width <= 760px) {
			.left-side {
				grid-template-columns: 1fr !important;
			}
		}

		.left-side {
			height: 100%;
			flex: 1;
			display: grid;
			align-content: center;
			grid-template-columns: repeat(2, 1fr);
			gap: 10px;
			padding: 10px;
		}
	}
	.bottom {
		margin-top: 30px;
	}
`;

export const Title = styled(ModalTitle)``;
export const Description = styled(ModalDescription)``;

export const TriggerButtons = styled(ModalTriggerButtons)`
	display: flex;
	justify-content: flex-end;
`;

export const TriggerClose = styled(ModalTriggerClose)``;
export const TriggerSuccess = styled(ModalTriggerSuccess)``;

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin-top: 10px;

	th,
	td {
		${({ theme }) => theme.font.p.small};
		color: ${({ theme }) => theme.colors.fake_input.value};
		border: 1px solid ${({ theme }) => theme.colors.brand.text};
		padding: 8px;
	}

	.quantity {
		max-width: 20px;
	}

	th {
		color: ${({ theme }) => theme.colors.fake_input.label};
		text-align: center;
	}
`;
