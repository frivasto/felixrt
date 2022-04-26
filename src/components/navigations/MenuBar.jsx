import React from 'react'
import { Link } from "react-router-dom"

class MenuBar extends React.Component{
    render(){
        return (
            <header className="navigation fixed-top nav-bg">
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
                            <li className={'nav-item ' + (this.props.currentPage === 'Home' ? 'active'  : '' ) }>
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className={'nav-item ' + (this.props.currentPage === 'about' ? 'active'  : '' ) }>
                                <Link className="nav-link" to="/About">about</Link>
                            </li>
                            <li className={'nav-item ' + (this.props.currentPage === 'Portfolio' ? 'active'  : '' ) }>
                                <Link className="nav-link" to="/Portfolio">Portfolio</Link>
                            </li>
                            <li className={'nav-item ' + (this.props.currentPage === 'Contact' ? 'active'  : '' ) }>
                                <Link className="nav-link" to="/Contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default MenuBar;