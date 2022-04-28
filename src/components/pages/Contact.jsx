import React from 'react'
import Layout from '../../layout/Layout'
import ContactSection from '../misc/ContactSection'

class Contact extends React.Component{

    componentDidMount() {
        document.title = "Felixrt- Contact me "; 
    }
    
    render(){
        return (
            <React.Fragment>
                <Layout currentPage="Contact">
                    <section className="mt-5" />
                <ContactSection />
            </Layout>
        </React.Fragment>

        )
    }
}

export default Contact;