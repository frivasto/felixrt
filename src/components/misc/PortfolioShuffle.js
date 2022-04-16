import React from 'react'
import $ from 'jquery'  
import Shuffle from 'shufflejs';
import { Modal } from 'bootstrap';
import { Link } from 'react-router-dom';

class PortfolioShuffle extends React.Component{


    render(){
        return (
            <React.Fragment> 
                <section className="section portfolio">
                    <div className="container-flow">
                        {/* ping pong photo descriptions */}
                        <div className="row ping-pong-photo">
                            <div className="col-10 offset-1">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-6 px-2 pr-md-5 mb-5 mb-md-0">
                                        <Link to='/Portfolio/Dalig'>
                                            <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/home/dalig.png'} 
                                                    alt="Pentalogix Analytics"/>
                                        </Link>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <Link to='/Portfolio/Dalig'>
                                            <h2 className="mb-3 text-left px-1 px-md-2">DALIG</h2>
                                        </Link>
                                        <h6 className="mb-3 text-left tagline px-1 px-md-2">UI/UX DESIGN  · MOBILE<br/>BRAND DEVELOPMENT</h6>
                                        <p className="display lead-paragraph px-1 px-md-2 mb-5 mb-md-0">
                                            First thing we noticed at testing was that when asked to upload their event score 
                                            80% of athletes tried to enter to the Event by clicking on the description, 
                                            whereas in the beginning they had to click on the word more to get into the Event
                                        </p>
                                    </div>
                                </div>
                                <div className="row align-items-center mt-5">
                                <div className="col-12 col-md-6 px-2 pr-md-5 mb-5 mb-md-0">
                                            <Link to='/Portfolio/Pentalogix'>
                                                <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/home/pentalogix.png'} 
                                                        alt="Pentalogix Analytics"/>
                                            </Link>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <Link to='/Portfolio/Pentalogix'>
                                            <h2 className="mb-3 text-left px-1 px-md-2">PentaLogix</h2>
                                        </Link>
                                        <h6 className="mb-3 text-left tagline px-1 px-md-2">UI/UX  DESIGN    ·    WEB    ·    MARKETING <br/> FRONTEND DEVELOPMENT    </h6>
                                        <p className="display lead-paragraph px-1 px-md-2 mb-5 mb-md-0">
                                            First thing we noticed at testing was that when asked to upload their event score 
                                            80% of athletes tried to enter to the Event by clicking on the description, 
                                            whereas in the beginning they had to click on the word more to get into the Event
                                        </p>
                                    </div>
                                   
                                </div>
                                <div className="row align-items-center mt-5">
                                    <div className="col-12 col-md-6 px-2 pr-md-5 mb-5 mb-md-0">
                                        <Link to='/Portfolio/ThisBrand'>
                                            <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/home/felixrt.png'} 
                                                alt="Pentalogix Analytics"/>
                                        </Link>
                                    </div>
                                    <div className="col-12 col-md-6 ">
                                        <Link to='/Portfolio/ThisBrand'>
                                            <h2 className="mb-3 text-left px-1 px-md-2">Felixrt</h2>
                                        </Link>
                                        <h6 className="mb-3 text-left tagline px-1 px-md-2">UI/UX DESIGN  · WEB <br/>BRAND DEVELOPMENT</h6>
                                        <p className="display lead-paragraph px-1 px-md-2 mb-5 mb-md-0">
                                            First thing we noticed at testing was that when asked to upload their event score 
                                            80% of athletes tried to enter to the Event by clicking on the description, 
                                            whereas in the beginning they had to click on the word more to get into the Event
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>       
    
                {/* <div className="col-lg-4 col-6 mb-4 shuffle-item mokalu" data-groups="[&quot;design&quot;,&quot;frontend&quot;]">
                    <div className="position-relative rounded hover-wrapper">
                        <Link to='/Portfolio/Mokalu'>
                            <img src={ process.env.PUBLIC_URL + "/images/portfolio/mokalu.png"} alt="Mokalu" className="img-fluid rounded w-100 d-block" />
                            <div className="hover-overlay">
                                <div className="hover-content">
                                    <h4>Mokalu.com.ec</h4>
                                    <span>UI Design &amp; FrontEnd Dev</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div> */}
                {/*  <div className="col-lg-4 col-6 mb-4 shuffle-item epico" data-groups="[&quot;frontend&quot;,&quot;design&quot;]">
                    <div className="position-relative rounded hover-wrapper">
                        <Link to='/Portfolio/Epico'>
                            <img src={ process.env.PUBLIC_URL + "/images/portfolio/epico.png"} alt="Epico" className="img-fluid rounded w-100 d-block" />
                            <div className="hover-overlay">
                                <div className="hover-content">
                                    <h4>Epico</h4>
                                    <span>Ecuadorian Entrepreneurship Center Web Redesign</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div> */}
                {/*  <div className="col-lg-4 col-6 mb-4 shuffle-item emergency" data-groups="[&quot;frontend&quot;,&quot;design&quot;]">
                    <div className="position-relative rounded hover-wrapper">
                        <Link to='/Portfolio/Emergency'>
                            <img src={ process.env.PUBLIC_URL + "/images/portfolio/emergency.png"} alt="Emergency Radar" className="img-fluid rounded w-100 d-block" />
                            <div className="hover-overlay">
                                <div className="hover-content">
                                    <h4>Emergency Radar</h4>
                                    <span>Web App that collects information of Geolocated incidents</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div> */}
                {/*  <div className="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;design&quot;,&quot;frontend&quot;,&quot;branding&quot;]">
                    <div className="position-relative rounded hover-wrapper">
                        <Link to='/Portfolio/ThisSite'>
                            <img src={ process.env.PUBLIC_URL + "/images/portfolio/thissite.png"} alt="This Site" className="img-fluid rounded w-100 d-block" />
                            <div className="hover-overlay">
                                <div className="hover-content">
                                    <h4>This Site</h4>
                                    <span>ReactJS Refresh</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div> */}
                        
            </React.Fragment>
        )
    }
}

export default PortfolioShuffle;