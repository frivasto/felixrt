import React from 'react'
import Layout from '../../layout/Layout'


class ThisBrand extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Layout currentPage="Portfolio">
                    <section className="page-title bg-primary position-relative">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h1 className="text-white font-tertiary">This Brand</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h2 className="section-title">Felixrt- Brand Development</h2>
                                </div>
                                <div className="col-lg-8 mx-auto">
                                   <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/BDG1.jpg'} alt="BDG1"/>
                                   <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/BDG3.jpg'} alt="BDG3"/>
                                   <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/BDG4.jpg'} alt="BDG4"/>
                                   <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/BDG5.jpg'} alt="BDG5"/>
                                   <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/BDG6.jpg'} alt="BDG6"/>
                                   <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/BDG7.jpg'} alt="BDG7"/>
                                   <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/BDG8.jpg'} alt="BDG8"/>
                                   <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/BDG9.jpg'} alt="BDG9"/>
                                   <img className="portfolio-img" src={ process.env.PUBLIC_URL + '/images/portfolio/thisbrand/BDG10.jpg'} alt="BDG10"/>
                                </div>
                            </div>
                        </div>
                    </section>
                </Layout>
            </React.Fragment>
        )
    }
}
export default ThisBrand;