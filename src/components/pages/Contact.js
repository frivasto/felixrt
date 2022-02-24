import React from 'react'
import Layout from '../../layout/Layout'
import ContactSection from '../misc/ContactSection'

const Contact = () => {
    return (
        <React.Fragment>
            <Layout currentPage="Contact">
                <section className="page-title bg-primary position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="text-white font-tertiary">Contact Me</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <ContactSection />
            </Layout>
        </React.Fragment>

    )
}

export default Contact;