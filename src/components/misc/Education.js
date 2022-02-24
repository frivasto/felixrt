import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Education = () => {
    return (
        <React.Fragment>
            <section className="section position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-title">Education</h2>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-80">
                            <div className="d-flex">
                            <div className="mr-lg-5 mr-3">
                                <FontAwesomeIcon icon={solid('graduation-cap')} size="xs" className=' icon icon-light icon-bg bg-white shadow rounded-circle d-block'/>
                            </div>
                            <div>
                                <p className="text-dark mb-1">2022</p>
                                <h4>Google UX Design Professional Certificate</h4>
                                <p className="mb-0 text-light">Coursera</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-80">
                            <div className="d-flex">
                            <div className="mr-lg-5 mr-3">
                                <FontAwesomeIcon icon={solid('graduation-cap')} className=' icon icon-light icon-bg bg-white shadow rounded-circle d-block'/>
                            </div>
                            <div>
                                <p className="text-dark mb-1">2022</p>
                                <h4>Graphic Design Specialization</h4>
                                <p className="mb-0 text-light">CalArts University via Coursera</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-80">
                            <div className="d-flex">
                            <div className="mr-lg-5 mr-3">
                                <FontAwesomeIcon icon={solid('graduation-cap')} className=' icon icon-light icon-bg bg-white shadow rounded-circle d-block'/>
                            </div>
                            <div>
                                <p className="text-dark mb-1">2012</p>
                                <h4>Computer Science Engineer</h4>
                                <p className="mb-0 text-light">Escuela Superior Politécnica del Litoral</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-80">
                            <div className="d-flex">
                            <div className="mr-lg-5 mr-3">
                                <FontAwesomeIcon icon={solid('graduation-cap')} className=' icon icon-light icon-bg bg-white shadow rounded-circle d-block'/>
                            </div>
                            <div>
                                <p className="text-dark mb-1">2013</p>
                                <h4>Multimedia Specialization</h4>
                                <p className="mb-0 text-light">Escuela Superior Politécnica del Litoral</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <img className="img-fluid edu-bg-image w-100" src="images/backgrounds/education-bg.png" alt="EDU" />
                </section>
        </React.Fragment>
    )
}

export default Education;