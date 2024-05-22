import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessMessage = () => {
    const navigate = useNavigate();
    return (
        <div id='successMsgDiv'>
            <div id='successDiv'>
                <h2 id='successMsg'>Success !!</h2>
                <p>You have booked successfully</p>
                <button id='backBtn' onClick={() => navigate('/')}>Back to home</button>
            </div>
        </div>
    )
}

export default SuccessMessage;