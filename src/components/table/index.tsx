import { Table, Theme } from "@radix-ui/themes";
import React, { useState } from "react";
import {
	FaAngleLeft,
	FaAngleRight,
	FaAnglesLeft,
	FaAnglesRight,
} from "react-icons/fa6";
import { DataTableProps } from "../../models/data-table";
import Dropdown from "../dropdown";
import { Modal } from "../modal";
import EditedFormPopUp from "../modal/editedFormPopUp";
import ModalPedido from "../modal/modalPedido";
import * as C from "./styles";

interface TableBodyProps {
	data: DataTableProps["data"];
}

interface PaginationProps {
	currentPage: number;
	itemsPerPage: number;
	totalItems: number;
	onPageChange: (newPage: number) => void;
	onItemsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DataTable = ({
	data,
	hasPagination,
	$itemsPerPage = 10,
	background = false,
}: DataTableProps) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState($itemsPerPage);

	const handleChangePage = (newPage: number) => {
		if (newPage > 0 && newPage <= Math.ceil(data.length / itemsPerPage)) {
			setCurrentPage(newPage);
		}
	};

	const handleItemsPerPageChange = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		setItemsPerPage(parseInt(e.target.value));
		setCurrentPage(1);
	};

	const paginatedData = data.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	return (
		<Theme>
			<C.Root variant="surface" $background={background}>
				<TableHeader />
				<TableBody data={paginatedData} />
			</C.Root>
			{hasPagination && (
				<Pagination
					currentPage={currentPage}
					itemsPerPage={itemsPerPage}
					totalItems={data.length}
					onPageChange={handleChangePage}
					onItemsPerPageChange={handleItemsPerPageChange}
				/>
			)}
		</Theme>
	);
};

const TableHeader = () => (
	<C.Header>
		<C.Row>
			<Table.ColumnHeaderCell>Endereço</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Pessoa</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Código</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Criado há</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell></Table.ColumnHeaderCell>
		</C.Row>
	</C.Header>
);

const TableBody: React.FC<TableBodyProps> = ({ data }) => (
	<C.Body>
		{data.map((item, index) => (
			<C.Row key={index}>
				<Table.RowHeaderCell>
					<div>
						<p>{item.address}</p>
						<p>{item.person}</p>
					</div>
				</Table.RowHeaderCell>
				<C.Cell>{item.person}</C.Cell>
				<C.Cell>{item.code}</C.Cell>
				<C.Cell>
					<C.Badge text={item.status}>{item.status}</C.Badge>
				</C.Cell>
				<C.Cell>{item.createdAt}</C.Cell>
				<Options />
			</C.Row>
		))}
	</C.Body>
);

const Pagination = ({
	currentPage = 1,
	itemsPerPage = 10,
	totalItems,
	onPageChange,
	onItemsPerPageChange,
}: PaginationProps) => {
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	return (
		<C.Pagination>
			<div className="pagination-left">
				Mostrando{" "}
				{Math.min(itemsPerPage, totalItems - (currentPage - 1) * itemsPerPage)}{" "}
				de {totalItems} pedidos
			</div>
			<div className="pagination-right">
				<div className="items-per-page">
					Pedidos por página
					<select value={itemsPerPage} onChange={onItemsPerPageChange}>
						<option value="5">5</option>
						<option value="10">10</option>
						<option value="15">15</option>
						<option value="20">20</option>
					</select>
				</div>
				<div className="pages">
					Página {currentPage} de {totalPages}
					<div className="pagination-buttons">
						<button onClick={() => onPageChange(1)}>
							<FaAnglesLeft />
						</button>
						<button onClick={() => onPageChange(currentPage - 1)}>
							<FaAngleLeft />
						</button>
						<button onClick={() => onPageChange(currentPage + 1)}>
							<FaAngleRight />
						</button>
						<button onClick={() => onPageChange(totalPages)}>
							<FaAnglesRight />
						</button>
					</div>
				</div>
			</div>
		</C.Pagination>
	);
};

const Options = () => {
	const [openModal, setOpenModal] = useState(false);
	const [hasEditedData, setHasEditedData] = useState(false);
	const [openConfirmCloseModal, setOpenConfirmCloseModal] = useState(false);

	const handleOpenModal = () => setOpenModal(true);

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
		<C.Cell>
			<div className="dropdown">
				<Dropdown handleOpenModal={handleOpenModal} />
			</div>

			<EditedFormPopUp
				open={hasEditedData && openConfirmCloseModal}
				onOpenChange={() => setOpenConfirmCloseModal(!openConfirmCloseModal)}
				onConfirmCloseModal={onConfirmCloseModal}
			/>
			<Modal open={openModal} onOpenChange={onOpenChange} position="center">
				<ModalPedido />
			</Modal>
		</C.Cell>
	);
};

export default DataTable;
