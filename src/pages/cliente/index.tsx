import { ChangeEvent, useState } from "react";
import { FiPlus } from "react-icons/fi";
import Button from "../../components/form/button";
import { Modal } from "../../components/modal";
import EditedFormPopUp from "../../components/modal/editedFormPopUp";
import Search from "../../components/search";
import DataTableCliente from "../../components/table/cliente";
import useModal from "../../functions/use-modal";
import useSearch from "../../functions/use-search";
import { Client } from "../../models/client";
import { useFetch } from "../../services/hooks/useFetch";
import { DefaultPageContainer } from "../styles";
import ModalClient from "./createClient";
import ViewClient from "./createClient/viewClient";
import * as C from "./styles";

const Cliente = () => {
	const [client, setClient] = useState<Client[]>([]);
	const [selectedClient, setSelectedClient] = useState<Client | null>(null);
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

	const {
		hasEditedData,
		openConfirmCloseModal,
		onConfirmCloseModal,
		setHasEditedData,
		setOpenConfirmCloseModal,
	} = useModal();

	useFetch<Client[]>(`/Cliente`, ["cliente"], {
		onSuccess: (data) => setClient(data),
	});

	const { searchTerm, handleSearchChange, filteredData } = useSearch(client);

	const handleOpenCreateModal = () => {
		setIsCreateModalOpen(true);
		setSelectedClient(null);
	};

	const handleOpenViewClientModal = (client: Client) => {
		setSelectedClient(client);
		setIsCreateModalOpen(false);
	};

	const handleCloseModal = () => {
		setIsCreateModalOpen(false);
		setSelectedClient(null);
	};

	return (
		<DefaultPageContainer>
			<C.Container>
				<Header
					onOpenModal={handleOpenCreateModal}
					searchTerm={searchTerm}
					onSearchChange={handleSearchChange}
				/>
				<DataTableContainer
					data={filteredData}
					onRowClick={handleOpenViewClientModal}
				/>
			</C.Container>

			<EditedFormPopUp
				open={hasEditedData && openConfirmCloseModal}
				onOpenChange={() => setOpenConfirmCloseModal(!openConfirmCloseModal)}
				onConfirmCloseModal={onConfirmCloseModal}
			/>

			{/* Modal de Criação */}
			<Modal open={isCreateModalOpen} onOpenChange={handleCloseModal}>
				<ModalClient
					onClose={handleCloseModal}
					onSuccess={handleCloseModal}
					onSetEditedData={setHasEditedData}
				/>
			</Modal>

			{/* Modal de Visualização */}
			<Modal
				open={!!selectedClient}
				onOpenChange={handleCloseModal}
				position="right"
			>
				{selectedClient && <ViewClient data={selectedClient} />}
			</Modal>
		</DefaultPageContainer>
	);
};

interface HeaderProps {
	onOpenModal: () => void;
	searchTerm: string;
	onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Header = ({ onOpenModal, searchTerm, onSearchChange }: HeaderProps) => (
	<section>
		<div className="top-area">
			<h1>Clientes</h1>
			<Button buttonStyle="primary" onClick={onOpenModal}>
				<FiPlus size={16} />
				Cadastrar Cliente
			</Button>
		</div>
		<Search
			placeholder="Procurar clientes..."
			value={searchTerm}
			onChange={onSearchChange}
		/>
	</section>
);

interface DataTableContainerProps {
	data: Client[];
	onRowClick: (client: Client) => void;
}

const DataTableContainer = ({ data, onRowClick }: DataTableContainerProps) => (
	<div className="table">
		<DataTableCliente data={data} onRowClick={onRowClick} hasPagination />
	</div>
);

export default Cliente;
