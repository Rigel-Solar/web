import { Table, Theme } from "@radix-ui/themes";
import { useState } from "react";
import {
	FaAngleLeft,
	FaAngleRight,
	FaAnglesLeft,
	FaAnglesRight,
} from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";
import { IFotovoltaico } from "../../../models/fotovoltaico";
import Button from "../../form/button";
import * as C from "../styles";

interface TableBodyProps {
	data: IFotovoltaico[];
	onOpenFotovoltaico: (fotovoltaico: IFotovoltaico) => void;
}

export interface DataTableFotovoltaicoProps {
	data: IFotovoltaico[];
	$itemsPerPage?: number;
	hasPagination?: boolean;
	background?: boolean;
	onOpenFotovoltaico: (fotovoltaico: IFotovoltaico) => void;
}

interface PaginationProps {
	currentPage: number;
	itemsPerPage: number;
	totalItems: number;
	onPageChange: (newPage: number) => void;
	onItemsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DataTableFotovoltaico = ({
	data,
	hasPagination,
	$itemsPerPage = 10,
	background = false,
	onOpenFotovoltaico,
}: DataTableFotovoltaicoProps) => {
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
				<TableBody
					data={paginatedData}
					onOpenFotovoltaico={onOpenFotovoltaico}
				/>
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
			<Table.ColumnHeaderCell />
		</C.Row>
	</C.Header>
);

const TableBody = ({ data, onOpenFotovoltaico }: TableBodyProps) => {
	return (
		<C.Body>
			{data.map((item, index) => (
				<C.Row key={index} onClick={() => onOpenFotovoltaico(item)}>
					<Table.RowHeaderCell>
						<div>
							<p>{item.vistoriaDTO.clienteDTO.endereco}</p>
							<p>{item.vistoriaDTO.clienteDTO.email}</p>
						</div>
					</Table.RowHeaderCell>
					<C.Cell>{item.vistoriaDTO.clienteDTO.tipo}</C.Cell>
					<C.Cell>{item.vistoriaDTO.idCliente}</C.Cell>
					<C.Cell>(Não há)</C.Cell>
					<C.Cell>(Não há)</C.Cell>
					<Options />
				</C.Row>
			))}
		</C.Body>
	);
};

const Pagination = ({
	currentPage,
	itemsPerPage,
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
				de {totalItems} registros
			</div>
			<div className="pagination-right">
				<div className="items-per-page">
					Registros por página
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

const Options = () => (
	<C.Cell>
		<div className="dropdown">
			<Button buttonStyle="text">
				<SlOptions size={10} />
			</Button>
		</div>
	</C.Cell>
);

export default DataTableFotovoltaico;
