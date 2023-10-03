import React from 'react'
import './FormInput.css'
import EraseButton from '../eraseButton/EraseButton'

const FormInput = ({ type, id, label, value, setValue, err }) => {

  return (
    <div className="input-wrapper">
      <input type={type} name={id} id={id} value={value} onChange={e => setValue(e.target.value)} className={err ? "invalid":""} required />
      <span className="floating-label">{label}</span>
      <EraseButton value={setValue} />
    </div>
  )
}

export default FormInput
