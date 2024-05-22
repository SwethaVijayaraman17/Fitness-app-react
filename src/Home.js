import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div id='home'>
            <h1 id='homeHead'>Fitness Class Booking App</h1>
            <div>
                <button id='bookBtn' onClick={() => navigate('/bookingForm')}>Book Now</button>
                <button id='viewBtn' onClick={() => navigate('/viewBooked')}>View Bookings</button>
            </div>

        </div>
    )
}

export default Home;