import React from 'react'
import Layout from '../../layout/Layout'


class Pentalogix extends React.Component{



    
    
    render(){
        return (
            <React.Fragment>
                <Layout currentPage="Portfolio">
                    <div className="portfolio pentalogix">
                        <section className="page-title bg-primary position-relative">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <h1 className="text-white font-tertiary">PentaLogix</h1>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section">
                            <div className="container-fluid">
                                 {/* Main Description */}
                                 <div className="row main-description py-5">
                                    <div className="col-md-8 offset-md-1 col-sm-12 text-left">
                                        <h2 className="mb-2 px-3 px-md-0">This site...</h2>
                                        <p className="px-3 px-md-0">
                                            PL (short for PentaLogix) was my home on and off for several Years&amp;Years. In this Case of Study
                                            I will tell you how I transformed a static web page into a modern 
                                            semantic web application with an automatic customer-supplier quoting interface, integrated with 
                                            Google Analytics, MailChimp-then-SendInBlue, plus SEO and SEM to boost its performance. 
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
                                        <h2 className="mb-2">The Problems</h2>
                                        <div className="row">
                                            <div className="col-md-4 col-sm-12">
                                                <p className="pr-md-2 pr-sm-0">
                                                    The only way of customer-supplier communication
                                                    was through emailing PL's agent.
                                                </p>
                                            </div>
                                            <div className="col-md-4 col-sm-12">
                                                <p className="px-md-2 px-sm-0">
                                                    There were no specific brand colors or typography, and 
                                                    PCB selling was separated from the site.
                                                </p>
                                            </div>
                                            <div className="col-md-4 col-sm-12">
                                                <p className="pl-md-2 ps-sm-0">
                                                    The pages were static.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Centred Important Description */}
                                <div className="row centred-description-important py-5">
                                    <div className="col-md-9 col-sm-12 mx-auto text-left">
                                        <h2 className="mb-3 text-center">The Solutions</h2>
                                        <p className="lead-paragraph display px-3 px-md-0">
                                            The heart of PL are its CAD Software Products, 
                                            specially its star product
                                            "ViewMate" which is popular among PCB designers. 
                                            But Agustin, the owner, wanted
                                            to transform PL to not just be a PCB Software company,
                                            but also a PCB seller. So we designed
                                            a PCB Manufacturing product page and 
                                            several PCB products that were siblings to their
                                            Software Product, and we founded a way 
                                            that when people landed to view a product 
                                            we also displayed their counterparts.
                                        </p>
                                    </div>
                                </div>

                                {/* ping pong photo descriptions */}
                                <div className="row ping-pong-photo py-5">
                                    <div className="col-md-10 mx-auto col-11">
                                        <div className="row">
                                            <h6 className="mb-4 display">Redesigning</h6>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-12 col-md-6 px-0 pr-md-5">
                                            <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/pentalogix/quote1.png'} 
                                                alt="Pentalogix Analytics"/>
                                            </div>
                                            <div className="col-12 col-md-6 px-0 pl-md-5">
                                                <h4 className="mb-1">The old site</h4>
                                                <p className="lead-paragraph mb-5 mb-md-0">
                                                    We took Agustin's old SmartDFM which asked for a zip file containing all 
                                                    the PCB technical specs and their email, so one of their workers could 
                                                    open it and then respond to the end user with a personalized quote. 
                                                    We proposed an online quote that asked for their technical specs, 
                                                    and started consuming their already filled specs vs prices database.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center my-5">
                                            <div className="col-12 col-md-6 px-0 pr-md-5">
                                                <h4 className="mb-1 text-left">Wireframes</h4>
                                                <p className="lead-paragraph mb-5 mb-md-0">
                                                    The original wireframes contained all the processes that 
                                                    were going to be automatic now, including quoting, 
                                                    saving the quote, showing several supplier costs,
                                                    adjusting the prices to gain a profit, and sending 
                                                    the quotes to both supplier and customer.
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 px-0 pl-md-5 mb-5 mb-md-0">
                                                <img className="portfolio-img" 
                                                    src={ process.env.PUBLIC_URL + '/images/portfolio/pentalogix/quote_design1.png'} 
                                                    alt="Wireframes"/>
                                            </div>
                                        </div>
                                        <div className="row align-items-center my-5">
                                            <div className="col-12 col-md-6 px-0 pr-md-5">
                                                <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/pentalogix/quote_design2.jpg'} 
                                                    alt="Pentalogix Quote Design"/>
                                            </div>
                                            <div className="col-12 col-md-6 px-0 pl-md-5">
                                                <p className="lead-paragraph mb-5 mb-md-0">
                                                    For the prototypes, I worked with my friend Aldo
                                                    with whom we changed the mood, interactions and journey of the users
                                                    from the homepage, passing through the quoting interface you see to the left,
                                                    to the the "thank you for your order" page, so we ended up even adding
                                                    the shopping cart features 
                                                    closing up the 
                                                    whole buying cycle.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Centred Important Description */}
                                <div className="row centred-description-important py-5 odd">
                                    <div className="col-md-7 col-10 mx-auto text-left">
                                        <h2 className="mb-3 text-center">Final Iterations</h2>
                                        <p className="px-3 px-md-0">
                                            In the end we realized that the users 
                                            barely changed some of the specs, so we decided to reduce the 
                                            specs options and present more quantities and lead times per price.
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
                                            <h6 className="mb-4 display">The Semantic Plus</h6>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-12 col-md-6 px-0 pr-md-5 mb-5 mb-md-0">
                                            <img className="portfolio-img" 
                                                 src={ process.env.PUBLIC_URL + '/images/portfolio/pentalogix/analytics.jpg'} 
                                                 alt="Pentalogix Analytics"/>
                                            </div>
                                            <div className="col-12 col-md-6 px-0 pl-md-5">
                                                <p className="lead-paragraph mb-5 mb-md-0">
                                                I also started tracking how people were searching to get to our pages 
                                                by integrating Google Analytics. From there I was able to realize people 
                                                were responding to the several keywords, 
                                                so all the pages were transformed to talk about those keywords in a meaningful 
                                                way that was also informative for the users.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center my-5">
                                            <div className="col-12 col-md-6 px-0 pr-md-5">
                                               
                                                <p className="lead-paragraph mb-5 mb-md-0">
                                                    With the analytics data I was able to generate the paid search 
                                                    acquisition channel which elevated the conversion 
                                                    rates by more than 50% when active, besides starting 
                                                    several types of email marketing campaigns.
                                                    The entire approach of the page was changed to visualize a multi product 
                                                    centered e-commerce, 
                                                    and Analytics proved that right after the shift, New Users curve started to grow.
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 px-0 pl-md-5 mb-5 mb-md-0">
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
                                            Similar to this, I participated in the design and coding of all of PL's pages
                                            and human interactions including a video tutorials interface, a blog section, a software cad product and more. I will 
                                            uploading more of this projects eventually, so don't mind bookmarking Felixrt or 
                                             <a href="mailto:frivasto@gmail.com"> ask me</a> to tell you! It's free ;)<br/>
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