import React from 'react'
import { Link } from 'react-router-dom';

class PortfolioShuffle extends React.Component{


    render(){
        return (
            <React.Fragment> 
                <section className="section portfolio">
                    <div className="container-fluid">
                        <div className="row mt-5 mb-3">
                            <div className="col-md-10 col-11 mx-auto text-left px-0">
                                <h1 className="font-tertiary">Portfolio</h1>
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
                                        <h6 className="mb-3 text-left tagline">UI/UX DESIGN  · MOBILE<br/>BRAND DEVELOPMENT</h6>
                                        <p className="lead-paragraph mb-5 mb-md-0">
                                            DALIG is a mobile app that allows athletes to create and participate in competitions, 
                                            then they can upload their scores; they will have leaderboards and a 
                                            global rank, depending on how they do in the competitions. 
                                        </p>
                                    </div>
                                </div>
                            
                                <div className="row align-items-center mt-5">
                                    <div className="col-12 col-md-6 px-0 pr-md-4 mb-3 mb-md-0">
                                        <Link to='/Portfolio/ThisBrand'>
                                            <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/home/felixrt.jpg'} 
                                                alt="Pentalogix Analytics"/>
                                        </Link>
                                    </div>
                                    <div className="col-12 col-md-6 px-0 pl-md-4">
                                        <Link to='/Portfolio/ThisBrand'>
                                            <h2 className="mb-3 text-left">Felixrt-&lt;3</h2>
                                        </Link>
                                        <h6 className="mb-3 text-left tagline">UI/UX DESIGN  · WEB <br/>BRAND DEVELOPMENT</h6>
                                        <p className="lead-paragraph mb-5 mb-md-0">
                                            This is the story of how I created this brand; I mean my personal brand, 
                                            and the website you are reading this from.
                                        </p>
                                    </div>
                                </div>
                                <div className="row align-items-center mt-5">
                                    <div className="col-12 col-md-6 px-0 pr-md-4 mb-3 mb-md-0">
                                        <Link to='/Portfolio/Pentalogix'>
                                            <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/home/pentalogix.png'} 
                                                    alt="Pentalogix Analytics"/>
                                        </Link>
                                    </div>
                                    <div className="col-12 col-md-6 px-0 pl-md-4">
                                        <Link to='/Portfolio/Pentalogix'>
                                            <h2 className="mb-3 text-left">PentaLogix</h2>
                                        </Link>
                                        <h6 className="mb-3 text-left tagline">UI/UX  DESIGN    ·    WEB    ·    MARKETING <br/> FRONTEND DEVELOPMENT    </h6>
                                        <p className="lead-paragraph mb-5 mb-md-0">
                                            PentaLogix is a web shopping cart that allows customers to get customized quotes from
                                            different Printed Circuit Boards suppliers, and then buy them. 
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