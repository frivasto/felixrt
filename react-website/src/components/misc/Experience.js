import React from 'react'
import './Experience.css'


const Home = () => {
    return (
        <React.Fragment>
            <section className="content-container">
                <div className="textArea"> 
                    <h2>Testimonials</h2>
                    <p>What others say about us.</p>
                </div>
                <div className="cust-container">
                    <img src="" alt="Avatar" style={{width:"90px"}}/>
                    <p><span>John Doe.</span> Content Writer.</p>
                    <p>Great attention to detail!</p>
                </div>

                <div className="cust-container">
                    <img src="" alt="Avatar" style={{width:"90px"}}/>
                    <p><span>Rebecca Flex.</span> Reporter</p>
                    <p>Nice enviroment to run my personal projects.</p>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home;