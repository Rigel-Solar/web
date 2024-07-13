import { InputHTMLAttributes } from "react";
import { CiSearch } from "react-icons/ci";
import { Container, SearchInput } from "./styles";

export interface SearchInput extends InputHTMLAttributes<HTMLInputElement> {}

const Search = ({ ...rest }: SearchInput) => {
	return (
		<Container>
			<SearchInput type="search" {...rest} />
			<CiSearch size={20} />
		</Container>
	);
};

export default Search;
