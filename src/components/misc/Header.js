import React from 'react'
import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            l3left :  "200px",
            l3top : "40%",
            l5left : "250px",
            l5top : "20%",
            l8left : "40%",
            l8top :"15%" }
    }

      
    mouseParallax = (id, left, top, mouseX, mouseY, speed) => {
        var obj = document.getElementById(id);
        var parentObj = obj.parentNode,
            containerWidth = parseInt(parentObj.offsetWidth),
            containerHeight = parseInt(parentObj.offsetHeight);
        
        var newleft = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px' ;
        var newtop = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px' ;
        
        this.setState ({ [id+"left"] : newleft });
        this.setState ({ [id+"top"] : newtop });
        
    }

    componentDidMount(){
        this.setState ({ c3left : document.getElementById('l3').offsetParent  });
        this.setState ({ c3top : document.getElementById('l3').offsetTop });
        this.setState ({ c5left : document.getElementById('l5').offsetParent });
        this.setState ({ c5top : document.getElementById('l5').offsetTop });
        this.setState ({ c8left : document.getElementById('l8').offsetParent  });
        this.setState ({ c8top : document.getElementById('l8').offsetTop });
    }
    
    makeItDance = (e) => {    
        var parallaxBox = document.getElementById('parallax');
            var x = e.clientX - parallaxBox.offsetLeft,
                y = e.clientY - parallaxBox.offsetTop;

            this.mouseParallax('l3', this.state.c3left, this.state.c3top, x, y, 20);
            this.mouseParallax('l5', this.state.c5left, this.state.c5top, x, y, 30);
            this.mouseParallax('l8', this.state.c8left, this.state.c8top, x, y, 25);
    }
  
    render(){
        return (
            <React.Fragment>
                <section className="hero-area bg-primary" id="parallax">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-11 mx-auto">
                                <h1 className="cover-text font-tertiary">
                                    Hi, I'm Félix<br/>
                                    A <span className="primary">FrontEnd</span> Developer<br/>
                                    & UX/UI <span className="secondary">Designer-</span>
                                </h1>
                            </div>
                        </div>
                    </div>

                    
                    <div className="layer" id="l3"
                         style={{ right: this.state.l3left, top: this.state.l3top  }}

                    >
                        <img src={ process.env.PUBLIC_URL + "images/illustrations/droid.png"} alt="bg-shape" />
                    </div>
                    <div className="layer" id="l5"
                        style={{ right: this.state.l5left, top: this.state.l5top  }}
                    >
                        <img src={ process.env.PUBLIC_URL +"images/illustrations/paint.png"} alt="bg-shape" />
                    </div>
                    <div className="layer" id="l8"
                        style={{ right: this.state.l8left, top: this.state.l8top  }}>
                        <img src={ process.env.PUBLIC_URL +"images/illustrations/user.png"} alt="bg-shape" />
                    </div>

                    <ul className="list-unstyled ml-5 mt-5 position-relative zindex-1">
                        <li className="mb-3">
                            <a className="text-white" href="https://www.linkedin.com/in/frivasto" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={brands('linkedin')} size="xs" />
                            </a>
                        </li>
                        <li className="mb-3">
                            <a className="text-white" href="https://instagram.com/frivasto" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={brands('instagram')} size="xs" />
                            </a>
                        </li>
                        <li className="mb-3">
                            <a className="text-white" href="https://twitter.com/frivasto" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={brands('twitter')} size="xs" />
                            </a>
                        </li>
                    </ul>
                </section>
            </React.Fragment>
        )
    }
}

export default Header;