import React from 'react'
import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

class Header extends React.Component {

    render(){
        return (
            <React.Fragment>
                <section className="hero-area bg-primary position-relative">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-md-10 mx-auto text-center">
                                <h3 className="cover-text font-primary display mb-0">
                                    Hi, I'm Félix!
                                </h3>
                                <h6 className="cover-text font-secondary display">UI/UX <span className="primary">designer</span> &amp; <br/>
                                    Frontend<span className="secondary"> developer_</span>
                                </h6>
                                
                            </div>
                        </div>
                        <div className="row call-to-action">
                            <div className="col-12 mx-auto text-center">
                                <a href="#portfolio" className="dark btn btn-outline-secondary">TAKE A LOOK  ↓</a>
                            </div>
                        </div>
                    </div>

                    <ul className="list-unstyled mr-5 mt-5 position-absolute zindex-1 float-end networks">
                        <li className="mb-3">
                            <a className="text-white" href="https://www.linkedin.com/in/frivasto" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={brands('linkedin')} size="xs" />
                            </a>
                        </li>
                        <li className="mb-3">
                            <a className="text-white" href="https://instagram.com/frivasto" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={brands('instagram')} size="xs" />
                            </a>
                        </li>
                        <li className="mb-3">
                            <a className="text-white" href="https://twitter.com/frivasto" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={brands('twitter')} size="xs" />
                            </a>
                        </li>
                    </ul>
                </section>
            </React.Fragment>
        )
    }
}

export default Header;