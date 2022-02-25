import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

class Header extends React.Component {
    
    render(){
        return (
            <React.Fragment>
                <section className="hero-area bg-primary" id="parallax">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-11 mx-auto">
                                <h1 className="cover-text font-tertiary">
                                    Hi, I'm Félix<br/>
                                    A <span className="primary">FrontEnd</span> Developer<br/>
                                    & UX/UI <span className="secondary">Designer-</span>
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    My body is here
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul className="list-unstyled ml-5 mt-5 position-relative zindex-1">
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