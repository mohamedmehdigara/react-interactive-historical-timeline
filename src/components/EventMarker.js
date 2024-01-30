import React from 'react';
import styled from 'styled-components';

const Marker = styled.div`
  background-color: #007bff;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  p {
    margin: 0;
    font-size: 14px;
  }
`;

const EventMarker = ({ date, title, onClick }) => {
  return (
    <Marker onClick={onClick}>
      {/* Display date and title */}
      <p>{date}</p>
      <p>{title}</p>
    </Marker>
  );
};

export default EventMarker;
