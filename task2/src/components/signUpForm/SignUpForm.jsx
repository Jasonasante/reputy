import React, { useState } from 'react'
import './SignUpForm.css'
import FormInput from '../formInput/FormInput'
import Icon from '../../assets/Icon.png'

const SignUpForm = ({ setApplicant }) => {
    const [error, setError] = useState(false)
    const [displayValue, setDisplayValue] = useState("")
    const [emailValue, setEmailValue] = useState("")

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const handleOnSubmit = (evt) => {
        evt.preventDefault()
        const data = new FormData(evt.target);
        let values = Object.fromEntries(data.entries())
        if (!validateEmail(values.email)) {
            setError(true)
            setTimeout(() => {
                setError(false)
                setEmailValue("")
            }, 1000)

        } else {
            setApplicant(values["display-name"])
            setDisplayValue("")
            setEmailValue("")
            setError(false)
            setTimeout(() => {
                setApplicant("")
            }, 5000)
        }
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <FormInput type="text" id="display-name" label="Display Name" value={displayValue} setValue={setDisplayValue} err={false} />
            <FormInput type="text" id="email" label="Email Address" value={emailValue} setValue={setEmailValue} err={error} />
            {/* Task 1.2 */}
            <button type="submit" className="btn-primary"><img src={Icon} alt="" /> Sign up with email</button>
        </form>
    )
}

export default SignUpForm
