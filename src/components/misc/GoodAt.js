import React from 'react'

const GoodAt = () => {
    return (
        <React.Fragment>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="section-title">I'm good at</h2>
                        </div>
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="card hover-shadow shadow">
                                <div className="card-body text-center px-4 py-5">
                                    <i className="ti-palette icon mb-5 d-inline-block"></i>
                                    <h4 className="mb-4">UI Design</h4>
                                    <p>Pixel perfect User Interfaces with attention to detail prioritizing the user's goals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="card active-bg-primary hover-shadow shadow">
                                <div className="card-body text-center px-4 py-5">
                                    <i className="ti-vector icon mb-5 d-inline-block"></i>
                                    <h4 className="mb-4">UX Design</h4>
                                    <p>Web or Mobile Design with Equity and taking the User as priority.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="card hover-shadow shadow">
                                <div className="card-body text-center px-4 py-5">
                                    <i className="ti-panel icon mb-5 d-inline-block"></i>
                                    <h4 className="mb-4">FrontEnd Development</h4>
                                    <p>Web or Mobile state of the art code with pixel perfect visuals on the deployment server.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default GoodAt;