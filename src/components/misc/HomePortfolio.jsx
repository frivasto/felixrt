import React from 'react'
import { Link } from "react-router-dom"

var Scroll   = require('react-scroll');
var Element  = Scroll.Element;



const HomePortfolio = () => {
    return (
        <React.Fragment>
            <Element name="HomePortfolio">
                <section className="section portfolio" id="portfolio">
                    <div className="container-fluid">
                        {/* Main Description */}
                        <div className="row main-description pb-4">
                            <div className="col-md-8 offset-md-1 col-12 text-left px-0">
                                
                                    <h2 className="mb-2 px-3 px-md-0">The Projects</h2>
                                    
                                <p className="px-3 px-md-0">
                                    As a designer, I create based on my passion for visual arts and storytelling. 
                                    I also have a strong technical background, as a frontend 
                                    developer. I believe this combination helps me stay grounded when designing interfaces for humans.
                                    Here are some projects I enjoyed working on the most...
                                </p>
                            </div>
                        </div>
                        {/* ping pong photo descriptions */}
                        <div className="row ping-pong-photo">
                            <div className="col-11 col-md-10 mx-auto">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-6 px-0 pr-md-4 mb-3 mb-md-0">
                                        <Link to='/Portfolio/Dalig'>
                                            <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/home/dalig2.jpg'} 
                                                    alt="Pentalogix Analytics"/>
                                        </Link>
                                    </div>
                                    <div className="col-12 col-md-6 px-0 pl-md-4">
                                        <Link to='/Portfolio/Dalig'>
                                            <h2 className="mb-3 text-left">DALIG</h2>
                                        </Link>
                                        <h6 className="mb-3 text-left tagline">UI/UX DESIGN ?? USER CENTERED DESIGN<br/>BRAND DEVELOPMENT ?? MOBILE</h6>
                                        <p className="lead-paragraph mb-5 mb-md-0">
                                            DALIG is a mobile app that allows athletes to create and participate in competitions, 
                                            then they can upload their scores; they will have leaderboards and a 
                                            global rank, depending on how they do in the competitions. 
                                        </p>
                                    </div>
                                </div>
                                <div className="row align-items-center mt-5">
                                    <div className="col-12 col-md-6 px-0 pr-md-4">
                                        <Link to='/Portfolio/ThisBrand'>
                                            <h2 className="mb-3 text-left">Felixrt-&lt;3</h2>
                                        </Link>
                                        <h6 className="mb-3 text-left tagline"> UI/UX DESIGN ?? DOUBLE DIAMOND DESIGN <br/>BRAND DEVELOPMENT ?? WEB</h6>
                                        <p className="lead-paragraph mb-3 mb-md-0">
                                            This is the story of how I created this brand; I mean my personal brand, 
                                            and the website you are reading this from.
                                        </p>
                                    </div>
                                    <div className="col-12 col-md-6 px-0 pl-md-4 mb-3 mb-md-0">
                                        <Link to='/Portfolio/ThisBrand'>
                                            <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/home/felixrt.jpg'} 
                                                    alt="Felix Rivas Brand"/>
                                            
                                        </Link>
                                    </div>
                                </div>
                                <div className="row align-items-center mt-5">
                                    <div className="col-12 col-md-6 px-0 pr-md-4 mb-3 mb-md-0">
                                        <Link to='/Portfolio/Pentalogix'>
                                            <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/home/pentalogix.png'} 
                                                        alt="Pentalogix Analytics"/>
                                        </Link>
                                    </div>
                                    <div className="col-12 col-md-6 px-0 pl-md-4 ">
                                        <Link to='/Portfolio/Pentalogix'>
                                            <h2 className="mb-3 text-left">PentaLogix</h2>
                                        </Link>
                                        <h6 className="mb-3 text-left tagline">UI/UX  DESIGN  ??  LEAN UX DESIGN<br/> WEB  ??  MARKETING  ??  FRONTEND DEVELOPMENT</h6>
                                        <p className="lead-paragraph mb-5 mb-md-0">
                                            PentaLogix is a web shopping cart that allows customers to get customized quotes from
                                            different PCB suppliers, and then buy them. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* See More */}
                        <div className="row text-right mt-3">
                            <div className="col-10 px-2 mx-auto">
                                <Link to="/Portfolio" className="badge float-right pr-0"><h4 className='text-danger'>All projects ???</h4></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Element>
        </React.Fragment>
    )
}

export default HomePortfolio;