import { ChangeEvent } from "react";
import { FiPlus } from "react-icons/fi";
import Button from "../../components/form/button";
import Search from "../../components/search";
import DataTable from "../../components/table";
import { tableData } from "../../constants/table";
import useSearch from "../../functions/use-search";
import { DataTableProps } from "../../models/data-table";
import { DefaultPageContainer } from "../styles";
import * as C from "./styles";

const Fotovoltaico = () => {
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

const Header = ({ searchTerm, onSearchChange }: HeaderProps) => (
	<section>
		<div className="top-area">
			<h1>Fotovoltaico</h1>
			<Button buttonStyle="primary">
				<FiPlus size={16} />
				Criar Pedido
			</Button>
		</div>
		<Search
			placeholder="Procurar pedidos..."
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

export default Fotovoltaico;
