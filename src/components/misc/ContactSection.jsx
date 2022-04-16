import React from 'react'
import $ from 'jquery'
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            className="badge bg-danger mt-5"
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
             {label}
            
           
        </Link>
    );
};

class ContactSection extends React.Component {
    componentDidMount(){
        $('[data-background]').each(function () {
            $(this).css({
                'background-image': 'url(' + $(this).data('background') + ')'
            });
        });
    }
    render(){
        return (
            <React.Fragment>
                <section className="section section-on-footer" data-background="images/backgrounds/bg-dots.png">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <div className="bg-white rounded text-center p-5 shadow-down">
                                    <h4 className="mb-80">Contact Info</h4>
                                    <form action="#" className="row">
                                        <div className="col-md-6">
                                            <input type="text" id="name" name="name" placeholder="Full Name" className="form-control px-0 mb-4" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" id="email" name="email" placeholder="Email Address" className="form-control px-0 mb-4" required />
                                        </div>
                                        <div className="col-12">
                                        <textarea name="message" id="message" className="form-control px-0 mb-4"
                                            placeholder="Type Message Here" required></textarea>
                                        </div>
                                        <div className="col-lg-6 col-10 mx-auto">
                                        <ButtonMailto label="Send" mailto="mailto:no-reply@example.com" />
                                           
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default ContactSection;