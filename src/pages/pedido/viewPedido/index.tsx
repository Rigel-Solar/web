import { DialogClose } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/themes';
import { useState } from 'react';
import { AiOutlineEdit, AiOutlineLeftCircle } from 'react-icons/ai';
import Button from '../../../components/form/button';
import FakeInput from '../../../components/form/fakeInput';
import {
	FormContainer,
	FormFieldsContainer,
} from '../../../components/form/styles';
import { Modal } from '../../../components/modal';
import {
	ActionAlertDialogContent,
	ActionAlertDialogDescription,
	ActionAlertDialogHeader,
	ActionAlertDialogTitle,
} from '../../../components/modal/actionAlertModal';
import AddNewOrder from '../../../components/modal/addNewOrder';
import EditedFormPopUp from '../../../components/modal/editedFormPopUp';
import { orders } from '../../../constants/orders';
import { addNewProps } from '../../../models/add-new';
import { OrderTS } from '../../../utils/pedidoSchema';
import { ModalContainer } from '../../cliente/createClient/styles';

export interface ViewPedidoProps extends addNewProps {
	data: OrderTS;
}

const ViewPedido = ({ data }: ViewPedidoProps) => {
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
				<AddNewOrder
					onClose={onOpenChange}
					onSuccess={handleSuccess}
					onSetEditedData={setHasEditedData}
					data={orders[0]}
				/>
			</Modal>
			<ActionAlertDialogHeader $between={!!data}>
				<DialogClose>
					<AiOutlineLeftCircle size={20} />
				</DialogClose>
				<ActionAlertDialogTitle>Detalhes do Pedido</ActionAlertDialogTitle>
				<Button
					buttonStyle="text"
					style={{ padding: 5, fontSize: 20 }}
					onClick={() => handleOpenModal()}
				>
					<AiOutlineEdit />
				</Button>
			</ActionAlertDialogHeader>
			<ActionAlertDialogContent>
				<FormContainer>
					<FormFieldsContainer>
						<FormFieldsContainer columns={2}>
							<FakeInput value={data.client.name} label="Nome do cliente" />
							<FakeInput value={data.technician} label="Técnico Responsável" />
						</FormFieldsContainer>
						<FakeInput value={data.client.email} label="E-mail" />
						<FormFieldsContainer columns={2}>
							<FakeInput value={data.client.address.city} label="Cidade" />
							<FakeInput
								value={data.client.address.neighbourhood}
								label="Bairro"
							/>
						</FormFieldsContainer>
						<FakeInput value={data.client.address.street} label="Rua" />
						<FormFieldsContainer columns={2}>
							<FakeInput value={data.client.address.zipCode} label="CEP" />
							<FakeInput value={data.client.address.number} label="Nº" />
						</FormFieldsContainer>
						<FakeInput value={data.type_person} label="Tipo de Instalação" />
						<FakeInput value={data.type_order} label="Soluções" />
						<FakeInput value={data.time} label="Pretende instalar em: " />
						<FakeInput value={data.concessionaires} label="Concessionarias" />
						<FakeInput value={data.light_cost} label="Custo da conta de Luz" />
						<FakeInput value={data.comments} label="Comentários" />
					</FormFieldsContainer>
				</FormContainer>
			</ActionAlertDialogContent>
			<VisuallyHidden>
				<ActionAlertDialogDescription>
					Modal do pedido
				</ActionAlertDialogDescription>
			</VisuallyHidden>
		</ModalContainer>
	);
};

export default ViewPedido;
