import React from 'react'
import Layout from '../../layout/Layout';

const About = () => {
    return (
        <React.Fragment>
            <Layout>
                <section className="page-title-alt bg-primary position-relative">
                    <div className="container">
                        <div className="row">
                        <div className="col-12">
                            <h1 className="text-white font-tertiary">About Me</h1>
                        </div>
                        </div>
                    </div>
                </section>
    
                <section className="section pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <p>
                                    Hi, I’m Felixrt, and I’m a FrontEnd Developer and a UX/UI Designer with passion for creating fast, 
                                    pretty and intuitive user experiences. For the past ten years I have created Web and Mobile apps
                                    and I have been involved in every part of the making process.
                                </p>
                                <p>
                                    I have always been obsessed with computers, graphics and creating metaphoric presentations 
                                    using technology.
                                    </p>
                                <p> 
                                    Now I have a Bachelor degree in Computer Science with a Multimedia specialization, 
                                    and I’ve also studied Graphic Design for creating my Drag persona. Oh, yes, I’m also a 
                                    Drag Queen.
                                    Now It would be my pleasure to use my creativity to help anyone to create their dream product.
                                 </p>
                            </div>
                            <div className="col-md-4 text-center drag-lg-top">
                                <div className="shadow-down mb-4">
                                <img src="images/about/author.jpg" 
                                     alt="author" 
                                     className="img-fluid w-100 rounded-lg border-thick border-white" />
                                </div>
                                <img src="images/about/signature.png" 
                                     alt="signature" 
                                     className="img-fluid" />
                                <h4>Félix Rivas</h4>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </React.Fragment>
    )
}

export default About;