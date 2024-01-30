import React from 'react';
import styled from 'styled-components';

const DetailsModal = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;

  h2 {
    margin-bottom: 10px;
    color: #333;
  }

  p {
    color: #666;
    line-height: 1.4;
  }

  .image-container {
    max-width: 100%;
    margin-bottom: 10px;
    height: 150px; /* Set a fixed height or adjust as needed */
    background-size: cover;
    background-position: center;
    border-radius: 4px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 15px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const ImageContainer = styled.div`
  background-image: url(${(props) => props.imageUrl});
`;

const EventDetails = ({ event, onClose, title, description, date }) => {
  

  return (
    <DetailsModal>
      {/* Display detailed information about the event */}
      <h2>Title: {title}</h2>
      <p>Date: {date}</p>
      <p>Description: {description}</p>
      <button onClick={onClose}>Close</button>
    </DetailsModal>
  );
};

export default EventDetails;
