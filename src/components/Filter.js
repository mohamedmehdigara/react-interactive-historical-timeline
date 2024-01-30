// Example Filter component
import React from 'react';
import styled from 'styled-components';

const FilterWrapper = styled.div`
  // Styles for the filter container
`;

const Filter = ({ categories, onFilterChange }) => {
  return (
    <FilterWrapper>
      {/* Render filter options dynamically */}
      {categories && categories.map((category) => (
        <label key={category}>
          <input type="checkbox" onChange={() => onFilterChange(category)} />
          category
        </label>
      ))}
    </FilterWrapper>
  );
};
export default Filter