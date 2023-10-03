import React from 'react'
import './Phones.css'
import leftPhone from '../../assets/iphone-left.png'
import rightPhone from '../../assets/iphone-right.png'

const Phones = () => {
    return (
        <div className="images-container">
            <div className="images">
                <img src={rightPhone} alt="iphone-right" />
                <img src={leftPhone} alt="iphone-left" />
            </div>
        </div>
    )
}

export default Phones
