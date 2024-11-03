/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useMemo, useState } from "react";

const useSearch = (data: any[]) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const normalizeString = (str: string) => {
		return str
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.toLowerCase();
	};

	const filterData = (data: any[], term: string): any[] => {
		if (!Array.isArray(data)) return []; // Certifique-se de que data é um array

		const normalizedTerm = normalizeString(term);

		const checkValue = (value: any): boolean => {
			if (typeof value === "string") {
				return normalizeString(value).includes(normalizedTerm);
			} else if (Array.isArray(value)) {
				return value.some(checkValue);
			} else if (typeof value === "object" && value !== null) {
				if (value.vistoriaDTO) {
					return (
						checkValue(value.vistoriaDTO) ||
						(value.vistoriaDTO.clienteDTO &&
							checkValue(value.vistoriaDTO.clienteDTO))
					);
				}
				return Object.values(value).some(checkValue);
			}
			return false;
		};

		return data.filter((item) =>
			Object.values(item).some((value) => checkValue(value))
		);
	};

	const filteredData = useMemo(
		() => filterData(data, searchTerm),
		[searchTerm, data]
	);

	return { searchTerm, handleSearchChange, filteredData };
};

export default useSearch;
