import React from 'react'
import Layout from '../../layout/Layout';

class About extends React.Component{
    componentDidMount() {
        document.title = "Felixrt- About "; 
     }
    
    render(){
        return (
            <React.Fragment>
                <Layout currentPage="about">
                    <section className="section home-about">
                        <div className="container-fluid">
                            <div className="row mt-5">
                                <div className="col-md-10 col-11 mx-auto text-left">
                                    <h1 className="font-tertiary">This is me</h1>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-10 col-11 mx-auto ">   
                                    <div className="row align-items-center">
                                    
                                        <div className="col-xl-7 col-12">
                                            <div className="row centred-description-important">
                                                <div className="col-12 mx-auto col-xl-12 mx-xl-0 text-left mt-4 ">
                                                    <h2 className="mb-2">Félix Rivas</h2>
                                                    <p className="lead-paragraph px-xl-0 py-0 mb-0 display">
                                                        For the past 10 years, I have worked creating pretty and responsive web pages 
                                                        and applications. I've been involved in every step of the making process, 
                                                        trying to always put the user's needs first and make it accessible to anyone.<br/>
                                                        But I've been obsessed with technology, visual arts and storytelling from a very young age;
                                                        and since then, I haven't stopped studying those fields, 
                                                        on the technical side, and more recently, on the visual one.
                                                        Now it would be my pleasure to use my experience and creativity to help anyone to create their 
                                                        dream product.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row centred-description-important mt-1">
                                                <div className="col-12 mx-auto col-xl-12 mx-xl-0 text-left mt-4">
                                                    <h2 className="mb-2">My desiging journey</h2>
                                                    <p className="lead-paragraph px-xl-0 py-0 mb-0 display">
                                                        I believe my first true exposure to UI Design was my University's powerpoint presentations.
                                                        Remember fighting with my group members to be the one who did them, and enjoyed going 
                                                        a little further with the effects, use of hyperlinks and even incorporating videos,
                                                        which now, connecting the dots, I understand as Interaction Design.
                                                        I created my first website back in the 2000s, 
                                                        I basically downloaded Cartoon Network's web page and changed 
                                                        the titles and pictures and uploaded it to a blogging site. 
                                                        I then received an email from CN headquarters saying they were going to sue, I was 10.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-5 px-xl-2 pt-xl-2 col-12 mt-xl-2 mt-4 ">
                                            <img className="about-img" src={ process.env.PUBLIC_URL + '/images/about/felix2.jpg'} 
                                                    alt="About Felix"/>

                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            <div className="row mt-5 pt-5">
                                <div className="col-md-10 col-11 mx-auto ">   
                                    <div className="row">
                                        <h2 className="mb-4 mx-2">My Personal Journey</h2>
                                    </div>    
                                    <div className="row">
                                        <div className="col-md-3 col-12 px-md-2 mt-2 mt-md-0">
                                            <img className="about-img" src={ process.env.PUBLIC_URL + '/images/about/about1.png'} 
                                                    alt="About Design"/>
                                        </div>
                                        <div className="col-md-3 col-12 px-md-2 mt-2 mt-md-0">
                                            <img className="about-img" src={ process.env.PUBLIC_URL + '/images/about/about2.png'} 
                                                    alt="About Work"/>
                                        </div>
                                        <div className="col-md-3 col-12 px-md-2 mt-2 mt-md-0">
                                            <img className="about-img" src={ process.env.PUBLIC_URL + '/images/about/about3.png'} 
                                                    alt="About Drag"/>

                                        </div>
                                        <div className="col-md-3 col-12 px-md-2 mt-2 mt-md-0">
                                            <img className="about-img" src={ process.env.PUBLIC_URL + '/images/about/about4.png'} 
                                                    alt="About CrossFit"/>
                                        </div>
                                    </div>
                                    <div className="row mt-md-5 mt-3">
                                        <div className="col-12 mx-auto col-md-12 mx-md-0 text-left ">
                                            <p className="lead-paragraph px-md-0 py-0 mb-0 display">
                                                I have navigated several fields in this world, but my natural curiosity 
                                                for how things work has been constant; hence my interests in spacetime 
                                                and science in general. I also love that, as humans, we are able to express 
                                                almost anything using different media. More personally, 
                                                I have explored the world of Drag, using my Drag persona as a vehicle to tell stories. 
                                                I may say I'm a scientist with an artistic heart.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-md-8 mx-md-auto odd">
                                            <p className="lead-paragraph mb-0 p-md-5 p-3 display">
                                                Last thing I would like to share about me is the importance I give to inclusivity as a designer,
                                                and this resonates personally with me from my core. As an LGBTQ person, who grew up in a small town, 
                                                in a difficult environment, I understand the importance of including historically marginalized humans, 
                                                and I try to keep that in mind  when designing. I loved connecting all the dots on my life that lead me 
                                                to where I am today, and in the end, using my job as my life purpose to create a better, more functional 
                                                world, for everyone.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Layout>
            </React.Fragment>
        )
    }
}

export default About;