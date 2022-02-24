import React from 'react'
import $ from 'jquery'

class Skills extends React.Component {
    
    componentDidMount(){
        $('[data-progress]').each(function () {
            $(this).css({
                'bottom': $(this).data('progress')
            });
        });
        $('[data-color]').each(function () {
            $(this).css({
                'background-color': $(this).data('color')
            });
        });
    }
    render()
    {
        return (
            <React.Fragment>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-title">Skills</h2>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                                <div className="card shadow text-center">
                                    <div className="position-relative rounded-top progress-wrapper" data-color="#fdb157">
                                        <div className="wave" data-progress="90%"></div>
                                    </div>
                                    <div className="card-footer bg-white">
                                        <h4 className="card-title">FrontEnd Dev</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                                <div className="card shadow text-center">
                                    <div className="position-relative rounded-top progress-wrapper" data-color="#9473e6">
                                        <div className="wave" data-progress="60%"></div>
                                    </div>
                                    <div className="card-footer bg-white">
                                        <h4 className="card-title">UX Design</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                                <div className="card shadow text-center">
                                    <div className="position-relative rounded-top progress-wrapper" data-color="#bdecf6">
                                        <div className="wave" data-progress="80%"></div>
                                    </div>
                                    <div className="card-footer bg-white">
                                        <h4 className="card-title">UI Design</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                                <div className="card shadow text-center">
                                    <div className="position-relative rounded-top progress-wrapper" data-color="#ffbcaa">
                                        <div className="wave" data-progress="70%"></div>
                                    </div>
                                    <div className="card-footer bg-white">
                                        <h4 className="card-title">Web Design</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Skills;