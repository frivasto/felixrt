import React from 'react'

import Header from '../misc/Header'
import Layout from '../../layout/Layout'
import HomeAbout from '../misc/HomeAbout'
import Skills from '../misc/Skills'
import Education from '../misc/Education'
import HomePortfolio from '../misc/HomePortfolio'
import ContactSection from '../misc/ContactSection'

const Home = () => {
    return (
        <React.Fragment>
            <Layout currentPage="Home">
                <Header />
                <HomePortfolio />
                <HomeAbout />
                <Skills />
                <Education />
                <ContactSection />
            </Layout>
        </React.Fragment>
    )
}

export default Home;