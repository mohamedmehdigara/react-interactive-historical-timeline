// Example Search component
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  // Styles for the search container
`;

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
   onSearch && onSearch(query);
  };

  return (
    <SearchWrapper>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </SearchWrapper>
  );
};
export default Search