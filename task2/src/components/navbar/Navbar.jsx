import React from 'react'
import './Navbar.css'
import Reputy from '../../assets/reputy.png'

const navbar = () => {
    let items = ["Join Firesides", "Partner with us", "Team", "Blog"]
    return (
        <nav>
            <div className="logo">
                <img src={Reputy} alt="" />
            </div>
            {/* Task 1.2 */}
            <div className="nav-container">
                <ul>
                    {items.map(link => <li key={link} className="nav-item">{link}</li>)}
                </ul>
                <div className="nav-registration">
                    <button className="login btn">Log in</button>
                    <button className="btn-primary">Create account</button>
                </div>
            </div>
        </nav>
    )
}

export default navbar
