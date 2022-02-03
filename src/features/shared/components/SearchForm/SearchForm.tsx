import React from "react";
import { SearchContainer, SearchIcon, SearchInput } from "./SearchForm.styles";
import { BsSearch } from "react-icons/bs";

const SearchForm = () => {
	return (
		<SearchContainer>
			<SearchInput placeholder="Wyszukaj" />
			<SearchIcon>
				<BsSearch />
			</SearchIcon>
		</SearchContainer>
	);
};

export default SearchForm;
