import React from 'react'
import Layout from '../../layout/Layout'
import ContactSection from '../misc/ContactSection'

const Contact = () => {
    return (
        <React.Fragment>
            <Layout currentPage="Contact">
                <section className="mt-5" />
            <ContactSection />
        </Layout>
     </React.Fragment>

    )
}

export default Contact;