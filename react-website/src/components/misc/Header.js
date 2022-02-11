import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <React.Fragment>
            <section className="hero-area bg-primary" id="parallax">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-11 mx-auto">
                            <h1 className="cover-text font-tertiary">
                                Hi, I'm Félix<br/>
                                A <span class="primary">FrontEnd</span> Developer<br/>
                                & UX/UI <span class="secondary">Designer-</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <ul className="list-unstyled ml-5 mt-5 position-relative zindex-1">
                    <li class="mb-3"><Link className="text-white" to="https://www.linkedin.com/in/frivasto"><i class="ti-linkedin"></i></Link></li>
                    <li class="mb-3"><Link className="text-white" to="https://instagram.com/frivasto"><i class="ti-instagram"></i></Link></li>
                    <li class="mb-3"><Link className="text-white" to="https://twitter.com/frivasto"><i class="ti-twitter"></i></Link></li>
                </ul>
            
            </section>
        </React.Fragment>
    )
}

export default Header;