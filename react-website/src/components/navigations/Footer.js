import React from 'react'
import { Link } from "react-router-dom"

import './Footer.css'

const MenuBar = () => {
    return (
        <footer >
            <div className="footer">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>

                <ul className="social">
                    
                </ul>

                <p>&copy; Your Name/Company. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default MenuBar;