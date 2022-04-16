import React from 'react'
import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            l3left :  "18%",
            l3top : "37%",
            l5left : "49%",
            l5top : "37%",
            l8left : "18%",
            l8top :"55%" }
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
                                    Hi, this is Félix<br/>
                                    UI/UX <span className="secondary">Designer-</span> & <br/>
                                    <span className="primary">FrontEnd</span> Developer
                                </h1>
                            </div>
                        </div>
                    </div>

                    
                    <div className="layer d-none d-lg-block" id="l3"
                         style={{ right: this.state.l3left, top: this.state.l3top  }}
                    >
                        <img src={ process.env.PUBLIC_URL + "images/illustrations/droid.png"} alt="bg-shape" />
                    </div>
                    <div className="layer d-none d-lg-block" id="l5"
                        style={{ right: this.state.l5left, top: this.state.l5top  }}
                    >
                        <img src={ process.env.PUBLIC_URL +"images/illustrations/paint.png"} alt="bg-shape" />
                    </div>
                    <div className="layer d-none d-lg-block" id="l8"
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