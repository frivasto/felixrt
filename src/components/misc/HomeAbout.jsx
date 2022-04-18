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
                                            <h3 className="mb-2">Félix Rivas</h3>
                                            <p className="lead-paragraph px-md-0 py-0 mb-0">
                                                For the past ten years I have created web and mobile apps and I have been involved in every part of the making process.
                                                I have always been obsessed with computers, graphics and creating metaphoric presentations using technology.
                                                Now I have a bachelor degree in Computer Science with a Multimedia specialization, and I've also studied Graphic Design for creating my drag persona. Oh, yes, I’m also a Drag Queen.
                                                Now It would be my pleasure to use my creativity to help anyone to create their dream product.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* See More */}
                     <div className="row text-right mt-5">
                        <div className="col-10 px-2 mx-auto">
                            <Link to="/About" className="badge float-right"><h3 className='text-danger'>See more →</h3></Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default HomeAbout;