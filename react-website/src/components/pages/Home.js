import React from 'react'

import Experience from '../misc/Experience'
import Skills from '../misc/Skills'
import Header from '../misc/Header'
import Layout from '../../layout/Layout'

const Home = () => {
    return (
        <React.Fragment>
            <Layout>
                <Header />
                <Skills />
                <Experience />
            </Layout>
        </React.Fragment>
    )
}

export default Home;

/*
            <Pricing />
            <Testimonials />
*/