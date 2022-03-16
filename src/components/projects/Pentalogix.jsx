import React from 'react'
import Layout from '../../layout/Layout'


class Pentalogix extends React.Component{



    
    
    render(){
        return (
            <React.Fragment>
                <Layout currentPage="Portfolio">
                    <section className="page-title bg-primary position-relative">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h1 className="text-white font-tertiary">PentaLogix</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-7 text-center mx-auto my-5">
                                    <h2 className="section-title">This website...</h2>
                                    <p className="font-secondary paragraph-lg text-dark">
                                        This site was my home on and off for several Years&amp;Years. In this Case of Study
                                        I'll tell you how I brought an static Website into a modern 
                                        semantic Web Application, integrated with Google Analytics and
                                        powered by SEO and SEM to boost its performance.
                                    </p>
                                </div>
                                <div className="col-12 text-center my-3">
                                    <a href="https://www.pentalogix.com/t/software-products" target="_blank" rel="noreferrer">
                                        <img className="portfolio-img shadowed" src={ process.env.PUBLIC_URL + '/images/portfolio/pentalogix/products.jpg'} alt="Pentalogix Products" />
                                    </a>
                                </div>
                                
                                <div className="col-sm-12 px-sm-3 col-lg-7 offset-lg-5 my-5">
                                    <p className="font-secondary paragraph-lg text-dark">
                                        The heart of PentaLogix are its CAD Software Products, 
                                        specially its star product
                                        "Viewmate" which is popular among PCB designers. 
                                        But Agustin, the owner, wanted
                                        to transform PL to not just be a PCB Software company,
                                        but also a PCB seller. So we designed
                                        a PCB Manufacturing product page and started tracking
                                        how people were searching to get to our pages.
                                    </p>
                                    
                                </div>
                                <div className="col-sm-12 px-sm-3 col-lg-7 my-3">
                                    <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/pentalogix/analytics.png'} alt="Pentalogix Analytics"/>
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
export default Pentalogix;