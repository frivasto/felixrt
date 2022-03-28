import React from 'react'
import { Link } from "react-router-dom"

const HomeAbout = () => {
    return (
        <React.Fragment>
            <section className="section home-about my-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 px-sm-3 col-lg-7 offset-lg-5">
                            <p className="font-primary paragraph-lg text-dark">
                            My creative core is storytelling, but with
                            a <strong>&lt;strong&gt;</strong> technical background. With these skills, I believe I can 
                            help anyone create their dream <strong>User Interface (UI)</strong> with responsibility, 
                            equity and hard work.
                            </p>
                            <Link to="/About" className="badge bg-danger mt-4 float-right">more About me</Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default HomeAbout;