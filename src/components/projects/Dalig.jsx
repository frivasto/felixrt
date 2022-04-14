import React from 'react'
import Layout from '../../layout/Layout'


class Dalig extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Layout currentPage="Portfolio">
                    <div className="portfolio dalig">
                        <section className="page-title bg-primary position-relative">
                            <div className="container-flow">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <h1 className="text-white font-tertiary">DALIG</h1>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section">
                            <div className="container-flow">
                                {/* Main Description */}
                                <div className="row main-description py-5">
                                    <div className="col-md-8 offset-md-1 col-sm-12 text-left">
                                        <h2 className="mb-2 px-3 px-md-0">Case of Study</h2>
                                        <p className="px-3 px-md-0">
                                            DALIG is an app I designed for fun thanks to my CrossFit coach Verly, 
                                            he was constantly creating competitions within his box and we had the 
                                            idea of crating this app that make it easier for atheletes to keep track 
                                            of their scores; and eventually we ended up creating a fully commercial 
                                            fitness application that welcomes athletes of different Sports and have 
                                            global and specific Leaderboards and scores. 
                                        </p>
                                    </div>
                                </div>
                                {/* Centred picture */}
                                <div className="row py-5 centred-image odd">
                                    <div className="col-md-8 col-sm-12 mx-auto text-center">
                                        <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/dalig-three-screens.png'} alt="Dalig Three Screens" />
                                    </div>
                                </div>
                                 {/* Centred Important Description */}
                                 <div className="row centred-description-important py-5">
                                    <div className="col-md-9 col-sm-12 mx-auto text-left">
                                        <h2 className="mb-3 text-center">Description</h2>
                                        <p className="lead-paragraph display px-3 px-md-0">
                                            DaLig allows users to create and participate in Competitions of an specific Sport, 
                                            then Athletes of that Sport will have Scores, LeaderBoards and a Global Rank depending 
                                            on how well they do in the competitions. Athletes will be notified when their Rank is surpased, 
                                            or how well they need to do next time to surpase their peers.
                                        </p>
                                    </div>
                                </div>
                                 {/* Full width picture */}
                                 <div className="row py-5 full-width-picture">
                                    <div className="col-12">
                                        <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/competition.png'} alt="Competition" />
                                    </div>
                                </div>
                                 {/* Triple Text */}
                                 <div className="row triple-text py-5">
                                    <div className="col-10 mx-auto">
                                        <h2 className="mb-2">Problematics</h2>
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
                                        <h2 className="mb-3 text-center">Naming process</h2>
                                        <p className="lead-paragraph display px-3 px-md-0">
                                            The idea is to portray a short of The number one league, 
                                            so it could be styled with a modern fonetica Da Lig, and 
                                            also intentionally could be confused with Dali the paintor 
                                            and get a sophisticated connotation.
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
                                {/* Triple Text */}
                                <div className="row triple-text py-5">
                                    <div className="col-10 mx-auto">
                                        <h2 className="mb-2">General User Profile</h2>
                                        <div className="row">
                                            <div className="col-md-4 col-sm-12">
                                                <p className="pr-md-2 pr-sm-0">
                                                    On a political sense, they could be flexible 
                                                    but with a strong comunity based purpose. 
                                                </p>
                                            </div>
                                            <div className="col-md-4 col-sm-12">
                                                <p className="px-md-2 px-sm-0">
                                                    On a financial sense, they could be work centred with the 
                                                    rest of their time wanting to maintain an phisical activity. 
                                                </p>
                                            </div>
                                            <div className="col-md-4 col-sm-12">
                                                <p className="pl-md-2 ps-sm-0">
                                                    They must be social oriented.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* small photo descriptions */}
                                <div className="row small-photo-description py-5">
                                    <div className="col-10 mx-auto">
                                        <h2 className="mb-5">Specific User Profile</h2>
                                        <div className="row align-items-center">
                                            <div className="col-12 col-md-4 mb-3 mb-md-0">
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
                                                    work to several people including her daughter's family. 
                                                    She has great friends from her day to day work and cross 
                                                    functional gym. She enjoys being an active person and works 
                                                    hard to look better and stay healthy.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center mt-5">
                                            <div className="col-12 col-md-4 mb-3 mb-md-0">
                                                <img className="portfolio-img" 
                                                     src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/alexon.png'} 
                                                     alt="Alexon" />
                                            </div>
                                            <div className="col-12 col-md-8 pl-0 pl-md-3">
                                                <h2 className="mb-0">Alexon, 34</h2>
                                                <h3>Agricultural Engineer</h3>
                                                <p className="display body-2">
                                                    He believes life is about moving. He spends most of his day working in the lands, 
                                                    making sure harvests go as desired. He doesn't have much time, but when he has some, 
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
                                    <div className="col-10 mx-auto">
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
                                                    by judges. Scores are used to feed a LeaderBoard.
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <p className="lead-paragraph display">
                                                    Athletes can join Teams, and Teams could 
                                                    have ranks by sum(Athletes).
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
                                 {/* Centred picture */}
                                 <div className="row py-5 centred-image ">
                                    <div className="col-8 mx-auto text-center">
                                        <h6 className="mb-5 display">Wireframes</h6>
                                        <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/wireframes.png'} alt="Wireframes" />
                                    </div>
                                </div>
                                {/* Centred picture */}
                                <div className="row py-5 centred-image ">
                                    <div className="col-8 mx-auto text-center">
                                        <h6 className="mb-5 display">Prototype Screens</h6>
                                        <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/lowfi.png'} alt="Low Fidelity Design" />
                                    </div>
                                </div>

                                {/* ping pong photo descriptions */}
                                <div className="row ping-pong-photo py-5">
                                    <div className="col-10 mx-auto">
                                        <h4 className="mb-2 display">High Fidelity Design Process</h4>
                                        <h6 className="mb-5 display">Moodboard</h6>
                                        <div className="row align-items-center">
                                            <div className="col-12 col-md-6 mb-5 mb-md-0">
                                                <img className="portfolio-img" 
                                                     src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/moodboard.png'} 
                                                     alt="Moodboard" />
                                            </div>
                                            <div className="col-12 col-md-6 ">
                                                <p className="display lead-paragraph pl-0 pl-md-4">
                                                    When thinking about Daligh we wanted to portray Vintage, 
                                                    we went for greens and reds from fields mixed with cream 
                                                    military inspired uniforms from the 70s and 80s. We also 
                                                    wanted to connotate Energy, and since it's a fitness app 
                                                    in the end, we went for highly saturated almost neon 
                                                    greens specially for call to actions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Full width picture */}
                                <div className="row py-5 full-width-picture">
                                    <div className="col-12">
                                        <h6 className="display text-right mb-4 mx-5">Color and  Type</h6>
                                        <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/color-and-type.png'} alt="Color and Type" />
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
                                                     src={ process.env.PUBLIC_URL + '/images/portfolio/dalig/changes2.png'} 
                                                     alt="Changes 2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Triple Text */}
                                <div className="row triple-text py-5">
                                    <div className="col-10 mx-auto">
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