import { Table, Theme } from "@radix-ui/themes";
import React, { useState } from "react";
import {
	FaAngleLeft,
	FaAngleRight,
	FaAnglesLeft,
	FaAnglesRight,
} from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";
import { Client } from "../../../models/client";
import Button from "../../form/button";
import * as C from "../styles";

interface TableBodyProps {
	data: Client[];
	onRowClick: (client: Client) => void;
}

export interface DataTableClienteProps {
	data: Client[];
	$itemsPerPage?: number;
	hasPagination?: boolean;
	background?: boolean;
	onRowClick: (client: Client) => void;
}

interface PaginationProps {
	currentPage: number;
	itemsPerPage: number;
	totalItems: number;
	onPageChange: (newPage: number) => void;
	onItemsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DataTableCliente = ({
	data,
	hasPagination,
	$itemsPerPage = 10,
	background = false,
	onRowClick,
}: DataTableClienteProps) => {
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
				<TableBody data={paginatedData} onRowClick={onRowClick} />
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
			<Table.ColumnHeaderCell>Cliente</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Tipo</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Código</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell></Table.ColumnHeaderCell>
		</C.Row>
	</C.Header>
);

const TableBody = ({ data, onRowClick }: TableBodyProps) => (
	<C.Body>
		{data.map((item) => (
			<C.Row key={item.id} onClick={() => onRowClick(item)}>
				<Table.RowHeaderCell>
					<div>
						<p>{item.nome}</p>
						<p>{item.email}</p>
					</div>
				</Table.RowHeaderCell>
				<C.Cell>{item.tipo}</C.Cell>
				<C.Cell>{item.id}</C.Cell>
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

interface OptionsProps {
	onOpenChange?: () => void;
}

const Options = ({ onOpenChange }: OptionsProps) => (
	<C.Cell>
		<div className="dropdown">
			<Button buttonStyle="text" onClick={onOpenChange}>
				<SlOptions size={10} />
			</Button>
		</div>
	</C.Cell>
);

export default DataTableCliente;
