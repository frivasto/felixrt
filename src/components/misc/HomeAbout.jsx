import React from 'react'
import { Link } from "react-router-dom"

const HomeAbout = () => {
    return (
        <React.Fragment>
           <section className="section home-about odd">
                <div className="container-fluid">
                    {/* Main Description */}
                    <div className="row main-description">
                        <div className="col-10 mx-auto text-md-right text-center">
                            <h2 className="mb-3 px-3 px-md-0">The Human</h2>
                            <div className="row">
                                <div className="col-md-5 col-12 offset-md-1 pl-md-5 pt-md-5 mt-md-5 pt-2 mt-2">
                                    <img className="about-img" src={ process.env.PUBLIC_URL + '/images/about/drag.jpg'} 
                                            alt="About Drag"/>
                                </div>
                                <div className="col-md-3 col-12 pl-md-3 pt-md-3 mt-md-3 pt-2">
                                    <img className="about-img" src={ process.env.PUBLIC_URL + '/images/about/friendship.jpg'} 
                                            alt="About Friendship"/>

                                </div>
                                <div className="col-md-3 col-12 pt-2 ">
                                    <img className="about-img" src={ process.env.PUBLIC_URL + '/images/about/crossfit.jpg'} 
                                            alt="About CrossFit"/>

                                </div>
                            </div>
                            <div className="row align-items-end">
                                <div className="col-md-5 pl-md-2 pt-md-2 col-12 mt-2">
                                    <img className="about-img" src={ process.env.PUBLIC_URL + '/images/about/felix2.jpg'} 
                                            alt="About Felix"/>

                                </div>
                                <div className="col-md-7">
                                    <div className="row centred-description-important">
                                        <div className="col-12 mx-auto col-md-12 mx-md-0 text-left mt-4">
                                            <h3 className="mb-2">F??lix Rivas</h3>
                                            <p className="lead-paragraph px-md-0 py-0 mb-0">
                                                For the past 10 years, I have worked creating pretty and responsive web pages 
                                                and applications. I've been involved in every step of the making process, 
                                                trying to always put the user's needs first and make it accessible to anyone.<br/>
                                                But I've been obsessed with technology, visual arts and storytelling from a very young age;
                                                and since then, I haven't stopped studying those fields, 
                                                on the technical side, and more recently, on the visual one.
                                                Now it would be my pleasure to use my experience and creativity to help anyone to create their 
                                                dream product.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* See More */}
                     <div className="row text-right mt-4">
                        <div className="col-10 mx-auto">
                            <Link to="/About" className="badge float-right pr-0"><h4 className='text-success'>See more ???</h4></Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default HomeAbout;