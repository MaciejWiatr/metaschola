import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { SearchContainer, SearchIcon, SearchInput } from './SearchForm.styles';

function SearchForm() {
  return (
    <SearchContainer>
      <SearchInput placeholder="Wyszukaj" />
      <SearchIcon>
        <BsSearch />
      </SearchIcon>
    </SearchContainer>
  );
}

export default SearchForm;
