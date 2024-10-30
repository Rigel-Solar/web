import { ChangeEvent, useState } from "react";
import { Modal } from "../../components/modal";
import Search from "../../components/search";
import DataTableBanho from "../../components/table/banho";
import useSearch from "../../functions/use-search";
import { IBanho } from "../../models/banho";
import { useFetch } from "../../services/hooks/useFetch";
import { DefaultPageContainer } from "../styles";
import ModalBanho from "./modalBanho";
import * as C from "./styles";

const Banho = () => {
	const [banhos, setBanhos] = useState<IBanho[]>([]);
	const [selectedBanho, setSelectedBanho] = useState<IBanho | null>(null);

	useFetch<IBanho[]>("/FichaBanho", ["banho"], {
		onSuccess: (data) => setBanhos(data),
		keepPreviousData: true,
		refetchOnWindowFocus: false,
	});
	
	console.log("banhos", banhos)
	const { searchTerm, handleSearchChange, filteredData } = useSearch(banhos);
	console.log("filteredData", filteredData)
	
	const handleOpenViewBanhoModal = (banho: IBanho) => {
		setSelectedBanho(banho);
	};

	const handleCloseModal = () => {
		setSelectedBanho(null);
	};

	return (
		<DefaultPageContainer>
			<C.Container>
				<Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
				<DataTableContainer
					data={filteredData}
					onOpenBanho={handleOpenViewBanhoModal}
				/>
			</C.Container>

			<Modal
				open={!!selectedBanho}
				onOpenChange={handleCloseModal}
				position="center"
			>
				{selectedBanho && <ModalBanho data={selectedBanho} />}
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
			<h1>Banhos</h1>
		</div>
		<Search
			placeholder="Procurar banhos..."
			value={searchTerm}
			onChange={onSearchChange}
		/>
	</section>
);

interface DataTableContainerProps {
	data: IBanho[];
	onOpenBanho: (banho: IBanho) => void;
}

const DataTableContainer = ({ data, onOpenBanho }: DataTableContainerProps) => {
	console.log(data);
	return (
		<div className="table">
			<DataTableBanho data={data} onOpenBanho={onOpenBanho} hasPagination />
		</div>
	);
};

export default Banho;
