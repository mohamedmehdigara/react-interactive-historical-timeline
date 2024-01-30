import React from 'react';
import EventMarker from './components/EventMarker';
import EventDetails from './components/EventDetails';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <EventDetails/>
      <EventMarker/>
      <Timeline/>
    </div>
  );
}

export default App;
