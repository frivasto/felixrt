import React from 'react'


const Experience = () => {
    return (
        <React.Fragment>
            <section className="section">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-title">Experience</h2>
                        </div>
                        <div className="col-lg-3 col-md-4 text-center">
                            <img src="images/experience/icon-1.png" alt="icon" />
                            <p className="mb-0">May 2017 - Dec 2019</p>
                            <h4>Software Design Engineer</h4>
                            <h6 className="text-light">Pentalogix</h6>
                        </div>
                        <div className="col-lg-3 col-md-4 text-center">
                            <img src="images/experience/icon-2.png" alt="icon" />
                            <p className="mb-0">Nov 2019 - Mar 2021</p>
                            <h4>UX Designer, FrontEnd Developer</h4>
                            <h6 className="text-light">PCB Unlimited</h6>
                        </div>
                        <div className="col-lg-3 col-md-4 text-center">
                            <img src="images/experience/icon-3.png" alt="icon" />
                            <p className="mb-0">Feb 2021 - Present</p>
                            <h4>FrontEnd Developer, UX &amp; UI Designer</h4>
                            <h6 className="text-light">Freelancer</h6>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Experience;