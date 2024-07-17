/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useMemo, useState } from "react";

const useSearch = (data: any) => {
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

	const filterData = (data: any, term: string) => {
		const normalizedTerm = normalizeString(term);
		return data.filter((item: any) =>
			Object.values(item).some(
				(value) =>
					typeof value === "string" &&
					normalizeString(value).includes(normalizedTerm)
			)
		);
	};

	const filteredData = useMemo(
		() => filterData(data, searchTerm),
		[searchTerm, data]
	);

	return { searchTerm, handleSearchChange, filteredData };
};

export default useSearch;
