import React from 'react'
import PortfolioShuffle from '../misc/PortfolioShuffle';
import Layout from '../../layout/Layout'


class Portfolio extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Layout currentPage="Portfolio">
                    <section className="page-title bg-primary position-relative">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h1 className="text-white font-tertiary">Portfolio</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                    <PortfolioShuffle />
                </Layout>
            </React.Fragment>
        )
    }
}

export default Portfolio;