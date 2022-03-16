import React from 'react'
import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

class Header extends React.Component {


      
    mouseParallax(id, left, top, mouseX, mouseY, speed) {
        var obj = document.getElementById(id);
        var parentObj = obj.parentNode,
            containerWidth = parseInt(parentObj.offsetWidth),
            containerHeight = parseInt(parentObj.offsetHeight);
        obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
        obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
    }
    
    componentDidMount(){    
        var parallaxBox = $('parallax');
        var
      
        c2left = document.getElementById('l2').offsetLeft,
        c2top = document.getElementById('l2').offsetTop,
        c3left = document.getElementById('l3').offsetLeft,
        c3top = document.getElementById('l3').offsetTop,
        c4left = document.getElementById('l4').offsetLeft,
        c4top = document.getElementById('l4').offsetTop;

        parallaxBox.onmousemove = function (event) {
            event = event || window.event;
            var x = event.clientX - parallaxBox.offsetLeft,
                y = event.clientY - parallaxBox.offsetTop;

            /*  mouseParallax('l1', c1left, c1top, x, y, 5); */
            this.mouseParallax('l2', c2left, c2top, x, y, 25);
            this.mouseParallax('l3', c3left, c3top, x, y, 20);
            this.mouseParallax('l4', c4left, c4top, x, y, 35);
        };
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

                    <div class="layer" id="l2">
                        <img src={ process.env.PUBLIC_URL + "images/illustrations/dots-cyan.png"} alt="bg-shape" />
                    </div>
                    <div class="layer" id="l3">
                        <img src={ process.env.PUBLIC_URL + "images/illustrations/leaf-orange.png"} alt="bg-shape" />
                    </div>
                    <div class="layer" id="l4">
                        <img src={ process.env.PUBLIC_URL + "images/illustrations/dots-orange.png"} alt="bg-shape" />
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