import React from 'react'
import Layout from '../../layout/Layout'


class Pentalogix extends React.Component{

    componentDidMount() {
        document.title = "Felixrt- PentaLogix "; 
    }
    
    render(){
        return (
            <React.Fragment>
                <Layout currentPage="Portfolio">
                    <div className="portfolio pentalogix">
                        <section className="section">
                            <div className="container-fluid">
                                 {/* Main Description */}
                                 <div className="row mt-5 mb-0">
                                    <div className="col-md-10 col-11 mx-auto text-left">
                                        <h1 className="font-tertiary">PentaLogix</h1>
                                    </div>
                                </div>
                                 <div className="row main-description pb-5">
                                    <div className="col-md-8 offset-md-1 col-sm-12 text-left">
                                        <h2 className="mb-2 px-3 px-md-0">Case of study</h2>
                                        <p className="px-3 px-md-0">
                                            I used the Lean UX design framework to transform Pentalogix's static web page into a modern 
                                            semantic web application, with an automatic customer/supplier quoting interface, and an integration with 
                                            web marketing tools like Google Analytics, Adsense and MailChimp-then-SendInBlue.
                                        </p>
                                    </div>
                                </div>
                                 {/* Centred picture */}
                                <div className="row py-5 centred-image odd">
                                    <div className="col-md-8 col-sm-12 mx-auto text-center">
                                        <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/pentalogix/pentalogix.jpg'} alt="Pentalogix Main site" />
                                    </div>
                                </div>
                                 

                                 {/* Triple Text */}
                                 <div className="row triple-text py-5">
                                    <div className="col-11 col-md-10 mx-auto">
                                        <h6 className="mb-2 display">Think</h6>
                                        <h3 className="mb-4">The Problems</h3>
                                        <div className="row">
                                            <div className="col-md-4 col-sm-12">
                                                <p className="pr-md-2 pr-sm-0">
                                                    The only way of customer/supplier communication was through an agent email, and 
                                                    the PCB selling was separated from the site
                                                </p>
                                            </div>
                                            <div className="col-md-4 col-sm-12">
                                                <p className="px-md-2 px-sm-0">
                                                    There were no specific brand colors or typography
                                                </p>
                                            </div>
                                            <div className="col-md-4 col-sm-12">
                                                <p className="pl-md-2 ps-sm-0">
                                                    The pages were static
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Centred Important Description */}
                                <div className="row centred-description-important py-5">
                                    <div className="col-md-9 col-sm-12 mx-auto text-left">
                                        <h2 className="mb-3 text-center">The Solution</h2>
                                        <p className="lead-paragraph display px-3 px-md-0">
                                            Take advantage of the iterative nature of Lean UX to integrate the 
                                            information PL's already have to feed the landing pages, custom quotes and products of 
                                            a new Shopping Cart application. 
                                        </p>
                                    </div>
                                </div>

                                {/* ping pong photo descriptions */}
                                <div className="row ping-pong-photo py-5">
                                    <div className="col-md-10 mx-auto col-11">
                                        <div className="row">
                                            <h6 className="mb-2 display">Make</h6>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-12 col-md-6 px-0 pr-md-4">
                                            <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/pentalogix/quote1.png'} 
                                                alt="Pentalogix Analytics"/>
                                            </div>
                                            <div className="col-12 col-md-6 px-0 pl-md-4">
                                                <h4 className="mb-1">Redesigning the old site</h4>
                                                <p className="lead-paragraph mb-5 mb-md-0">
                                                    This was a static page that asked for a zip file that contained the PCB technical specifications. 
                                                    Then it was delivered via email, so finally an agent could respond to it with a custom quote.  
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center my-5">
                                            <div className="col-12 col-md-6 px-0 pr-md-4">
                                                <h4 className="mb-1 text-left">Wireframes</h4>
                                                <p className="lead-paragraph mb-5 mb-md-0">
                                                    We proposed an online quoting application within the webpage, 
                                                    that asked for the technical specifications and presented an automatic quote, 
                                                    showing several supplier prices, depending on lead times, 
                                                    and adjusting them to gain a profit.
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 px-0 pl-md-4 mb-5 mb-md-0">
                                                <img className="portfolio-img" 
                                                    src={ process.env.PUBLIC_URL + '/images/portfolio/pentalogix/quote_design1.png'} 
                                                    alt="Wireframes"/>
                                            </div>
                                        </div>
                                        <div className="row align-items-center my-5">
                                            <div className="col-12 col-md-6 px-0 pr-md-4">
                                                <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/pentalogix/quote_design2.jpg'} 
                                                    alt="Pentalogix Quote Design"/>
                                            </div>
                                            <div className="col-12 col-md-6 px-0 pl-md-4">
                                                <h4 className="mb-1 text-left">Prototypes</h4>
                                                <p className="lead-paragraph mb-5 mb-md-0">
                                                    For this, I worked with my friend Aldo with whom we changed the mood, 
                                                    interactions and journey of the users from the homepage, 
                                                    passing through the quoting interface, until the "thank you for your order" 
                                                    email, closing up the whole buying process.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Centred Important Description */}
                                <div className="row centred-description-important py-5 odd">
                                    <div className="col-md-7 col-10 mx-auto text-left">
                                        
