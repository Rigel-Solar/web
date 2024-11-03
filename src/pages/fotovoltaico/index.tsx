import { ChangeEvent } from "react";
import Search from "../../components/search";
import DataTableFotovoltaico from "../../components/table/fotovoltaico";
import useSearch from "../../functions/use-search";
import { IFotovoltaico } from "../../models/fotovoltaico";
import { useFetch } from "../../services/hooks/useFetch";
import { DefaultPageContainer } from "../styles";
import * as C from "./styles";

const Fotovoltaico = () => {

	const { data: fotovoltaicos = []} = useFetch<IFotovoltaico[]>("/FichaFotovoltaico", ["fotovoltaico"], {
		staleTime: 1000 * 6 * 60,
		cacheTime: 1000 * 6 * 60,
		keepPreviousData: true,
		refetchOnWindowFocus: false,
	});

	const { searchTerm, handleSearchChange, filteredData } =
		useSearch(fotovoltaicos);

	return (
		<DefaultPageContainer>
			<C.Container>
				<Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
				<DataTableContainer
					data={filteredData}
					onOpenFotovoltaico={() => null}
				/>
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
			<h1>Fotovoltaicos</h1>
		</div>
		<Search
			placeholder="Procurar fotovoltaicos..."
			value={searchTerm}
			onChange={onSearchChange}
		/>
	</section>
);

interface DataTableContainerProps {
	data: IFotovoltaico[];
	onOpenFotovoltaico: (fotovoltaico: IFotovoltaico) => void;
}

const DataTableContainer = ({
	data,
	onOpenFotovoltaico,
}: DataTableContainerProps) => (
	<div className="table">
		<DataTableFotovoltaico
			data={data}
			onOpenFotovoltaico={onOpenFotovoltaico}
			hasPagination
		/>
	</div>
);

export default Fotovoltaico;
