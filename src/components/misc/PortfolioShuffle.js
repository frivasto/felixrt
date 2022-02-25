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
                                <div className="btn-group btn-group-toggle justify-content-center d-flex" data-toggle="buttons">
                                    <label className="btn btn-sm btn-primary active">
                                        <input type="radio" name="shuffle-filter" value="all" />All
                                    </label>
                                    <label className="btn btn-sm btn-primary">
                                        <input type="radio" name="shuffle-filter" value="design" />UI/UX Design
                                    </label>
                                    <label className="btn btn-sm btn-primary">
                                        <input type="radio" name="shuffle-filter" value="branding" />BRANDING
                                    </label>
                                    <label className="btn btn-sm btn-primary">
                                        <input type="radio" name="shuffle-filter" value="illustration" />ILLUSTRATION
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row shuffle-wrapper portfolio-list">
                            <div className="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;design&quot;,&quot;illustration&quot;]">
                                <div className="position-relative rounded hover-wrapper">
                                    <Link to='/Portfolio/ThisBrand'>
                                        <img src={ process.env.PUBLIC_URL + "/images/portfolio/thisbrand.png"} alt="This Brand" className="img-fluid rounded w-100 d-block" />
                                        <div className="hover-overlay">
                                            <div className="hover-content">
                                                <h4>This Brand</h4>
                                                <span>Felixrt- Brand Development</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;branding&quot;]">
                                <div className="position-relative rounded hover-wrapper">
                                    <img src={ process.env.PUBLIC_URL + "/images/portfolio/item-2.png"} alt="Portfolio 8" className="img-fluid rounded w-100 d-block" />
                                    <div className="hover-overlay">
                                        <div className="hover-content">
                                        <a className="btn btn-light btn-sm" href="#!">view project</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;illustration&quot;]">
                                <div className="position-relative rounded hover-wrapper">
                                <img src={ process.env.PUBLIC_URL + "/images/portfolio/item-3.png"} alt="Portfolio 7" className="img-fluid rounded w-100 d-block" />
                                <div className="hover-overlay">
                                    <div className="hover-content">
                                    <a className="btn btn-light btn-sm" href="#!">view project</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;design&quot;,&quot;branding&quot;]">
                                <div className="position-relative rounded hover-wrapper">
                                <img src={ process.env.PUBLIC_URL + "/images/portfolio/item-6.png"} alt="Portfolio 1" className="img-fluid rounded w-100 d-block" />
                                <div className="hover-overlay">
                                    <div className="hover-content">
                                    <a className="btn btn-light btn-sm" href="#!">view project</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;illustration&quot;]">
                                <div className="position-relative rounded hover-wrapper">
                                <img src={ process.env.PUBLIC_URL + "/images/portfolio/item-8.png"} alt="Portfolio 2" className="img-fluid rounded w-100 d-block" />
                                <div className="hover-overlay">
                                    <div className="hover-content">
                                        <a className="btn btn-light btn-sm" href="#!">view project</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;design&quot;]">
                                <div className="position-relative rounded hover-wrapper">
                                <img src={ process.env.PUBLIC_URL + "/images/portfolio/item-5.png"} alt="Portfolio 3" className="img-fluid rounded w-100 d-block" />
                                <div className="hover-overlay">
                                    <div className="hover-content">
                                    <a className="btn btn-light btn-sm" href="#!">view project</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;design&quot;,&quot;illustration&quot;,&quot;branding&quot;]">
                                <div className="position-relative rounded hover-wrapper">
                                    <img src={ process.env.PUBLIC_URL + "/images/portfolio/item-3.png"} alt="Portfolio 5" className="img-fluid rounded w-100 d-block" />
                                    <div className="hover-overlay">
                                        <div className="hover-content">
                                        <a className="btn btn-light btn-sm" href="#!">view project</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6 mb-4 shuffle-item illustration" data-groups="[&quot;illustration&quot;]">
                                <div className="position-relative rounded hover-wrapper">
                                    <img src={ process.env.PUBLIC_URL + "/images/portfolio/item-7.png"} alt="Portoflio 6" className="img-fluid rounded w-100 d-block" />
                                    <div className="hover-overlay">
                                        <div className="hover-content">
                                        <a className="btn btn-light btn-sm" href="#!">view project</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                My body is here
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