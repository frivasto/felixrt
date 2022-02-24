import React from 'react'
import { Link } from "react-router-dom"
import PortfolioShuffle from './PortfolioShuffle';

const HomePortfolio = () => {
    return (
        <React.Fragment>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="section-title">Portfolio</h2>
                        </div>
                    </div>
                    <PortfolioShuffle />
                </div>
            </section>
        </React.Fragment>
    )
}

export default HomePortfolio;