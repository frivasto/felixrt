import React from 'react'
import Layout from '../../layout/Layout'


class Kerubines extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Layout currentPage="Portfolio">
                    <section className="page-title bg-primary position-relative">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h1 className="text-white font-tertiary">Kerubines.com</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-7 text-center mx-auto my-5">
                                    <h2 className="section-title">Case of Study</h2>
                                    <p className="font-secondary paragraph-lg text-dark">
                                        Hi, I'm Felixrt, and I'm a FrontEnd Developer and a 
                                        UX/UI Designer with passion for creating fast, pretty and intuitive user experiences.
                                        For the past ten years I have created Web and Mobile apps and I have been involved in 
                                        every part of the making process.
                                    </p>
                                </div>
                                <div className="col-12 text-center my-5">
                                    <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/BDG4.jpg'} alt="BDG4" />
                                </div>

                                <div className="col-sm-12 px-sm-3 col-lg-7 offset-lg-5 my-5">
                                    <p className="font-secondary paragraph-lg text-dark">
                                        Hi, I'm Felixrt, and I'm a FrontEnd Developer and a 
                                        UX/UI Designer with passion for creating fast, pretty and intuitive user experiences.
                                        For the past ten years I have created Web and Mobile apps and I have been involved in 
                                        every part of the making process.
                                    </p>
                                    
                                </div>
                                <div className="col-sm-12 px-sm-3 col-lg-7 my-5">
                                    <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/BDG5.jpg'} alt="BDG5"/>
                                </div>

                                <div className="col-sm-12 px-sm-3 col-lg-7 offset-lg-5 my-5">
                                    <p className="font-secondary paragraph-lg text-dark">
                                        Hi, I'm Felixrt, and I'm a FrontEnd Developer and a 
                                        UX/UI Designer with passion for creating fast, pretty and intuitive user experiences.
                                        For the past ten years I have created Web and Mobile apps and I have been involved in 
                                        every part of the making process.
                                    </p>
                                    
                                </div>
                                <div className="col-sm-12 px-sm-3 col-lg-7 my-5">
                                    <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/BDG5.jpg'} alt="BDG5"/>
                                </div>
                                <div className="col-sm-12 px-sm-3 col-lg-7 offset-lg-5 my-5">
                                    <p className="font-secondary paragraph-lg text-dark">
                                        Hi, I'm Felixrt, and I'm a FrontEnd Developer and a 
                                        UX/UI Designer with passion for creating fast, pretty and intuitive user experiences.
                                        For the past ten years I have created Web and Mobile apps and I have been involved in 
                                        every part of the making process.
                                    </p>
                                    
                                </div>
                                <div className="col-sm-12 px-sm-3 col-lg-7 my-5">
                                    <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/BDG5.jpg'} alt="BDG5"/>
                                </div>
                                <div className="col-7 text-center mx-auto my-5">
                                    <p className="font-secondary paragraph-lg text-dark">
                                        Hi, I'm Felixrt, and I'm a FrontEnd Developer and a 
                                        UX/UI Designer with passion for creating fast, pretty and intuitive user experiences.
                                        For the past ten years I have created Web and Mobile apps and I have been involved in 
                                        every part of the making process.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </Layout>
            </React.Fragment>
        )
    }
}
export default Kerubines;