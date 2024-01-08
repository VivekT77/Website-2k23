import React, { useState } from 'react'
import "../styles/navbar.css"
import clublogo from '../Assets/Icons/clubLogo.png'
import BurgermenuIcon from "../Assets/Icons/burgerMenuIcon.png"
import closeicon from "../Assets/Icons/closeIcon.png"
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [BurgerMenuvisibility, setBurgerMenuvisibility] = useState(false)

    function toggleBurgerMenu() {
        setBurgerMenuvisibility(!BurgerMenuvisibility)
    }

    return (<>
        <div id="navbar">
            <Link to={"/"}>
                <img src={clublogo} alt="club icon" />
            </Link>
            <div className='navlinks'>
                <Link to="/about" >About</Link>
                <Link to="/event" >Event</Link>
                <Link to="/gallery" >gallery</Link>
                <Link to="/team" >Team</Link>
                <Link to="#" className='joinBtn'>Join now</Link>
            </div>
            <div id='BurgerMenu'>
                <div className='BurgerIcon' onClick={toggleBurgerMenu}>
                    <img src={BurgermenuIcon} alt="options" srcset="" />
                </div>
            </div>
        </div>
        <div id='BurgerMenuLinks' style={{
            display: BurgerMenuvisibility ? "flex" : "none"
        }}>
            <div id="BurgerMenucloseicon" onClick={toggleBurgerMenu}>
                <img src={closeicon} alt='close' />
            </div>
            <span className='joinBtn'>Join now</span>
            <span>About</span>
            <span>Event</span>
            <span>gallery</span>
            <span>Team</span>
        </div>

    </>
    )
}
