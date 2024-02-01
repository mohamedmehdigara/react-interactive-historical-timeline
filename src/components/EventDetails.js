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
    overflow: hidden;
  }

  .svg-image {
    width: 100%;
    height: 100%;
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

const EventDetails = ({ event, onClose }) => {
  const { title, date, description, imageUrl, link } = event;

  return (
    <DetailsModal>
      {/* Display detailed information about the event */}
      <div className="image-container">
        {imageUrl ? (
          <img className="svg-image" src={imageUrl} alt={`Event: ${title}`} />
        ) : (
          <svg
            className="svg-image"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#666"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <circle cx="12" cy="12" r="8" fill="#ccc" />
            <path d="M10 3h4v18h-4z" fill="#666" />
          </svg>
        )}
      </div>

      <h2>Title: {title}</h2>
      <p>Date: {date}</p>
      <p>Description: {description}</p>

      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
      )}

      <button onClick={onClose}>Close</button>
    </DetailsModal>
  );
};

export default EventDetails;
