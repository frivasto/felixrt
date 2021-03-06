import React from 'react'
import Layout from '../../layout/Layout'


class Dalig extends React.Component{
    componentDidMount() {
        document.title = "Felixrt- Project: Dalig "; 
     }
    
    
    render(){
        return (
            <React.Fragment>
                <Layout currentPage="Portfolio">
                    <div className="portfolio dalig">
                        <section className="section">
                            <div className="container-fluid">
                                <div className="row mt-5 mb-3">
                                    <div className="col-md-10 col-11 mx-auto text-left">
                                        <h1 className="font-tertiary">DALIG</h1>
                                    </div>
                                </div>
                                {/* Main Description */}
                                <div className="row main-description pb-5">
                                    <div className="col-md-8 offset-md-1 col-sm-12 text-left">
                                        <h2 className="mb-3 px-3 px-md-0">Case of Study</h2>
                                        <p className="px-3 px-md-0">
                                            DALIG is an app I created in about 4 months, using the User Centered Design framework, thanks to my CrossFit coach; 
                                            He was constantly creating competitions within his box, but his athletes had
                                            problems remembering their past competitions scores, so I decided to solve it with an iOS app. 
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

                                        <h6 className="mb-2 display">Understand</h6>
                                        <h3 className="mb-4">The Problems</h3>
                                        <div className="row">
                                            <div className="col-md-4 col-sm-12">
                                                <p className="pr-md-2 pr-sm-0">
                                                    Motivate athletes to go out 
                                                    of their comfort zone and take their 
                                                    training to competition to the next level.
                                                </p>
                                            </div>
                                            <div className="col-md-4 col-sm-12">
                                                <p className="px-md-2 px-sm-0">
                                                    Athletes want to upload their competition scores, 
                                                    so they can visually compare against each other.
                                                </p>
                                            </div>
                                            <div className="col-md-4 col-sm-12">
                                                <p className="pl-md-2 ps-sm-0">
                                                    Athletes want to have a history of their 
                                                    competition scores.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 {/* Centred Important Description */}
                                 <div className="row centred-description-important py-5">
                                    <div className="col-md-9 col-11 mx-auto text-left">
                                        <h2 className="mb-3 text-center">The Solution</h2>
                                        <p className="lead-paragraph display px-3 px-md-0">
                                        DALIG is a mobile application that allows athletes to create and participate in competitions. 
                                        They will be able to upload their scores and have a rank based on them. 
                                        Then, as a hook, I added gamification concepts like having 
                                        notifications when a friend surpassed the athlete's rank and giving visual rewards when they do it instead. 
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
                                            then to be styled with a modern fonetica "da lig", so intentionally 
                                            could be confused with the name of the surrealist paintor 
                                            "Dal??", for it to get a sophisticated, artsy connotation.
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
                                                    After the gamification concept was added, I immediately thought of Duolingo, 
                                                    and how Luis von Ahn transformed "learning a language" into a fun social game.

                                                </p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center mt-5">
                                            <div className="col-12 col-md-6 px-0 pr-md-5">
                                                <h2 className="mb-3 text-left">CrossFit Games</h2>
                                                <p className="lead-paragraph mb-5 mb-md-0">
                                                    This app was the main inspiration of DALIG,
                                                    because of how they handle their competitions
                                                    like the "CrossFit Games" and "CrossFit Open".
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
                                                    This would be DALIG's direct competition, since it is already being used to manage 
                                                    tournament subscriptions, but it doesn't have a gamification hook.
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
                                                    On the political side, they are flexible, but 
                                                    they have a strong community sense of purpose.
                                                </p>
                                            </div>
                                            <div className="col-md-4 col-sm-12">
                                                <p className="pl-md-2 ps-sm-0">
                                                    On the financial side, they are work centered.
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
                                                    of the things they have to offer. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* four texts important */}
                                <div className="row fourthe-text-important py-5">
                                    <div className="col-11 col-md-10 mx-auto">
                                        <h6 className="mb-2 display">Specify</h6>
                                        <h3 className="mb-4">Main Functionalities</h3>
                                        <div className="row align-items-top">
                                            <div className="col-12 col-md-6">
                                                <p className="lead-paragraph display">
                                                    Athletes can create a new competition. Competitions 
                                                    can have one or several events.
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <p className="lead-paragraph display">
                                                    An Athlete rank is calculated based on 
                                                    leaderboards of competitions per Sport
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row align-items-top mt-2">
                                            <div className="col-12 col-md-6">
                                                <p className="lead-paragraph display">
                                                Events have scores, scores can be validated by judges. 
                                                Scores are also used to calculate leaderboards.
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <p className="lead-paragraph display">
                                                    Athletes can join teams, and teams can also 
                                                    have ranks by sum(athletes).
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Titled wide Image */}
                                <div className="row py-5 titled-wide-image odd">
                                    <div className="col-10 mx-auto text-center">
                                    <h6 className="mb-5 display">App content and interaction SiteMap</h6>
                                        <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/sitemap.png'} alt="SiteMap" />
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
                                                <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/moodboard.jpg'} 
                                                        alt="Moodboard"/>
                                            </div>
                                            <div className="col-12 col-md-6 px-0 pl-md-4">
                                                <h3 className="mb-2 text-left">Moodboard</h3>
                                                <p className="lead-paragraph mb-5 mb-md-0">
                                                When thinking about DALIG I wanted to connote vintage sports, 
                                                so I went for old football fields and creamy military inspired uniforms from the 70s and 80s.

