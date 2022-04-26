import React from 'react'
import $ from 'jquery'
import MenuBar from '../components/navigations/MenuBar'
import Footer from '../components/navigations/Footer'

import './Layout.scss'

class Layout extends React.Component {
   
    render(){
        return(
            <React.Fragment>
                <MenuBar currentPage={this.props.currentPage} />
                    <main className="main-content">
                        {this.props.children}
                    </main>
                <Footer/>
            </React.Fragment>
        );
    }
}
export default Layout;