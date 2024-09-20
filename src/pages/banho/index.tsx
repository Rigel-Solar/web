import { ChangeEvent } from "react";
import { Modal } from "../../components/modal";
import EditedFormPopUp from "../../components/modal/editedFormPopUp";
import Search from "../../components/search";
import DataTable from "../../components/table";
import { banho } from "../../constants/banho";
import { tableData } from "../../constants/table";
import useModal from "../../functions/use-modal";
import useSearch from "../../functions/use-search";
import { DataTableProps } from "../../models/data-table";
import { DefaultPageContainer } from "../styles";
import ModalBanho from "./modalBanho";
import * as C from "./styles";

const Banho = () => {
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
	return (
		<section>
			<div className="top-area">
				<h1>Banho</h1>
			</div>
			<Search
				placeholder="Procurar pedidos..."
				value={searchTerm}
				onChange={onSearchChange}
			/>
		</section>
	);
};

const DataTableContainer = ({ data }: DataTableProps) => {
	const {
		openModal,
		hasEditedData,
		openConfirmCloseModal,
		onOpenChange,
		onConfirmCloseModal,
		setOpenConfirmCloseModal,
		handleCloseModal,
		setHasEditedData,
	} = useModal();

	return (
		<div className="table">
			<DataTable data={data} hasPagination onOpenChange={onOpenChange} />

			<EditedFormPopUp
				open={hasEditedData && openConfirmCloseModal}
				onOpenChange={() => setOpenConfirmCloseModal(!openConfirmCloseModal)}
				onConfirmCloseModal={onConfirmCloseModal}
			/>
			<Modal open={openModal} onOpenChange={onOpenChange} position="center">
				<ModalBanho
					data={banho}
					onClose={handleCloseModal}
					onSuccess={handleCloseModal}
					onSetEditedData={setHasEditedData}
				/>
			</Modal>
		</div>
	);
};

export default Banho;
