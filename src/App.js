import './App.css';
import { Route, Routes } from 'react-router-dom';
import BookingForm from './BookingForm';
import Home from './Home';
import SuccessMessage from './SuccessMessage';
import { useState } from 'react';
import ViewBookings from './ViewBookings';

function App() {
  const [booked, setBooked] = useState([]);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bookingForm' element={<BookingForm setBooked={setBooked} />} />
        <Route path='/success' element={<SuccessMessage />} />
        <Route path='/viewBooked' element={<ViewBookings booked={booked} />} />
      </Routes>
    </div>
  );
}

export default App;
