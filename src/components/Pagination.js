import React from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 8px 12px;
  background-color: ${(props) => (props.active ? '#007bff' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#007bff')};
  border: 1px solid #007bff;
  border-radius: 4px;
  cursor: pointer;
`;

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PageButton key={i} active={i === currentPage} onClick={() => onPageChange(i)}>
          i
        </PageButton>
      );
    }
    return pageNumbers;
  };

  return (
    <PaginationWrapper>
      <PageButton disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        Previous
      </PageButton>

      {renderPageNumbers()}

      <PageButton disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
        Next
      </PageButton>
    </PaginationWrapper>
  );
};

export default Pagination;
