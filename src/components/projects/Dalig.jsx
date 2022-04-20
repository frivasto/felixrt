import React from 'react'
import Layout from '../../layout/Layout'


class Dalig extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Layout currentPage="Portfolio">
                    <div className="portfolio dalig">
                        <section className="page-title bg-primary position-relative">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <h1 className="text-white font-tertiary">DALIG</h1>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section">
                            <div className="container-fluid">
                                {/* Main Description */}
                                <div className="row main-description py-5">
                                    <div className="col-md-8 offset-md-1 col-sm-12 text-left">
                                        <h2 className="mb-2 px-3 px-md-0">Case of Study</h2>
                                        <p className="px-3 px-md-0">
                                            DALIG is an app I designed for fun thanks to my CrossFit coach. 
                                            He was constantly creating competitions within his box and so we had this 
                                            idea of creating a mobile app that made it easier for atheletes to keep track 
                                            of their scores; and eventually I ended up creating a fully commercial 
                                            fitness application that welcomes athletes of different sports and have 
                                            global and specific leaderboards using gamification concepts to
                                            symbiotically create a fitter, better world. 
                                        </p>
                                    </div>
                                </div>
                                {/* Centred picture */}
                                <div className="row py-5 centred-image odd">
                                    <div className="col-md-8 col-sm-12 mx-auto text-center">
                                        <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/dalig-three-screens.png'} alt="Dalig Three Screens" />
                                    </div>
                                </div>
                                {/* Triple Text */}
                                <div className="row triple-text py-5">
                                    <div className="col-11 col-md-10 mx-auto">
                                        <h2 className="mb-2">The Problems</h2>
                                        <div className="row">
                                            <div className="col-md-4 col-sm-12">
                                                <p className="pr-md-2 pr-sm-0">
                                                    Motivate athletes to go out 
                                                    of their comfort zone and take their 
                                                    training to competition levels.
                                                </p>
                                            </div>
                                            <div className="col-md-4 col-sm-12">
                                                <p className="px-md-2 px-sm-0">
                                                    Athletes want to upload their competition scores, 
                                                    so they can visually test against each other.
                                                </p>
                                            </div>
                                            <div className="col-md-4 col-sm-12">
                                                <p className="pl-md-2 ps-sm-0">
                                                    Athletes want to have a history of their 
                                                    competitions and scores.
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
                                            DALIG is a mobile application that allows athletes to create and participate 
                                            in competitions of an specific sport. 
                                            They will be able to upload their scores and have a record of their progress. 
                                            But having to upload scores seems like work to me, so I decided
                                            to add some gamification concepts like
                                            having leaderboards and global ranks depending 
                                            on how they do in the competitions; they
                                            will be notified when their rank is surpased, 
                                            or how better they need to do next time to surpase their buddy.
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Full width picture */}
                                <div className="row py-5 full-width-picture">
                                    <div className="col-12">
                                        <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/competition2.jpg'} alt="Competition" />
                                    </div>
                                </div>

                                {/* Centred Important Description */}
                                <div className="row centred-description-important py-5">
                                    <div className="col-md-9 col-sm-12 mx-auto text-left">
                                        <h2 className="mb-3 text-center">Naming process</h2>
                                        <p className="lead-paragraph display px-3 px-md-0">
                                            The idea is to portray a short of "The number one league", 
                                            then to be styled with a modern fonetica Da Lig, and intentionally 
                                            to be confused with the surrealist paintor 
                                            Dali, for it to get a sophisticated artsy connotation.
                                        </p>
                                    </div>
                                </div>

                                {/* Double Text */}
                                <div className="row doule-text py-5">
                                    <div className="col-md-6 col-sm-12 mx-auto">
                                        <div className="row align-items-end">
                                            <div className="col-md-6 col-sm-12">
                                                <p className="text-center text-md-right">
                                                    DaLig    DaNo1   Da1
                                                </p>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <h2 className="display text-center text-md-left mb-0">
                                                    DALIG
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* ping pong photo descriptions */}
                                <div className="row ping-pong-photo py-5 my-5 odd">
                                    <div className="col-11 col-md-10 mx-auto">
                                        <div className="row">
                                            <h6 className="mb-4 display">Similar apps</h6>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-12 col-md-6 px-0 pr-md-5 mb-5 mb-md-0">
                                                <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/duolingo.jpg'} 
                                                        alt="Moodboard"/>
                                            </div>
                                            <div className="col-12 col-md-6 px-0 pl-md-5">
                                                <h2 className="mb-3 text-left">Duolingo</h2>
                                                <p className="lead-paragraph mb-5 mb-md-0">
                                                    After the gamification concept was added I inmediately thought
                                                    of Duolingo, and how Luis von Ahn transformed learning a language into 
                                                    a worlwide game.

                                                </p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center mt-5">
                                            <div className="col-12 col-md-6 px-0 pr-md-5">
                                                <h2 className="mb-3 text-left">CrossFit Games</h2>
                                                <p className="lead-paragraph mb-5 mb-md-0">
                                                    Second app was the main inspiration of this idea,
                                                    and it is how CrossFit handles their competitions
                                                    like CrossFit Games and the CrossFit Open.
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 px-0 pl-md-5 mb-5 mb-md-0">
                                                <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/crossfitgames.jpg'} 
                                                        alt="Typography explorations"/>
                                            </div>
                                        </div>
                                        <div className="row align-items-center mt-5">
                                            <div className="col-12 col-md-6 px-0 pr-md-5 mb-5 mb-md-0">
                                                <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/pukkiebook.jpg'} 
                                                    alt="Colors"/>
                                            </div>
                                            <div className="col-12 col-md-6 px-0 pl-md-5 ">
                                                
                                                <h2 className="mb-3 text-left">Pukiebook</h2>
                                                
                                                <p className="lead-paragraph mb-5 mb-md-0">
                                                    This woul be DALIG's direct competition, since it is already being used 
                                                    to manage suscriptions of competitions, but it doesn't have a gamification part.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Triple Text */}
                                <div className="row triple-text py-5">
                                    <div className="col-11 col-md-10 mx-auto">
                                        <h2 className="mb-2">General user profile</h2>
                                        <div className="row">
                                            <div className="col-md-4 col-sm-12">
                                                <p className="pr-md-2 pr-sm-0">
                                                    They are socially oriented.
                                                   
                                                </p>
                                            </div>
                                            <div className="col-md-4 col-sm-12">
                                                <p className="px-md-2 px-sm-0">
                                                    On the political side, they are flexible 
                                                    but with a strong comunity based sense of purpose. 
                                                </p>
                                            </div>
                                            <div className="col-md-4 col-sm-12">
                                                <p className="pl-md-2 ps-sm-0">
                                                    On the financial side, they are work centered with the 
                                                    rest of their time wanting to engage in physical and healthy activities. 
                                                    
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* small photo descriptions */}
                                <div className="row small-photo-description py-5">
                                    <div className="col-10 mx-auto">
                                        <h2 className="mb-5">Specific user profile</h2>
                                        <div className="row align-items-center">
                                            <div className="col-12 col-md-4 mb-3 mb-md-0 px-md-3 px-0">
                                                <img className="portfolio-img" 
                                                     src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/laurita.png'} 
                                                     alt="Laurita" />
                                            </div>
                                            <div className="col-12 col-md-8 pl-0 pl-md-3">
                                                <h2 className="mb-0">Laurita, 49</h2>
                                                <h3>Restaurant owner</h3>
                                                <p className="display body-2">
                                                    She believes women can stand on their own no matter what. 
                                                    She spends 6 days a week managing her restaurant which gives 
                                                    work to several people including her daughter. 
                                                    She has great friends from her day to day work and cross 
                                                    functional gym. She enjoys being an active person and works 
                                                    hard to look better and stay healthy.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center mt-5">
                                            <div className="col-12 col-md-4 mb-3 mb-md-0  px-md-3 px-0">
                                                <img className="portfolio-img" 
                                                     src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/alexon.png'} 
                                                     alt="Alexon" />
                                            </div>
                                            <div className="col-12 col-md-8 pl-0 pl-md-3">
                                                <h2 className="mb-0">Alexon, 34</h2>
                                                <h3>Agricultural Engineer</h3>
                                                <p className="display body-2">
                                                    He believes life is about moving. He spends most of his day working in the lands, 
                                                    making sure harvests go as desired. He doesn't have much time, but when he does, 
                                                    he likes being an active member of his CrossFit community, participating in most 
                                                    of the things they have to offer. He likes to look good and meet people since 
                                                    he is from another city.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* four texts important */}
                                <div className="row fourthe-text-important py-5">
                                    <div className="col-11 col-md-10 mx-auto">
                                        <h6 className="mb-4 display">Main Functionalities</h6>
                                        <div className="row align-items-center">
                                            <div className="col-12 col-md-6">
                                                <p className="lead-paragraph display">
                                                    Athletes can create a new competition. Competition 
                                                    could have one or several event.
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <p className="lead-paragraph display">
                                                    An Athlete Rank is calculated based on 
                                                    Leaderboards of Competitions per Sport
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center mt-2">
                                            <div className="col-12 col-md-6">
                                                <p className="lead-paragraph display">
                                                    Events could have scores, scores could be validated 
                                                    by judges. scores are used to feed a leaderboard.
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <p className="lead-paragraph display">
                                                    Athletes can join teams, and teams could 
                                                    have ranks by sum(athletes).
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Titled wide Image */}
                                <div className="row py-5 titled-wide-image odd">
                                    <div className="col-10 mx-auto text-center">
                                    <h6 className="mb-5 display">App Content and Interaction SiteMap</h6>
                                        <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/sitemap.png'} alt="SiteMap" />
                                    </div>
                                </div>
                             
                               


                                {/* ping pong photo descriptions */}
                                <div className="row ping-pong-photo py-5 my-5">
                                    <div className="col-11 col-md-10 mx-auto">
                                        <div className="row">
                                            <h6 className="mb-4 display">Visual design process</h6>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-12 col-md-6 px-0 pr-md-5 mb-5 mb-md-0">
                                                <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/moodboard.jpg'} 
                                                        alt="Moodboard"/>
                                            </div>
                                            <div className="col-12 col-md-6 px-0 pl-md-5">
                                                <h2 className="mb-3 text-left">Moodboard</h2>
                                                <p className="lead-paragraph mb-5 mb-md-0">
                                                    When thinking about DALIG I wanted to portray vintage sports, 
                                                    so I went for old football fields photographs and creamy 
                                                    military inspired uniforms from the 70s and 80s.

                                                </p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center mt-5">
                                            <div className="col-12 col-md-6 px-0 pr-md-5">
                                                <h2 className="mb-3 text-left">Colors</h2>
                                                <p className="lead-paragraph mb-5 mb-md-0">
                                                    I also wanted to connotate energy, and since it's a fitness app 
                                                    in the end, we went for highly saturated almost neon 
                                                    greens and reds specially for call to actions.
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 px-0 pl-md-5 mb-5 mb-md-0">
                                                <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/colors.png'} 
                                                        alt="Typography explorations"/>
                                            </div>
                                        </div>
                                        <div className="row align-items-center mt-5">
                                            <div className="col-12 col-md-6 px-0 pr-md-5 mb-5 mb-md-0">
                                                <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/typeface.jpg'} 
                                                    alt="Colors"/>
                                            </div>
                                            <div className="col-12 col-md-6 px-0 pl-md-5 ">
                                                
                                                <h2 className="mb-3 text-left">Typography</h2>
                                                
                                                <p className="lead-paragraph mb-5 mb-md-0">
                                                    I wanted typefaces to be as organic as possible, so as I imagined this
                                                    one to be an iOS, I went for SF Pro as the main and New York as the secondary one.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                 {/* Centred picture */}
                                 <div className="row py-5 centred-image odd">
                                    <div className="col-8 mx-auto text-center">
                                        <h4 className="mb-5">Wireframes</h4>
                                        <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/wireframes.jpg'} alt="Low Fidelity Design" />
                                    </div>
                                </div>

                              

                                {/* Centred picture */}
                                <div className="row py-5 centred-image">
                                    <div className="col-5 mx-auto text-center">
                                        <h6 className="display mb-4 mx-auto">Logo and Icon</h6>
                                        <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/logos.png'} alt="Logos" />
                                    </div>
                                </div>

                                {/* Centred picture */}
                                <div className="row py-5 full-width-picture">
                                    <div className="col-12 text-center">
                                        <h5 className="display mb-4">High Fidelity Screens</h5>
                                        <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/hifi.png'} alt="High Fidelity Design" />
                                    </div>
                                </div>

                                {/* ping pong photo descriptions */}
                                <div className="row ping-pong-photo py-5">
                                    <div className="col-10 offset-1">
                                        <h6 className="mb-5 display">Test Updates</h6>
                                        <div className="row align-items-center">
                                            <div className="col-12 col-md-6 px-2 px-md-5 mb-5 mb-md-0">
                                                <img className="portfolio-img" 
                                                     src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/changes1.png'} 
                                                     alt="Changes 1" />
                                            </div>
                                            <div className="col-12 col-md-6 ">
                                                <p className="display lead-paragraph px-2 px-md-5 mb-5 mb-md-0">
                                                    First thing we noticed at testing was that when asked to upload their event 
                                                    score 80% of athletes tried to enter to the Event by clicking on the description, 
                                                    whereas in the beginning they had to click on the word more to get into the Event
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center mt-5">
                                            <div className="col-12 col-md-6 ">
                                                <p className="display lead-paragraph px-2 px-md-5 mb-5 mb-md-0">
                                                Then it was the 75% of athletes didn-t slide on the Rank section but expected to get 
                                                to the Overal Leaderboard on click. So we chaged that and added a few filters to that Rank display.
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 px-2 px-md-5 mb-5 mb-md-0">
                                                <img className="portfolio-img" 
                                                     src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/changes2.jpg'} 
                                                     alt="Changes 2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Triple Text */}
                                <div className="row triple-text py-5">
                                    <div className="col-11 col-md-10 mx-auto">
                                        <h1 className="display text-center">Final Flow</h1>
                                        <h2 className="mb-2">Goals</h2>
                                        <div className="row">
                                            <div className="col-md-4 col-sm-12">
                                                <p className="pr-md-2 pr-sm-0">
                                                    Participate in a Competition as a CrossFit Athlete
                                                </p>
                                            </div>
                                            <div className="col-md-4 col-sm-12">
                                                <p className="px-md-2 px-sm-0">
                                                    Upload your Score in one of the Events of your 
                                                    participating Competition 
                                                </p>
                                            </div>
                                            <div className="col-md-4 col-sm-12">
                                                <p className="pl-md-2 ps-sm-0">
                                                    Explore the Leaderboards
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row centred-description-important py-5">
                                    <div className="col-10 mx-auto text-center">
                                    <iframe
                                        width="100%" height="450" 
                                        title='Prototype'
                                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F3FCJTFQoH5NKqVB79y4Rzb%2FDaLig-App%3Fpage-id%3D124%253A3833%26node-id%3D160%253A3977%26viewport%3D241%252C48%252C0.08%26scaling%3Dscale-down%26starting-point-node-id%3D160%253A3977" allowfullscreen>
                                </iframe>
                                    </div>
                                </div>
                                

                                 {/* Centred Important Description */}
                                 <div className="row centred-description-important py-5">
                                    <div className="col-10 mx-auto text-left">
                                        <h2 className="mb-3 text-center">Conclusions and follow up</h2>
                                        <p className="lead-paragraph display">
                                            Even though this project was special to me, because it involved 
                                            two of my passions: Sports (specially CrossFit) and UI Design, 
                                            it felt good in the end to flow with the end users and make 
                                            the changes that needed to be made so in the end, the App was usable 
                                            to them, which it's always the goal. We are now in the developing process, 
                                            so if you are a developer with similar passions, do not hesitate 
                                            in contacting me and chat about what we can do.
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
export default Dalig;