import React from 'react'
import $ from 'jquery'
import MenuBar from '../components/navigations/MenuBar'
import Footer from '../components/navigations/Footer'

import './Layout.css'

class Layout extends React.Component {
    componentDidMount(){

        $(window).scroll(function () {
            if ($('.navigation').offset().top > 100) {
                $('.navigation').addClass('nav-bg');
            } else {
                $('.navigation').removeClass('nav-bg');
            }
          });
          // progress bar
          $('[data-progress]').each(function () {
            $(this).css({
                'bottom': $(this).data('progress')
            });
          });
          
    }
    render(){
        return(
            <React.Fragment>
                <MenuBar />
                <main className="main-content">
                    {this.props.children}
                </main>
                <Footer/>
            </React.Fragment>
        );
    }
}
export default Layout;