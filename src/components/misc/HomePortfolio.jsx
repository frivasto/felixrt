import React from 'react'
import { Link } from "react-router-dom"


const HomePortfolio = () => {
    return (
        <React.Fragment>
            <section className="section portfolio">
                <div className="container-fluid">
                    {/* Main Description */}
                    <div className="row main-description py-5">
                        <div className="col-md-5 offset-md-1 col-sm-12 text-left">
                            <h2 className="mb-2 px-3 px-md-0">The Projects</h2>
                            <p className="px-3 px-md-0">
                                As a designer, I create based on my passion for visual arts and storytelling. 
                                I also have a strong technical background, as a frontend 
                                developer. I believe this combination helps me stay grounded when designing interfaces for humans.
                                Here are some the projects I enjoyed working on the most...
                            </p>
                        </div>
                    </div>
                     {/* ping pong photo descriptions */}
                     <div className="row ping-pong-photo">
                        <div className="col-10 offset-1">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-6 px-2 pr-md-5 mb-5 mb-md-0">
                                    <Link to='/Portfolio/Dalig'>
                                        <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/home/dalig.jpg'} 
                                                alt="Pentalogix Analytics"/>
                                    </Link>
                                </div>
                                <div className="col-12 col-md-6 ">
                                    <Link to='/Portfolio/Dalig'>
                                        <h2 className="mb-3 text-left px-1 px-md-2">DALIG</h2>
                                    </Link>
                                    <h6 className="mb-3 text-left tagline px-1 px-md-2">UI/UX DESIGN  · MOBILE<br/>BRAND DEVELOPMENT</h6>
                                    <p className="display lead-paragraph px-1 px-md-2 mb-5 mb-md-0">
                                        DALIG is a mobile app that allows athletes to create and participate in competitions, 
                                        then they can upload their scores; they will have leaderboards and a 
                                        global rank, depending on how they do in the competitions. 
                                    </p>
                                </div>
                            </div>
                            <div className="row align-items-center mt-5">
                                <div className="col-12 col-md-6 ">
                                    <Link to='/Portfolio/Pentalogix'>
                                        <h2 className="mb-3 text-left px-1 px-md-2">PentaLogix</h2>
                                    </Link>
                                    <h6 className="mb-3 text-left tagline px-1 px-md-2">UI/UX  DESIGN    ·    WEB    ·    MARKETING <br/> FRONTEND DEVELOPMENT    </h6>
                                    <p className="display lead-paragraph px-1 px-md-2 mb-5 mb-md-0">
                                        PentaLogix is a web shopping cart that allows customers to get customized quotes from
                                        different Printed Circuit Boards suppliers, and then buy them. 
                                    </p>
                                </div>
                                <div className="col-12 col-md-6 px-2 pl-md-5 mb-5 mb-md-0">
                                        <Link to='/Portfolio/Pentalogix'>
                                            <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/home/pentalogix.png'} 
                                                    alt="Pentalogix Analytics"/>
                                        </Link>
                                </div>
                            </div>
                            <div className="row align-items-center mt-5">
                                <div className="col-12 col-md-6 px-2 pr-md-5 mb-5 mb-md-0">
                                    <Link to='/Portfolio/ThisBrand'>
                                        <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/home/felixrt.jpg'} 
                                            alt="Pentalogix Analytics"/>
                                    </Link>
                                </div>
                                <div className="col-12 col-md-6 ">
                                    <Link to='/Portfolio/ThisBrand'>
                                        <h2 className="mb-3 text-left px-1 px-md-2">Felixrt-&lt;3</h2>
                                    </Link>
                                    <h6 className="mb-3 text-left tagline px-1 px-md-2">UI/UX DESIGN  · WEB <br/>BRAND DEVELOPMENT</h6>
                                    <p className="display lead-paragraph px-1 px-md-2 mb-5 mb-md-0">
                                        This is the story of how I created this brand; I mean my personal brand, 
                                        and the website you are reading this from.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* See More */}
                    <div className="row text-right mt-3">
                        <div className="col-10 px-2 mx-auto">
                            <Link to="/Portfolio" className="badge float-right"><h3 className='text-danger'>See more →</h3></Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default HomePortfolio;