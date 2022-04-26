import React from 'react'
import PortfolioShuffle from '../misc/PortfolioShuffle';
import Layout from '../../layout/Layout'


class Portfolio extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Layout currentPage="Portfolio">
                    <PortfolioShuffle />
                </Layout>
            </React.Fragment>
        )
    }
}

export default Portfolio;