import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
  font-size: 16px;
`;

const DatePickerComponent = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange && onDateChange(date); // Check if onDateChange is defined before calling it
  };

  return (
    <DatePickerWrapper>
      <h2>Select a Date</h2>
      <StyledDatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MMMM d, yyyy"
        placeholderText="Click to select a date"
        showYearDropdown
        yearDropdownItemNumber={15}
        scrollableYearDropdown
        popperPlacement="auto"
        popperModifiers={{
          offset: {
            enabled: true,
            offset: '-20px, 10px',
          },
        }}
      />
      {selectedDate && (
        <p>
          You selected: {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      )}
    </DatePickerWrapper>
  );
};

export default DatePickerComponent;
