import React, { useState } from 'react';
import styled from 'styled-components';
import EventMarker from './EventMarker';
import EventDetails from './EventDetails';

const TimelineWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow-x: auto;
`;

const EventsContainer = styled.div`
  display: flex;
  position: relative;
`;

const Timeline = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleMarkerClick = (event) => {
    setSelectedEvent(event);
  };

  const handleDetailsClose = () => {
    setSelectedEvent(null);
  };

  return (
    <TimelineWrapper>
      <EventsContainer>
        {/* Render event markers */}
        {events && events.map((event) => (
          <EventMarker
            key={event.id}
            date={event.date}
            title={event.title}
            onClick={() => handleMarkerClick(event)}
          />
        ))}
      </EventsContainer>

      {/* Render selected event details */}
      {selectedEvent && <EventDetails event={selectedEvent} onClose={handleDetailsClose} />}
    </TimelineWrapper>
  );
};

export default Timeline;
