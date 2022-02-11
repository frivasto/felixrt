import React from 'react'
import { Link } from "react-router-dom"

import './MenuBar.css'

const MenuBar = () => {
    return (
        <header className="navigation fixed-top">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link className="navbar-brand font-tertiary h3" to="/">
                    <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="Felixrt-" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
                    aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse text-center" id="navigation">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">about</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="Contact">Contact</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default MenuBar;