                                        <h6 className="mb-3 display text-center">Check</h6>
                                        <p className="px-3 px-md-0">
                                            We realized that a portion of the users barely changed some of the specifications, 
                                            so we created several PCB Products, with a variety of predefined options.
                                        </p>
                                    </div>
                                </div>
                                 {/* Centred picture */}
                                 <div className="row py-5 full-width-picture">
                                    <div className="col-12 text-center">
                                        <h5 className="display mb-5">High Fidelity Screens</h5>
                                        <div className="row">
                                            <div className="col-12 col-md-6 mx-0 px-0">
                                                <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/pentalogix/quote3.jpg'} alt="High Fielity 1"/>
                                            </div>
                                            <div className="col-12 col-md-6 mx-0 px-0">
                                                <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/pentalogix/quote4.jpg'} alt="High Fielity 2"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* ping pong photo descriptions */}
                                <div className="row ping-pong-photo py-5 my-5">
                                    <div className="col-11 col-md-10 mx-auto">
                                        <div className="row">
                                            <h6 className="mb-4 display">The Semantics</h6>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-12 col-md-6 px-0 pr-md-4 mb-5 mb-md-0">
                                            <img className="portfolio-img" 
                                                 src={ process.env.PUBLIC_URL + '/images/portfolio/pentalogix/analytics.jpg'} 
                                                 alt="Pentalogix Analytics"/>
                                            </div>
                                            <div className="col-12 col-md-6 px-0 pl-md-4">
                                                <p className="lead-paragraph mb-5 mb-md-0">
                                                     I started tracking how people were searching to get to the pages
                                                     by integrating Google Analytics to the website, 
                                                     which later evolved into an aggressive SEO and SEM campaign.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center my-5">
                                            <div className="col-12 col-md-6 px-0 pr-md-4">
                                               
                                                <p className="lead-paragraph mb-5 mb-md-0">
                                                    With the analytics data I was able to generate the paid search acquisition channel which elevated the conversion 
                                                    rates by more than 50%, besides managing several types of email marketing campaigns. 
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 px-0 pl-md-4 mb-5 mb-md-0">
                                                <img className="portfolio-img" 
                                                     src={ process.env.PUBLIC_URL + '/images/portfolio/pentalogix/analytics3.jpg'} 
                                                     alt="PentaLogix Analytics results"/>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                                {/* Centred Important Description */}
                                <div className="row centred-description-important pb-2">
                                    <div className="col-10 mx-auto text-left">
                                        <h2 className="mb-3 text-center">Conclusions and follow up</h2>
                                        <p className="lead-paragraph display">
                                                I participated in the design and coding of all of PL's pages including 
                                                a video tutorials interface, a blog section, a software CAD product and more.
                                                 I will be uploading more of these projects eventually, 
                                                 so feel free to bookmark this site or contact me.
                                                <br/>
                                                To be continued...
                                        </p>
                                    </div>
                                </div>

                               
                            </div>
                        </section>
                    </div>
                </Layout>
            </React.Fragment>
        )
    }
}
export default Pentalogix;