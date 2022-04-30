import React from 'react'
import Layout from '../../layout/Layout'


class ThisBrand extends React.Component{
    
    componentDidMount() {
        document.title = "Felixrt- Project: Personal brand"; 
     }

    render(){
        return (
            <React.Fragment>
                <Layout currentPage="Portfolio">
                    <section className="section">
                        <div className="container-fluid">
                            <div className="row mt-5 mb-3">
                                    <div className="col-md-10 col-11 mx-auto text-left">
                                        <h1 className="font-tertiary">Felixrt-&lt;3</h1>
                                    </div>
                                </div>
                             {/* Main Description */}
                             <div className="row main-description">
                                <div className="col-md-8 offset-md-1 col-sm-12 text-left">
                                    <h2 className="mb-2 px-3 px-md-0">Case of Study</h2>
                                    <p className="px-3 px-md-0"> 
                                        Now I would like to take you on a little inception tour. Everything you see around 
                                        this website was designed using the Double Diamond framework with the intention of 
                                        building my own brand as a ui/ux designer.

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
                                 
                                        
                                    <h6 className="mb-2 display">Research</h6>
                                    <h3 className="mb-4">The Problems</h3>
                                    <div className="row">
                                        <div className="col-md-4 col-sm-12">
                                            <p className="pr-md-2 pr-sm-0">
                                                I needed a digital way to present myself as a ui/ux designer.
                                            </p>
                                        </div>
                                        <div className="col-md-4 col-sm-12">
                                            <p className="px-md-2 px-sm-0">
                                                I didn't have a webpage to present the projects I've been practicing my design skills on.

                                            </p>
                                        </div>
                                        <div className="col-md-4 col-sm-12">
                                            <p className="pl-md-2 ps-sm-0">
                                                I didn't have a brand.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             {/* Centred Important Description */}
                             <div className="row centred-description-important py-4">
                                <div className="col-md-9 col-sm-12 mx-auto text-left">
                                    <h2 className="mb-3 text-center">The Solution</h2>
                                    <p className="lead-paragraph display px-3 px-md-0">
                                        Create a short name, look and feel, and story that represents the binding of 
                                        my artistic and technical experience and show it to the digital world 
                                        in the form of typography, colors and lots of personality.
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
                                    I started writing down all the keywords I believe define me. 
                                    Then I used some of those, to create a nickname, 
                                    that after a few iterations ended up being Felixrt, 
                                    which stands for Felix Rivas Tomalá.
                                    </p>
                                </div>
                            </div>
                            {/* Columns lists */}
                            <div className='row pb-5 mb-5'>
                                <div className="col-11 col-md-10 mx-auto">
                                   
                                    <div className="row">
                                        
                                        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                                            <h4>Main Keyword</h4>
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
                                            <h4>Iterations</h4>
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
                                            <h4>Final Iterations</h4>
                                            <ul className="pl-0">
                                                <li>Resthe</li>
                                                <li>InDi Hawk</li>
                                                <li><strong>Felixrt</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ping pong photo descriptions */}
                            <div className="row ping-pong-photo py-5 my-5">
                                <div className="col-11 col-md-10 mx-auto">
                                    <div className="row">
                                        <h6 className="mb-4 display">Design</h6>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-12 col-md-6 px-0 pr-md-4 mb-5 mb-md-0">
                                            <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/moodboard.jpg'} 
                                                    alt="Moodboard"/>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 pl-md-4">
                                            <h3 className="mb-2 text-left">Moodboard</h3>
                                            <p className="lead-paragraph mb-5 mb-md-0">
                                            I grew up in the 90s, and I thought my imagery should depict some nostalgia from that time, 
                                            so I thought of pixelated icons and old video games. 
                                            I also wanted to reference some of my technology role models like Elon and Steve.

                                            </p>
                                        </div>
                                    </div>
                                    <div className="row align-items-center mt-5">
                                        <div className="col-12 col-md-6 px-0 pr-md-4">
                                            <h3 className="mb-2 text-left">Type Explorations</h3>
                                            <p className="lead-paragraph mb-5 mb-md-0">
                                                I wanted a readable type that depicted technology, so I chose the san-serif
                                                "Roboto", because it was already being widely used by Android 
                                                and it made sense with the developer side of my brand. Additionally I chose 
                                                Lora as the serif partner, since they did a pretty good match, 
                                                and depicted nicely my artsy side.
                                            </p>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 pl-md-4 mb-5 mb-md-0">
                                            <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/type.png'} 
                                                    alt="Typography explorations"/>
                                        </div>
                                    </div>
                                    <div className="row align-items-center mt-5">
                                        <div className="col-12 col-md-6 px-0 pr-md-4 mb-5 mb-md-0">
                                            <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/colors.png'} 
                                                alt="Colors"/>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 pl-md-4 ">
                                            
                                            <h2 className="mb-2 text-left">Colors</h2>
                                            
                                            <p className="lead-paragraph mb-5 mb-md-0">
                                                From the Moodboard, I extracted and played with some colors, 
                                                and ended up choosing pink, because it was wednesday, 
                                                estelar blue because I like spacetime, and mint green because I think it's romantic.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row align-items-center mt-5">
                                        <div className="col-12 col-md-6 px-0 pr-md-4">
                                            <h2 className="mb-2 text-left">Logotype and Icon</h2>
                                            <p className="lead-paragraph mb-5 mb-md-0">
                                                The logotype part is a slightly modified "Roboto", accompanied with 
                                                an icon that is a 90s inspired arrow pointing forward and up, 
                                                because there is where hard work goes.
                                                It's pixelated to contrast with Roboto's clean and smooth typeface 
                                                and create a little noise.
                                            </p>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 pl-md-4 mb-5 mb-md-0">
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
                                            <h3 className="mb-4 ">This website</h3>
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-12 col-md-6 px-0 pr-md-4 mb-5 mb-md-0">
                                            <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/chalo.jpg'} 
                                                    alt="Intention"/>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 pl-md-4">
                                            <h4 className="mb-2 text-left">Intention</h4>
                                            <p className="lead-paragraph mb-5 mb-md-0">
                                                I wanted people to get to know me as a designer, so the first thing that will show up, 
                                                after my name, is my design portfolio, followed by a brief description of who I am.
                                                And everything is intended to be presented in a way that the design concepts, 
                                                and the content, have contrast, while directing you through my story, 
                                                having white spaces to breathe, in a perfectly clean HTML, JavaScript and CSS.

                                            </p>
                                        </div>
                                    </div>
                                    <div className="row align-items-center mt-5">
                                        <div className="col-12 col-md-6 px-0 pr-md-5">
                                            <h4 className="mb-2 text-left">Bootstrap</h4>
                                            <p className="lead-paragraph mb-5 mb-md-0">
                                                When designing the webpage, 
                                                I used resources from Twitter's bootstrap, 
                                                as well as their layout and grid system, 
                                                in order to accelerate the frontend development process.
                                            </p>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 pl-md-5 mb-5 mb-md-0">
                                            <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/grid.png'} 
                                                    alt="Grid"/>
                                        </div>
                                    </div>
                                    <div className="row align-items-center mt-5">
                                        <div className="col-12 col-md-6 px-0 pr-md-4 mb-5 mb-md-0">
                                            <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/code.jpg'} 
                                                    alt="Code"/>
                                        </div>
                                        <div className="col-12 col-md-6 px-0 pl-md-4">
                                            <h4 className="mb-2 text-left">Intention</h4>
                                            <p className="lead-paragraph mb-5 mb-md-0">
                                                The code part was a little funny, because this is a simple portfolio page, 
                                                so you may say I would have used the vanilla way to frontend a webpage, 
                                                or even a Wordpress; but instead, 
                                                I decided to keep practicing my ReactJs; and now 
                                                I have a personal webpage well divided in ReactJs components.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             {/* Centred Important Description */}
                             <div className="row centred-description-important py-4">
                                <div className="col-md-9 col-sm-12 mx-auto text-left">
                                    <h2 className="mb-3 text-center">Conclusions and follow up</h2>
                                    <p className="lead-paragraph display px-3 px-md-0">
                                        So this represents the current me as of the first quarter of 2022. 
                                        Now I would love to hear from you. Send me an email if you are interested 
                                        in having a conversation about user interfaces, apps, spacetime, crossfit, 
                                        drag or even better, your thoughts on this. Hope you are having a great one!
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