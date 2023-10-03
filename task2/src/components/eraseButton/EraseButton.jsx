import React from 'react'
import './EraseButton.css'

const EraseButton = ({value}) => {
  return (
    <button type="button" onClick={()=>value("")}><span> &#10799;</span></button>
  )
}

export default EraseButton
