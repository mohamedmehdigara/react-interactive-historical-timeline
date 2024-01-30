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
`;

const StyledDatePicker = styled(DatePicker)`
  width: 200px;
  margin-bottom: 20px;
`;

const DatePickerComponent = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange && onDateChange(date); // Check if onDateChange is defined before calling it
  };

  return (
    <DatePickerWrapper>
      <StyledDatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MMMM d, yyyy"
        placeholderText="Select a date"
      />
    </DatePickerWrapper>
  );
};

export default DatePickerComponent;
