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
                <section className="section skills">
                    <div className="container-fluid">
                        <div className='row'>
                            <div className="col-11 col-md-10 mx-auto">
                                <h2>Skills</h2>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-11 col-md-10 mx-auto">
                                <div className="row">
                                    <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                                        <h4>Design</h4>
                                        <ul className="pl-0">
                                            <li>UI/UX</li>
                                            <li>Web, Mobile</li>
                                            <li>Brand Development</li>
                                            <li>Interaction Design</li>
                                            <li>Responsive</li>
                                            <li>Video Production</li>
                                        </ul>
                                        <ul className="pl-0 mt-4">
                                            <li>Figma</li>
                                            <li>Adobe Creatives</li>
                                            <li>Design Frameworks</li>
                                            <li>User-Centered Design</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                                        <h4>FrontEnd Dev</h4>
                                        <ul className="pl-0">
                                            <li>Coding</li>
                                            <li>CMS</li>
                                            <li>GitHub</li>
                                            <li>SpreeCommerce</li>
                                            <li>Basic Backend</li>
                                            <li>Basic Deployment</li>
                                        </ul>
                                        <ul className="pl-0 mt-4">
                                            <li>ReactJS</li>
                                            <li>HTML</li>
                                            <li>CSS, SCSS, LESS</li>
                                            <li>JavaScript</li>
                                            <li>ReactJS</li>
                                            <li>NodeJs</li>
                                            <li>NPM Scripts</li>
                                        </ul>
                                        
                                    </div>
                                    <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                                        <h4>Digital Marketing</h4>
                                        <ul className="pl-0">
                                            <li>Analytics</li>
                                            <li>Semantic sites</li>
                                            <li>SEO, SEM</li>
                                            <li>Conversion Goals</li>
                                            <li>Email Marketing</li>
                                        </ul>
                                        <ul className="pl-0 mt-4">
                                            <li>Google Analytics</li>
                                            <li>Goodle Ads</li>
                                            <li>Maichimp</li>
                                            <li>SendinBlue</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                                        <h4>Soft Skills</h4>
                                        <ul className="pl-0">
                                            <li>Transparency </li>
                                            <li>Productivity</li>
                                            <li>Creativity</li>
                                            <li>Work Ethic</li>
                                            <li>Bilingual(EN,ES)</li>
                                            <li>Agile </li>
                                        </ul>
                                        <ul className="pl-0 mt-4">
                                            <li>Scrum</li>
                                            <li>Design Sprints</li>
                                            <li>Trello, Asana</li>
                                            <li>Jira</li>
                                            <li>GitHub, GitLab</li>
                                            <li>Pomodoro Technique</li>
                                        </ul>
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