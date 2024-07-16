import { act, renderHook } from "@testing-library/react-hooks";
import { ChangeEvent } from "react";
import useSearch from "./index";

describe("useSearch", () => {
	const data = [
		{ name: "John Doe", profession: "Developer" },
		{ name: "Jane Smith", profession: "Designer" },
		{ name: "José Gómez", profession: "Developer" },
	];

	afterEach(() => {
		jest.clearAllMocks();
		jest.useRealTimers();
	});

	it("should initialize with empty searchTerm and return all data", () => {
		const { result } = renderHook(() => useSearch(data));

		expect(result.current.searchTerm).toBe("");
		expect(result.current.filteredData).toEqual(data);
	});

	it("should update searchTerm on handleSearchChange and filter data", () => {
		const { result } = renderHook(() => useSearch(data));
		const event = {
			target: { value: "Jane" },
		} as ChangeEvent<HTMLInputElement>;

		act(() => {
			result.current.handleSearchChange(event);
		});

		expect(result.current.searchTerm).toBe("Jane");
		expect(result.current.filteredData).toEqual([
			{ name: "Jane Smith", profession: "Designer" },
		]);
	});

	it("should normalize and filter data based on searchTerm", () => {
		const { result } = renderHook(() => useSearch(data));
		const event = {
			target: { value: "José" },
		} as ChangeEvent<HTMLInputElement>;

		act(() => {
			result.current.handleSearchChange(event);
		});

		expect(result.current.searchTerm).toBe("José");
		expect(result.current.filteredData).toEqual([
			{ name: "José Gómez", profession: "Developer" },
		]);
	});

	it("should handle special characters and accents correctly", () => {
		const { result } = renderHook(() => useSearch(data));
		const event = {
			target: { value: "Jose" },
		} as ChangeEvent<HTMLInputElement>;

		act(() => {
			result.current.handleSearchChange(event);
		});

		expect(result.current.searchTerm).toBe("Jose");
		expect(result.current.filteredData).toEqual([
			{ name: "José Gómez", profession: "Developer" },
		]);
	});
});
