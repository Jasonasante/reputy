import React from 'react'
import './Advert.css'
import SignUpForm from '../signUpForm/SignUpForm'

const Advert = ({setApplicant}) => {
    return (
        <div className="advert-container">
            <div className="sign-up">
                <h1>Land the dream <br></br> job by showing <br></br> your soft skills<br></br> credentials</h1>
                <h2> Create your <br></br> free talent wallet</h2>
                <SignUpForm setApplicant={setApplicant} />
                <div>
                    {/* Task 1.2  */}
                    <p>Already have an account? Log in</p>
                </div>
            </div>
        </div>
    )
}

export default Advert
