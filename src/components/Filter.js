import React from 'react';
import styled from 'styled-components';

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const FilterCheckbox = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;

  input {
    margin-right: 8px;
  }
`;

const Filter = ({ categories, selectedFilters, onFilterChange }) => {
  const handleCheckboxChange = (category) => {
    const updatedFilters = selectedFilters.includes(category)
      ? selectedFilters.filter((filter) => filter !== category)
      : [...selectedFilters, category];

    onFilterChange(updatedFilters);
  };

  return (
    <FilterWrapper>
      {/* Render filter options dynamically */}
      {categories && categories.map((category) => (
        <FilterCheckbox key={category}>
          <input
            type="checkbox"
            checked={selectedFilters.includes(category)}
            onChange={() => handleCheckboxChange(category)}
          />
          {category}
        </FilterCheckbox>
      ))}
    </FilterWrapper>
  );
};

export default Filter;