                                                </p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center mt-5">
                                            <div className="col-12 col-md-6 px-0 pr-md-4">
                                                <h3 className="mb-2 text-left">Colors</h3>
                                                <p className="lead-paragraph mb-5 mb-md-0">
                                                    I also wanted to portray energy, and since it's a fitness app, 
                                                    I went for highly saturated almost neon greens and reds, specially for call to actions.
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 px-0 pl-md-4 mb-5 mb-md-0">
                                                <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/colors.png'} 
                                                        alt="Typography explorations"/>
                                            </div>
                                        </div>
                                        <div className="row align-items-center mt-5">
                                            <div className="col-12 col-md-6 px-0 pr-md-4 mb-5 mb-md-0">
                                                <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/typeface.jpg'} 
                                                    alt="Colors"/>
                                            </div>
                                            <div className="col-12 col-md-6 px-0 pl-md-4 ">
                                                
                                                <h3 className="mb-2 text-left">Typography</h3>
                                                
                                                <p className="lead-paragraph mb-5 mb-md-0">
                                                    I wanted typefaces to be as organic as possible, and since this one was imagined to be an iOS, 
                                                    I went for ???SF Pro??? as the primary one and ???New York??? to complement it. 
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center mt-5">
                                            <div className="col-12 col-md-6 px-0 pr-md-4">
                                                <h3 className="mb-2 text-left">Logotype and Icon</h3>
                                                <p className="lead-paragraph mb-5 mb-md-0">
                                                    This is a vector customized SF Pro. It's italic to connote movement, and the L and I 
                                                    were also modified to look like a field, which is also DALIG's icon.
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 px-0 pl-md-4 mb-5 mb-md-0">
                                                <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/logos.png'} 
                                                        alt="Typography explorations"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                 {/* Centred picture */}
                                 <div className="row py-5 centred-image odd">
                                    <div className="col-8 mx-auto text-center">
                                        <h6 className="mb-4 display">Wireframes</h6>
                                        <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/lowfi2.png'} alt="Low Fidelity Design" />
                                    </div>
                                </div>

                              

                

                                {/* Centred picture */}
                                <div className="row py-5 full-width-picture odd">
                                    <div className="col-12 text-center">
                                        <h6 className="display mb-4">High Fidelity Screens</h6>
                                        <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/hifi2.png'} alt="High Fidelity Design" />
                                    </div>
                                </div>

                                {/* ping pong photo descriptions */}
                                <div className="row ping-pong-photo py-5 my-5">
                                    <div className="col-11 col-md-10 mx-auto">
                                        <div className="row">
                                            <h6 className="mb-4 display">Evaluate</h6>
                                        </div>
                                        <div className="row align-items-center py-5">
                                            <div className="col-12 col-md-6 px-0 pr-md-4 mb-5 mb-md-0">
                                                <img className="portfolio-img" 
                                                        src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/changes1.png'} 
                                                        alt="Changes 1" />
                                            </div>
                                            <div className="col-12 col-md-6 px-0 pl-md-4">
                                                <h3 className="mb-2 text-left">Uploading scores</h3>
                                                <p className="lead-paragraph mb-5 mb-md-0">
                                                    When asked to upload their event score, more than half of the athletes tried to open the event 
                                                    by clicking on the description, so I used that instead of just clicking on the title.
                                                </p>
                                            </div>
                                        </div> 
                                        <div className="row align-items-center mt-5">
                                            <div className="col-12 col-md-6 px-0 pr-md-4">
                                                <h3 className="mb-2 text-left">Overall leaderboard</h3>
                                                <p className="lead-paragraph mb-5 mb-md-0">
                                                    A little less than three quarters of athletes didn't slide on the ranking section, 
                                                    but expected to get 
                                                    to the overall Leaderboard after clicking on it. So I changed that and added a 
                                                    few more filters to that leaderboard screen
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 px-0 pl-md-4 mb-5 mb-md-0">
                                                <img className="portfolio-img" 
                                                        src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/changes2.png'} 
                                                        alt="Changes 2" />
                                            </div>
                                        </div> 
                                    </div>
                                </div>


                                {/* Triple Text */}
                                <div className="row triple-text">
                                    <div className="col-11 col-md-10 mx-auto">
                                        <h4 className="display text-center my-5">Final Flow</h4>
                                        <h3 className="mb-2">Goals</h3>
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
                                                    Explore the leaderboards
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
                                    <div className="col-11 col-md-10 mx-auto text-left">
                                        <h2 className="mb-3 text-center">Conclusions and follow up</h2>
                                        <p className="lead-paragraph display">
                                            This project was special to me, because it involves two of my passions: sports and design.
                                            It felt good to work together with my local CrossFit community to help them achieve their 
                                            fitness goals, while they are having fun. We are now in the developing process, 
                                            so if you are a developer with similar passions, do not hesitate in contacting
                                            me and chat about what we can do.
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