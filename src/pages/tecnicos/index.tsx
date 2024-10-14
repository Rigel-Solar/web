import { ChangeEvent, useState } from "react";
import { FiPlus } from "react-icons/fi";
import Button from "../../components/form/button";
import { Modal } from "../../components/modal";
import Search from "../../components/search";
import DataTableTecnico from "../../components/table/tecnico";
import useModal from "../../functions/use-modal";
import useSearch from "../../functions/use-search";
import { Technician } from "../../models/technician";
import { useFetch } from "../../services/hooks/useFetch";
import { DefaultPageContainer } from "../styles";
import ModalTecnico from "./modalTecnico";
import ViewTecnico from "./modalTecnico/viewTecnico";
import * as C from "./styles";

const Tecnicos = () => {
	const [technicians, setTechnicians] = useState<Technician[]>([]);
	const [selectedTechnician, setSelectedTechnician] =
		useState<Technician | null>(null);
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

	const { setHasEditedData } = useModal();

	useFetch<Technician[]>("/Tecnico", ["tecnico"], {
		onSuccess: (data) => setTechnicians(data),

		keepPreviousData: true,
		refetchOnWindowFocus: false,
	});

	const { searchTerm, handleSearchChange, filteredData } =
		useSearch(technicians);

	const handleOpenCreateModal = () => {
		setIsCreateModalOpen(true);
		setSelectedTechnician(null);
	};

	const handleOpenViewTechnicianModal = (technician: Technician) => {
		setSelectedTechnician(technician);
		setIsCreateModalOpen(false);
	};

	const handleCloseModal = () => {
		setIsCreateModalOpen(false);
		setSelectedTechnician(null);
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
					onOpenTechnician={handleOpenViewTechnicianModal}
				/>
			</C.Container>

			{/* Modal de Criação */}
			<Modal open={isCreateModalOpen} onOpenChange={handleCloseModal}>
				<ModalTecnico
					onClose={handleCloseModal}
					onSuccess={handleCloseModal}
					onSetEditedData={setHasEditedData}
				/>
			</Modal>

			{/* Modal de Visualização */}
			<Modal
				open={!!selectedTechnician}
				onOpenChange={handleCloseModal}
				position="right"
			>
				{selectedTechnician && <ViewTecnico data={selectedTechnician} />}
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
			<h1>Técnicos</h1>
			<Button buttonStyle="primary" onClick={onOpenModal}>
				<FiPlus size={16} />
				Cadastrar Técnico
			</Button>
		</div>
		<Search
			placeholder="Procurar técnicos..."
			value={searchTerm}
			onChange={onSearchChange}
		/>
	</section>
);

interface DataTableContainerProps {
	data: Technician[];
	onOpenTechnician: (technician: Technician) => void;
}

const DataTableContainer = ({
	data,
	onOpenTechnician,
}: DataTableContainerProps) => (
	<div className="table">
		<DataTableTecnico
			data={data}
			onOpenTechnician={onOpenTechnician}
			hasPagination
		/>
	</div>
);

export default Tecnicos;
