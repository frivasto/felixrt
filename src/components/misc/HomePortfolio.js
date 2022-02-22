import React from 'react'
import { Link } from "react-router-dom"

const HomePortfolio = () => {
    return (
        <React.Fragment>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="section-title">Portfolio</h2>
                        </div>
                    </div>
                    <div className="row shuffle-wrapper">
                        <div className="col-lg-4 col-6 mb-4 shuffle-item">
                            <div className="position-relative rounded hover-wrapper">
                                <img src="images/portfolio/item-1.png" alt="Project 1" className="img-fluid rounded w-100" />
                                <div className="hover-overlay">
                                    <div className="hover-content">
                                    <Link className="btn btn-light btn-sm" to="/Portfolio">view project</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4 shuffle-item">
                            <div className="position-relative rounded hover-wrapper">
                                <img src="images/portfolio/item-2.png" alt="Project 2" className="img-fluid rounded w-100" />
                                <div className="hover-overlay">
                                    <div className="hover-content">
                                        <Link className="btn btn-light btn-sm" to="/Portfolio">view project</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4 shuffle-item">
                            <div className="position-relative rounded hover-wrapper">
                                <img src="images/portfolio/item-3.png" alt="Project 3" className="img-fluid rounded w-100" />
                                <div className="hover-overlay">
                                    <div className="hover-content">
                                        <Link className="btn btn-light btn-sm" to="/Portfolio">view project</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4 shuffle-item">
                            <div className="position-relative rounded hover-wrapper">
                                <img src="images/portfolio/item-4.png" alt="Project 4" className="img-fluid rounded w-100" />
                                <div className="hover-overlay">
                                    <div className="hover-content">
                                        <Link className="btn btn-light btn-sm" to="/Portfolio">view project</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4 shuffle-item">
                            <div className="position-relative rounded hover-wrapper">
                                <img src="images/portfolio/item-5.png" alt="Proeject 5" className="img-fluid rounded w-100" />
                                <div className="hover-overlay">
                                    <div className="hover-content">
                                        <Link className="btn btn-light btn-sm" to="/Portfolio">view project</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
        </React.Fragment>
    )
}

export default HomePortfolio;