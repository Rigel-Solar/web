import { ChangeEvent } from "react";
import { FiPlus } from "react-icons/fi";
import Button from "../../components/form/button";
import { Modal } from "../../components/modal";
import EditedFormPopUp from "../../components/modal/editedFormPopUp";
import Search from "../../components/search";
import DataTable from "../../components/table";
import { tableData } from "../../constants/table";
import { technicians } from "../../constants/technician";
import useModal from "../../functions/use-modal";
import useSearch from "../../functions/use-search";
import { DataTableProps } from "../../models/data-table";
import { DefaultPageContainer } from "../styles";
import ModalTecnico from "./modalTecnico";
import ViewTecnico from "./modalTecnico/viewTecnico";
import * as C from "./styles";

const Tecnicos = () => {
	const {
		openModal,
		hasEditedData,
		openConfirmCloseModal,
		handleOpenModal,
		handleCloseModal,
		onOpenChange,
		onConfirmCloseModal,
		setHasEditedData,
		setOpenConfirmCloseModal,
	} = useModal();

	const { searchTerm, handleSearchChange, filteredData } = useSearch(tableData);

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

const DataTableContainer = ({ data }: DataTableProps) => {
	const {
		openModal,
		hasEditedData,
		openConfirmCloseModal,
		onOpenChange,
		onConfirmCloseModal,
		setOpenConfirmCloseModal,
	} = useModal();

	return (
		<div className="table">
			<DataTable data={data} onOpenChange={onOpenChange} hasPagination />

			<EditedFormPopUp
				open={hasEditedData && openConfirmCloseModal}
				onOpenChange={() => setOpenConfirmCloseModal(!openConfirmCloseModal)}
				onConfirmCloseModal={onConfirmCloseModal}
			/>

			<Modal open={openModal} onOpenChange={onOpenChange} position={"right"}>
				<ViewTecnico data={technicians[0]} />
			</Modal>
		</div>
	);
};

export default Tecnicos;
