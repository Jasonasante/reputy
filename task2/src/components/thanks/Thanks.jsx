import React from 'react'
import './Thanks.css'
import Sent from '../../assets/sent.png'

const Thanks = ({applicant}) => {
    return (
        <div className="thanks-container">
            <div className="thanks-message">
                <img src={Sent} alt="" />
                <p id="thanks-message">
                Thanks for signing up, {applicant}! <br></br>Your Magic Link has been sent to your email`
                </p>
            </div>
        </div>
    )
}

export default Thanks
