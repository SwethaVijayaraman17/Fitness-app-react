import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = (props) => {
    const {setBooked} = props;
    const navigate = useNavigate();
    const [state, setState] = useState({
        location: '',
        service: '',
        time: '',
        name: '',
        age: '',
        address: '',
    })
    const handleChange = (e) =>{
        setState({...state, [e.target.name]: e.target.value})
    }

    const handleSubmit = () =>{
        setBooked((prev) => [...prev, state])
        navigate('/success')
    }
    console.log(state);
    return (
        <>
        <h1 id='bookingHead'>Booking Form</h1>
        <form id='form'>
            <div>
                <label>Location</label>
                <select name="location" id='location' onChange={(e) => handleChange(e)}>
                    <option>Select location</option>
                    <option>Chennai</option>
                    <option>Trichy</option>
                    <option>Coimbatore</option>
                    <option>Madurai</option>
                    <option>Chengalpattu</option>
                </select>
                <label>Services</label>
                <select onChange={(e) => handleChange(e)} id="service" name='service'>
                    <option>Select service</option>
                    <option>CrossFit</option>
                    <option>flexibility</option>
                    <option>balance training</option>
                    <option>strength training</option>
                    <option>Aerobic fitness</option>
                </select>
                <label>Time</label>
                <input placeholder="Enter time" onChange={(e) => handleChange(e)} type='time' id='time' name='time' />
            </div>
            <div>
                <h3>Client Details</h3>
                <label>Name</label>
                <input placeholder="Enter name" name='name' id='name' onChange={(e) => handleChange(e)} />
                <label>Age</label>
                <input placeholder="Enter age" onChange={(e) => handleChange(e)} name='age' id='age' />
                <label>Address</label>
                <textarea placeholder="Enter address" onChange={(e) => handleChange(e)} name='address' id='address'></textarea>
            </div>
            <button id='submit' onClick={handleSubmit} type="button">Submit</button>
        </form>
        </>
    )
}

export default BookingForm;