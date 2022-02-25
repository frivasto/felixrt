import React from 'react'
import Layout from '../../layout/Layout'


class ThisSite extends React.Component{
    
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
                    <section className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h2 className="section-title">This site project</h2>
                                </div>
                                <div className="col-lg-8 mx-auto">
                                   
                                </div>
                            </div>
                        </div>
                    </section>
                </Layout>
            </React.Fragment>
        )
    }
}
export default ThisSite;