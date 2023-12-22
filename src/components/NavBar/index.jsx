import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <header style={{borderBottom: '1px solid black', marginBottom: '10px'}}>
            <div className="container">
                <div style={{display: 'flex', justifyContent: 'space-between'}} className="header__inner">
                    <div className="logo">
                        logo
                    </div>
                    <nav>
                        <ul style={{display: 'flex', gap: '10px'}}>
                            <li><NavLink>Home</NavLink></li>
                            <li><NavLink to='/posts'>Posts</NavLink></li>
                            <li><NavLink>About us</NavLink></li>
                            <li><NavLink>Contact</NavLink></li>
                        </ul>
                    </nav>
                    <div className="header__button">
                        <button>Sign up</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
