import React from 'react'
import { Link } from "react-router-dom"

const HomeAbout = () => {
    return (
        <React.Fragment>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 px-sm-3 col-lg-8 offset-lg-4">
                            <p className="font-secondary paragraph-lg text-dark">
                                Hi, I'm Felixrt, and I'm a FrontEnd Developer and a 
                                UX/UI Designer with passion for creating fast, pretty and intuitive user experiences.
                                For the past ten years I have created Web and Mobile apps and I have been involved in 
                                every part of the making process.
                            </p>
                            <Link to="/About" className="badge bg-danger float-right">more About me</Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default HomeAbout;