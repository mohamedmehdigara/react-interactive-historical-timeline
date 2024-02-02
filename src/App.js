import React from 'react';
import EventMarker from './components/EventMarker';
import EventDetails from './components/EventDetails';
import Timeline from './components/Timeline';
import Filter from './components/Filter';
import Search from './components/Search';
import Pagination from './components/Pagination';
import DatePicker from './components/DatePicker';

function App() {
  return (
    <div className="App">
      <EventDetails/>
      <EventMarker/>
      <Timeline/>
      <Filter/>
      <Search/>
      <Pagination/>
      <DatePicker/>
    </div>
  );
}

export default App;
