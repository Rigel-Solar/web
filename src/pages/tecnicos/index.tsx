import { ChangeEvent, useState } from "react";
import { FiPlus } from "react-icons/fi";
import Button from "../../components/form/button";
import { Modal } from "../../components/modal";
import EditedFormPopUp from "../../components/modal/editedFormPopUp";
import ModalTecnico from "./modalTecnico";
import Search from "../../components/search";
import DataTable from "../../components/table";
import { tableData } from "../../constants/table";
import useSearch from "../../functions/use-search";
import { DataTableProps } from "../../models/data-table";
import { DefaultPageContainer } from "../styles";
import * as C from "./styles";

const Tecnicos = () => {
	const [openModal, setOpenModal] = useState(false);
	const [hasEditedData, setHasEditedData] = useState(false);
	const [openConfirmCloseModal, setOpenConfirmCloseModal] = useState(false);
	const { searchTerm, handleSearchChange, filteredData } = useSearch(tableData);

	const handleOpenModal = () => setOpenModal(true);
	const handleCloseModal = () => setOpenModal(false);

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

	return (
		<DefaultPageContainer>
			<C.Container>
				<Header
					onOpenModal={handleOpenModal}
					searchTerm={searchTerm}
					onSearchChange={handleSearchChange}
				/>
				<DataTableContainer data={filteredData} />
			</C.Container>
			<EditedFormPopUp
				open={hasEditedData && openConfirmCloseModal}
				onOpenChange={() => setOpenConfirmCloseModal(!openConfirmCloseModal)}
				onConfirmCloseModal={onConfirmCloseModal}
			/>
			<Modal open={openModal} onOpenChange={onOpenChange}>
				<ModalTecnico
					onClose={handleCloseModal}
					onSuccess={handleCloseModal}
					onSetEditedData={setHasEditedData}
				/>
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
			<h1>Tecnicos</h1>
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

const DataTableContainer = ({ data }: DataTableProps) => (
	<div className="table">
		<DataTable data={data} isTechnician hasPagination />
	</div>
);

export default Tecnicos;
