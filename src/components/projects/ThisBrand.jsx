import React from 'react'
import Layout from '../../layout/Layout'
import { Link } from 'react-router-dom';


class ThisBrand extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Layout currentPage="Portfolio">
                    <div className="portfolio thisbrand">
                        <section className="page-title bg-primary position-relative">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <h1 className="text-white font-tertiary">Felixrt-&lt;3</h1>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <section className="section">
                        <div className="container-fluid">
                             {/* Main Description */}
                             <div className="row main-description py-5">
                                <div className="col-md-8 offset-md-1 col-sm-12 text-left">
                                    <h2 className="mb-2 px-3 px-md-0">Case of Study</h2>
                                    <p className="px-3 px-md-0">
                                        Now I would like to take you on a little inception tour. 
                                        Everything you see around this web site is part of my reinvention from a web developer to a ui/ux designer.
                                    </p>
                                </div>
                            </div>
                            {/* Centred picture */}
                            <div className="row py-5 centred-image odd mt-5">
                                <div className="col-md-5 col-sm-8 mx-auto text-center py-5">
                                    <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/cover.png'} alt="This brand cover" />
                                </div>
                            </div>
                            {/* Triple Text */}
                            <div className="row triple-text py-5 mt-3">
                                <div className="col-11 col-md-10 mx-auto">
                                    <h2 className="mb-2">Problematics</h2>
                                    <div className="row">
                                        <div className="col-md-4 col-sm-12">
                                            <p className="pr-md-2 pr-sm-0">
                                                I used to only code web pages, 
                                                and design the user experience of it, 
                                                because that's what my parents would pay for.
                                            </p>
                                        </div>
                                        <div className="col-md-4 col-sm-12">
                                            <p className="px-md-2 px-sm-0">
                                                But I have always been obsessed with the visuals
                                                more than anything so I never stopped learning about it
                                            </p>
                                        </div>
                                        <div className="col-md-4 col-sm-12">
                                            <p className="pl-md-2 ps-sm-0">
                                                I didn't have any clients that gave me  the opportunity to design 
                                                the visuals. They only wanted me to code their websites.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             {/* Centred Important Description */}
                             <div className="row centred-description-important py-4">
                                <div className="col-md-9 col-sm-12 mx-auto text-left">
                                    <h2 className="mb-3 text-center">Solution</h2>
                                    <p className="lead-paragraph display px-3 px-md-0">
                                        So I decided to rebrand my career, I part time studied Graphic Design 
                                        and User Interface Design and portray that journey here on Felixrt.com. 
                                        So I took my 10 years of experience as a web interaction designer and 
                                        developer and applied them to create my own story, now as a UI/UX Designer. Hi!
                                    </p>
                                </div>
                            </div>
                             {/* Centred picture */}
                             <div className="row py-5 centred-image odd mt-5">
                                <div className="col-md-10 col-sm-8 mx-auto text-center py-5">
                                    <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/brainstorm.png'} alt="This brand cover" />
                                </div>
                            </div>
                            {/* Main Description */}
                            <div className="row main-description py-5 mt-5">
                                <div className="col-md-8 offset-md-1 col-sm-12 text-left">
                                    <h2 className="mb-2 px-3 px-md-0">Brainstorming and naming</h2>
                                    <p className="px-3 px-md-0">
                                        I started writing down all the keywords I believe define me and from there, so I could from 
                                        there inspire me and stay true to who I am. Then I used some of those the keywords to create a 
                                        nickname, and after a few iterations I concluded that just my name (Félix) followed by my last 
                                        name i nitials (rt) would be the simplest form of representing me out there.
                                    </p>
                                </div>
                            </div>
                            {/* Columns lists */}
                            <div className='row pb-5 mb-5'>
                                <div className="col-11 col-md-10 mx-auto">
                                    <div className='row'>  
                                        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                                            <h4>Main Keyword</h4>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                                            <h4>Iterations</h4>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                                            <h4>Final Iterations</h4>
                                        </div>
                                    </div>
                                    <div className="row align-items-end">
                                        
                                        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                                            
                                            <ul className="pl-0">
                                                <li>Respect</li>
                                                <li>Responsability</li>
                                                <li>Responsive</li>
                                            </ul>
                                            <ul className="pl-0 mt-4">
                                                <li>Felix</li>
                                                <li>Rivas</li>
                                                <li>Tomala</li>
                                            </ul>
                                            <ul className="pl-0 mt-4">
                                                <li>Inclusive Design</li>
                                                <li>Hard Work</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                                            
                                            <ul className="pl-0">
                                                <li>Resthe</li>
                                                <li>Resivo</li>
                                                <li>Responvo</li>
                                            </ul>
                                            <ul className="pl-0 mt-4">
                                                <li>Frivasto</li>
                                                <li>Felrivas</li>
                                                <li>Felixrt</li>
                                            </ul>
                                            <ul className="pl-0 mt-4">
                                                <li>InDi Hawk</li>
                                                <li>IDHW</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                                            
                                            <ul className="pl-0">
                                                <li>Resthe</li>
                                                <li>InDi Hawk</li>
                                                <li>Felixrt</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ping pong photo descriptions */}
                            <div className="row ping-pong-photo py-5 my-5">
                                <div className="col-11 col-md-10 mx-auto">
                                    <div className="row">
                                        <h6 className="mb-4 display">The Visuals</h6>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-12 col-md-6 px-0 pr-md-5 mb-5 mb-md-0">
                                            <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/moodboard.jpg'} 
                                                    alt="Moodboard"/>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 pl-md-5">
                                            <h2 className="mb-3 text-left">Moodboard</h2>
                                            <p className="lead-paragraph mb-5 mb-md-0">
                                                So I grew up in the 90s so I figured that my brand should depict some elements 
                                                from that time, like pixelated icons, nintendo, sega, and also reference some 
                                                of my technology role models and inspirations like Elon, and Steve. I also 
                                                wanted to use colors from pink and blue stopping a little bit on the magenta, 
                                                since I am a spacetime admirer and those colors remind me of it.

                                            </p>
                                        </div>
                                    </div>
                                    <div className="row align-items-center mt-5">
                                        <div className="col-12 col-md-6 px-0 pr-md-5">
                                            <h2 className="mb-3 text-left">Type Exploratons</h2>
                                            <p className="lead-paragraph mb-5 mb-md-0">
                                                I wanted a san-serif as my primary type, and wanted a clean, elegant one, 
                                                so I inclined myself to the open source Google one Roboto, because it was already 
                                                widely used and tested and it made sense with the developer part of my brand. 
                                                Additionally I chose Lora as the serif partner, since they did a pretty good 
                                                match and depicted nicely my creative more stylish counterpart.
                                            </p>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 pl-md-5 mb-5 mb-md-0">
                                            <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/type.png'} 
                                                    alt="Typography explorations"/>
                                        </div>
                                    </div>
                                    <div className="row align-items-center mt-5">
                                        <div className="col-12 col-md-6 px-0 pr-md-5 mb-5 mb-md-0">
                                            <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/colors.png'} 
                                                alt="Colors"/>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 pl-md-5 ">
                                            
                                            <h2 className="mb-3 text-left">Colors</h2>
                                            
                                            <p className="lead-paragraph mb-5 mb-md-0">
                                                From the Moodboard I extracted and played with some colors and I ended up choosing pink 
                                                because it was wednesday, estelar blue because I like spacetime and mint green because 
                                                I think it's romantic. 
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row align-items-center mt-5">
                                        <div className="col-12 col-md-6 px-0 pr-md-5">
                                            <h2 className="mb-3 text-left">Logotype and Icons</h2>
                                            <p className="lead-paragraph mb-5 mb-md-0">
                                                The logotype part is a slightly modified Roboto accompanied with 
                                                an icon that is a 90s inspired arrow pointing forward and up, 
                                                because that is what hard work does.
                                                It's pixeled to contrast with Roboto's clean and smooth typeface 
                                                to create a little noise.
                                            </p>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 pl-md-5 mb-5 mb-md-0">
                                            <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/logotype.png'} 
                                                    alt="Logotype and Icon"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             {/* ping pong photo descriptions */}
                            <div className="row ping-pong-photo py-5 my-5 odd">
                                <div className="col-11 col-md-10 mx-auto">
                                    <div className="row ">
                                        <div className="col-12 px-0">
                                            <h6 className="mb-1 display">Brand Application</h6>
                                            <h4 className="mb-4 ">This website</h4>
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-12 col-md-6 px-0 pr-md-5 mb-5 mb-md-0">
                                            <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/chalo.jpg'} 
                                                    alt="Intention"/>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 pl-md-5">
                                            <h2 className="mb-3 text-left">Intention</h2>
                                            <p className="lead-paragraph mb-5 mb-md-0">
                                                Now with this site I wanted people to get to know me as a designer, 
                                                so first thing will pop up is my design portfolio. Followed by a 
                                                brief description of who I am as a human being; then I wanted to
                                                 depict design concepts like contrast, therefore you will see a 
                                                 lot of black and white, also content direction, manage of white 
                                                 space to tell you my story, and show it in a way that can be 
                                                 responsive and look good on any device you are reading this.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row align-items-center mt-5">
                                        <div className="col-12 col-md-6 px-0 pr-md-5">
                                            <h2 className="mb-3 text-left">Development</h2>
                                            <p className="lead-paragraph mb-5 mb-md-0">
                                                The code part was a little funny, because since it was a simple personal 
                                                page, you may say I would have used the vanilla way of frontend or even a wordpress, 
                                                but I decided to keep practicing my reactjs, so I used it to divide my sections 
                                                into components.
                                            </p>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 pl-md-5 mb-5 mb-md-0">
                                            <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/code.jpg'} 
                                                    alt="Code"/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                             {/* Centred Important Description */}
                             <div className="row centred-description-important py-4">
                                <div className="col-md-9 col-sm-12 mx-auto text-left">
                                    <h2 className="mb-3 text-center">Conclusions and follow up</h2>
                                    <p className="lead-paragraph display px-3 px-md-0">
                                        So this site represents the current me as of 2022 first quarter of 2022. 
                                        Now I would love to hear from you. Send me an email if you are interested 
                                        in having a conversation about user interfaces, apps, spacetime, crossfit, 
                                        drag or even better, your thoughts on this design. Hope you are having a great one!
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
export default ThisBrand;