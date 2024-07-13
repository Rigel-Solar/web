export interface DataTableProps {
	data: Array<{
		address: string;
		person: string;
		code: string;
		status: "Finalizado" | "Em andamento" | "Negada";
		createdAt: string;
		options: {
			text: string;
			route: string;
		};
	}>;
	$itemsPerPage?: number;
	hasPagination?: boolean;
	background?: boolean;
}
