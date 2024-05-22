import React from "react";
import { useNavigate } from "react-router-dom";

const ViewBookings = (props) =>{
    const {booked} = props;
    const navigate = useNavigate()
    return(
        <div id='viewBooked'>
            <h1 id='bookedHead'>Booked View</h1>
            {booked.map((ele, idx) =>(
                <div id={`bookedCard${idx+1}`}>
                    <h3 id={`bookedName${idx+1}`}>{ele.name}</h3>
                    <p id={`bookedAge${idx+1}`}>Age: {ele.age}</p>
                    <p id={`bookedlocation${idx+1}`}>location: {ele.location}</p>
                    <p id={`bookedService${idx+1}`}>Service: {ele.service}</p>
                </div>
            ))}
            <button id='viewBack' onClick={() => navigate('/')}>Back</button>
        </div>
    )
}

export default ViewBookings;