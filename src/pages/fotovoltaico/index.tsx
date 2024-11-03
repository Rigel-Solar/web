import { ChangeEvent, useState } from "react";
import { Modal } from "../../components/modal";
import Search from "../../components/search";
import DataTableFotovoltaico from "../../components/table/fotovoltaico";
import { Fotovoltaicos } from "../../constants/fotovoltaico";
import useSearch from "../../functions/use-search";
import { IFotovoltaico } from "../../models/fotovoltaico";
import { DefaultPageContainer } from "../styles";
import ModalFotovoltaico from "./modalFotovoltaico";
import * as C from "./styles";

const Fotovoltaico = () => {
	const [selectedFotovoltaico, setSelectedFotovoltaico] = useState<IFotovoltaico | null>(null);

	// const { data: fotovoltaicos = []} = useFetch<IFotovoltaico[]>("/FichaFotovoltaico", ["fotovoltaico"], {
	// 	staleTime: 1000 * 6 * 60,
	// 	cacheTime: 1000 * 6 * 60,
	// 	keepPreviousData: true,
	// 	refetchOnWindowFocus: false,
	// });

	const { searchTerm, handleSearchChange, filteredData } =
		useSearch(Fotovoltaicos);	

		const handleOpenViewBanhoModal = (fotovoltaico: IFotovoltaico) => {
			setSelectedFotovoltaico(fotovoltaico);
		};
	
		const handleCloseModal = () => {
			setSelectedFotovoltaico(null);
		};

	return (
		<DefaultPageContainer>
			<C.Container>
				<Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
				<DataTableContainer
					data={filteredData}
					onOpenFotovoltaico={handleOpenViewBanhoModal}
				/>
			</C.Container>

			<Modal
				open={!!selectedFotovoltaico}
				onOpenChange={handleCloseModal}
				position="center"
			>
				{selectedFotovoltaico && <ModalFotovoltaico data={selectedFotovoltaico} />}
			</Modal>
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
