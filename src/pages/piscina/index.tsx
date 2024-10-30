import { ChangeEvent, useState } from "react";
import { Modal } from "../../components/modal";
import Search from "../../components/search";
import DataTablePiscina from "../../components/table/piscina";
import useSearch from "../../functions/use-search";
import { IPiscina } from "../../models/piscina";
import { useFetch } from "../../services/hooks/useFetch";
import { DefaultPageContainer } from "../styles";
import ModalPiscina from "./modalPiscina";
import * as C from "./styles";

const Piscina = () => {
	const [piscinas, setPiscinas] = useState<IPiscina[]>([]);
	const [selectedPiscina, setSelectedPiscina] = useState<IPiscina | null>(null);

	useFetch<IPiscina[]>("/FichaPiscina", ["piscina"], {
		onSuccess: (data) => setPiscinas(data),
		keepPreviousData: true,
		refetchOnWindowFocus: false,
	});

	const { searchTerm, handleSearchChange, filteredData } = useSearch(piscinas);

	const handleOpenViewPiscinaModal = (piscina: IPiscina) => {
		setSelectedPiscina(piscina);
	};

	const handleCloseModal = () => {
		setSelectedPiscina(null);
	};

	return (
		<DefaultPageContainer>
			<C.Container>
				<Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
				<DataTableContainer
					data={filteredData}
					onOpenPiscina={handleOpenViewPiscinaModal}
				/>
			</C.Container>

			{/* Modal de Visualização */}
			<Modal
				open={!!selectedPiscina}
				onOpenChange={handleCloseModal}
				position="center"
			>
				{selectedPiscina && <ModalPiscina data={selectedPiscina} />}
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
			<h1>Piscinas</h1>
		</div>
		<Search
			placeholder="Procurar piscinas..."
			value={searchTerm}
			onChange={onSearchChange}
		/>
	</section>
);

interface DataTableContainerProps {
	data: IPiscina[];
	onOpenPiscina: (piscina: IPiscina) => void;
}

const DataTableContainer = ({
	data,
	onOpenPiscina,
}: DataTableContainerProps) => (
	<div className="table">
		<DataTablePiscina data={data} onOpenPiscina={onOpenPiscina} hasPagination />
	</div>
);

export default Piscina;
