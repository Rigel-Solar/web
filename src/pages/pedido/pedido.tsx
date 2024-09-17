import { ChangeEvent } from 'react';
import { FiPlus } from 'react-icons/fi';
import Button from '../../components/form/button/index.tsx';
import EditedFormPopUp from '../../components/modal/editedFormPopUp/index.tsx';
import { Modal } from '../../components/modal/index.tsx';
import Search from '../../components/search/index.tsx';
import DataTable from '../../components/table/index.tsx';
import { tableData } from '../../constants/table.ts';
import useModal from '../../functions/use-modal/index.ts';
import useSearch from '../../functions/use-search/index.tsx';
import { DataTableProps } from '../../models/data-table.ts';
import { orders } from '../../constants/orders.ts';
import { DefaultPageContainer } from '../styles.ts';
import * as C from './styles.ts';
import ViewPedido from './viewPedido/index.tsx';

const Pedido = () => {
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
			<h1>Pedidos</h1>
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
			<DataTable data={data} hasPagination onOpenChange={onOpenChange}/>

			<EditedFormPopUp
				open={hasEditedData && openConfirmCloseModal}
				onOpenChange={() => setOpenConfirmCloseModal(!openConfirmCloseModal)}
				onConfirmCloseModal={onConfirmCloseModal}
			/>

			<Modal open={openModal} onOpenChange={onOpenChange} position={'right'}>
				<ViewPedido data={orders[0]}/>
			</Modal>
		</div>
	);
};

export default Pedido;
