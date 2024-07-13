import { ChangeEvent, useMemo, useState } from "react";
import { FiPlus } from "react-icons/fi";
import Button from "../../components/form/button";
import ModalTecnico from "../../components/modalTecnico";
import Search from "../../components/search";
import DataTable from "../../components/table";
import { tableData } from "../../constants/table";
import { DataTableProps } from "../../models/data-table";
import { DefaultPageContainer } from "../styles";
import * as C from "./styles";

const Tecnicos = () => {
	const [isModalOpen, setModalOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	const handleOpenModal = () => setModalOpen(true);
	const handleCloseModal = () => setModalOpen(false);
	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
		setSearchTerm(e.target.value);

	const filterData = (data: typeof tableData, term: string) => {
		const lowerCaseTerm = term.toLowerCase();
		return data.filter((item) =>
			Object.values(item).some(
				(value) =>
					typeof value === "string" &&
					value.toLowerCase().includes(lowerCaseTerm)
			)
		);
	};

	const filteredData = useMemo(
		() => filterData(tableData, searchTerm),
		[searchTerm]
	);

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
			{isModalOpen && (
				<ModalTecnico
					open={isModalOpen}
					onOpenChange={setModalOpen}
					onClose={handleCloseModal}
					onSuccess={handleCloseModal}
				/>
			)}
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

const DataTableContainer = ({ data }: DataTableProps) => (
	<div className="table">
		<DataTable data={data} hasPagination />
	</div>
);

export default Tecnicos;
