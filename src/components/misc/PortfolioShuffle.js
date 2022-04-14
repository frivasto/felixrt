import React from 'react'
import $ from 'jquery'  
import Shuffle from 'shufflejs';
import { Modal } from 'bootstrap';
import { Link } from 'react-router-dom';

class PortfolioShuffle extends React.Component{

    constructor(props){
        super(props);
        this.state = {modalActive : false};
        this.state = {projectModal : null};
    }

    viewProject = () =>{
        this.setState({modalActive: true});
        var projectmodal =this.state.projectModal;
        projectmodal.show();
    }

    closeProject = () => {
        this.setState({modalActive: false});
    }

    componentDidMount(){
         var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
            itemSelector: '.shuffle-item',
            buffer: 1
        }); 
        $('input[name="shuffle-filter"]').on('change', function (evt) {
            var input = evt.currentTarget;
            if (input.checked) {
                myShuffle.filter(input.value);
            }
        });
        var modal =  new Modal(document.getElementById('exampleModal'),  {
            keyboard: true
        });
        this.setState({ projectModal: modal});
    }

    render(){
        return (
            <React.Fragment>        
                <section className="section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-12">
                                <div className="btn-group btn-group-toggle justify-content-center d-sm-flex d-inline-block" data-toggle="buttons">
                                    <label className="btn btn-sm btn-primary active">
                                        <input type="radio" name="shuffle-filter" value="all" />All
                                    </label>
                                    <label className="btn btn-sm btn-primary">
                                        <input type="radio" name="shuffle-filter" value="design" />UI/UX DESIGN
                                    </label>
                                    <label className="btn btn-sm btn-primary">
                                        <input type="radio" name="shuffle-filter" value="branding" />BRANDING
                                    </label>
                                    <label className="btn btn-sm btn-primary">
                                        <input type="radio" name="shuffle-filter" value="frontend" />FRONTEND DEV
                                    </label>
                                    <label className="btn btn-sm btn-primary">
                                        <input type="radio" name="shuffle-filter" value="analytics" />ANALYTICS
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row shuffle-wrapper portfolio-list">
                           {/*  <div className="col-lg-4 col-6 mb-4 shuffle-item thisbrand" data-groups="[&quot;design&quot;,&quot;branding&quot;]">
                                <div className="position-relative rounded hover-wrapper">
                                    <Link to='/Portfolio/ThisBrand'>
                                        <img src={ process.env.PUBLIC_URL + "/images/portfolio/thisbrand.png"} alt="This Brand" className="img-fluid rounded w-100 d-block" />
                                        <div className="hover-overlay">
                                            <div className="hover-content">
                                                <h4>Felixrt-</h4>
                                                <span>My personal Brand Development</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div> */}
                            <div className="col-lg-4 col-6 mb-4 shuffle-item kerubines" data-groups="[&quot;design&quot;,&quot;analytics&quot;,&quot;frontend&quot;]">
                                <div className="position-relative rounded hover-wrapper">
                                    <Link to='/Portfolio/Dalig'>
                                        <img src={ process.env.PUBLIC_URL + "/images/portfolio/dalig.png"} alt="Dalig" className="img-fluid rounded w-100 d-block" />
                                        <div className="hover-overlay">
                                            <div className="hover-content">
                                                <div className="hover-content">
                                                    <h4>DALIG</h4>
                                                    <span>Fitness Mobile App UI/UX Design</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6 mb-4 shuffle-item pentalogix" data-groups="[&quot;analytics&quot;,&quot;frontend&quot;]">
                                <div className="position-relative rounded hover-wrapper">
                                    <Link to='/Portfolio/Pentalogix'>
                                        <img src={ process.env.PUBLIC_URL + "/images/portfolio/pentalogix.png"} alt="PentaLogix" className="img-fluid rounded w-100 d-block" />
                                        <div className="hover-overlay">
                                            <div className="hover-content">
                                                <h4>PentaLogix Semantics</h4>
                                                <span>Semantic Web Redesign, Analytics Integration</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            {/* <div className="col-lg-4 col-6 mb-4 shuffle-item mokalu" data-groups="[&quot;design&quot;,&quot;frontend&quot;]">
                                <div className="position-relative rounded hover-wrapper">
                                    <Link to='/Portfolio/Mokalu'>
                                        <img src={ process.env.PUBLIC_URL + "/images/portfolio/mokalu.png"} alt="Mokalu" className="img-fluid rounded w-100 d-block" />
                                        <div className="hover-overlay">
                                            <div className="hover-content">
                                                <h4>Mokalu.com.ec</h4>
                                                <span>UI Design &amp; FrontEnd Dev</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div> */}
                           {/*  <div className="col-lg-4 col-6 mb-4 shuffle-item epico" data-groups="[&quot;frontend&quot;,&quot;design&quot;]">
                                <div className="position-relative rounded hover-wrapper">
                                    <Link to='/Portfolio/Epico'>
                                        <img src={ process.env.PUBLIC_URL + "/images/portfolio/epico.png"} alt="Epico" className="img-fluid rounded w-100 d-block" />
                                        <div className="hover-overlay">
                                            <div className="hover-content">
                                                <h4>Epico</h4>
                                                <span>Ecuadorian Entrepreneurship Center Web Redesign</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div> */}
                           {/*  <div className="col-lg-4 col-6 mb-4 shuffle-item emergency" data-groups="[&quot;frontend&quot;,&quot;design&quot;]">
                                <div className="position-relative rounded hover-wrapper">
                                    <Link to='/Portfolio/Emergency'>
                                        <img src={ process.env.PUBLIC_URL + "/images/portfolio/emergency.png"} alt="Emergency Radar" className="img-fluid rounded w-100 d-block" />
                                        <div className="hover-overlay">
                                            <div className="hover-content">
                                                <h4>Emergency Radar</h4>
                                                <span>Web App that collects information of Geolocated incidents</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div> */}
                           {/*  <div className="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;design&quot;,&quot;frontend&quot;,&quot;branding&quot;]">
                                <div className="position-relative rounded hover-wrapper">
                                    <Link to='/Portfolio/ThisSite'>
                                        <img src={ process.env.PUBLIC_URL + "/images/portfolio/thissite.png"} alt="This Site" className="img-fluid rounded w-100 d-block" />
                                        <div className="hover-overlay">
                                            <div className="hover-content">
                                                <h4>This Site</h4>
                                                <span>ReactJS Refresh</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                This Modal is not being used now.
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default PortfolioShuffle;