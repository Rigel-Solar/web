import { ChangeEvent, useState } from "react";
import { FiPlus } from "react-icons/fi";
import ModalClient from "../../components/createClient";
import Button from "../../components/form/button";
import { Modal } from "../../components/modal";
import EditedFormPopUp from "../../components/modal/editedFormPopUp";
import Search from "../../components/search";
import DataTable from "../../components/table";
import { tableData } from "../../constants/table";
import useSearch from "../../functions/use-search";
import { DataTableProps } from "../../models/data-table";
import { DefaultPageContainer } from "../styles";
import * as C from "./styles";

const Cliente = () => {
	const { searchTerm, handleSearchChange, filteredData } = useSearch(tableData);

	return (
		<DefaultPageContainer>
			<C.Container>
				<Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
				<DataTableContainer data={filteredData} />
			</C.Container>
		</DefaultPageContainer>
	);
};

interface HeaderProps {
	searchTerm: string;
	onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Header = ({ searchTerm, onSearchChange }: HeaderProps) => {
	const [openModal, setOpenModal] = useState(false);
	const [hasEditedData, setHasEditedData] = useState(false);
	const [openConfirmCloseModal, setOpenConfirmCloseModal] = useState(false);

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
		<section>
			<div className="top-area">
				<h1>Cliente</h1>
				<Button buttonStyle="primary" onClick={handleOpenModal}>
					<FiPlus size={16} />
					Cadastrar Cliente
				</Button>
			</div>
			<Search
				placeholder="Procurar cliente..."
				value={searchTerm}
				onChange={onSearchChange}
			/>
			<EditedFormPopUp
				open={hasEditedData && openConfirmCloseModal}
				onOpenChange={() => setOpenConfirmCloseModal(!openConfirmCloseModal)}
				onConfirmCloseModal={onConfirmCloseModal}
			/>
			<Modal open={openModal} onOpenChange={onOpenChange}>
				<ModalClient
					onClose={handleCloseModal}
					onSuccess={handleCloseModal}
					onSetEditedData={setHasEditedData}
				/>
			</Modal>
		</section>
	);
};

const DataTableContainer = ({ data }: DataTableProps) => (
	<div className="table">
		<DataTable data={data} modalType="cliente" hasPagination />
	</div>
);

export default Cliente;
