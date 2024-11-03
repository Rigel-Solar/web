import { ChangeEvent, useState } from "react";
import { FiPlus } from "react-icons/fi";
import Button from "../../components/form/button";
import { Modal } from "../../components/modal";
import AddNewOrder from "../../components/modal/addNewOrder";
import Search from "../../components/search";
import DataTablePedido from "../../components/table/pedido";
import useModal from "../../functions/use-modal";
import useSearch from "../../functions/use-search";
import { PedidoTS } from "../../models/pedido";
import { useFetch } from "../../services/hooks/useFetch";
import { DefaultPageContainer } from "../styles";
import * as C from "./styles";
import ViewPedido from "./viewPedido";

const Pedidos = () => {
	const [selectedPedido, setSelectedPedido] = useState<PedidoTS | null>(null);
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

	const { setHasEditedData } = useModal();

	const {data: pedidos = []} = useFetch<PedidoTS[]>("/Vistoria/getAll", ["vistoria"], {
		staleTime: 1000 * 6 * 60,
		cacheTime: 1000 * 6 * 60,
		keepPreviousData: true,
		refetchOnWindowFocus: false,
	});

	const { searchTerm, handleSearchChange, filteredData } = useSearch(pedidos);

	const handleOpenCreateModal = () => {
		setIsCreateModalOpen(true);
		setSelectedPedido(null);
	};

	const handleOpenViewPedidoModal = (pedido: PedidoTS) => {
		setSelectedPedido(pedido);
		setIsCreateModalOpen(false);
	};

	const handleCloseModal = () => {
		setIsCreateModalOpen(false);
		setSelectedPedido(null);
	};

	return (
		<DefaultPageContainer>
			<C.Container>
				<Header
					onOpenModal={handleOpenCreateModal}
					searchTerm={searchTerm}
					onSearchChange={handleSearchChange}
				/>
				<DataTableContainer
					data={filteredData}
					onOpenPedido={handleOpenViewPedidoModal}
				/>
			</C.Container>

			{/* Modal de Criação */}
			<Modal open={isCreateModalOpen} onOpenChange={handleCloseModal}>
				<AddNewOrder
					onClose={handleCloseModal}
					onSuccess={handleCloseModal}
					onSetEditedData={setHasEditedData}
				/>
			</Modal>

			{/* Modal de Visualização */}
			<Modal
				open={!!selectedPedido}
				onOpenChange={handleCloseModal}
				position="right"
			>
				{selectedPedido && <ViewPedido data={selectedPedido} />}
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
			<h1>Pedidos</h1>
			<Button buttonStyle="primary" onClick={onOpenModal}>
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

interface DataTableContainerProps {
	data: PedidoTS[];
	onOpenPedido: (pedido: PedidoTS) => void;
}

const DataTableContainer = ({
	data,
	onOpenPedido,
}: DataTableContainerProps) => (
	<div className="table">
		<DataTablePedido data={data} onOpenPedido={onOpenPedido} hasPagination />
	</div>
);

export default Pedidos;
