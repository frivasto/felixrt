import React from 'react'

const MenuBar = () => {
    return (
        <footer className="bg-dark footer-section">
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5 className="text-light font-secondary">Email</h5>
                            <p className="text-white paragraph-lg">frivasto@gmail.com</p>
                        </div>
                        <div className="col-md-4">
                            <h5 className="text-light font-secondary">Phone</h5>
                            <p className="text-white paragraph-lg">+593 996435902</p>
                        </div>
                        <div className="col-md-4">
                            <h5 className="text-light font-secondary">Address</h5>
                            <p className="text-white paragraph-lg">Guayaquil City Centre, Ecuador</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-top text-center border-dark py-5">
                <p className="mb-0 text-light">No rights reserved. 
                      Inspire Yourself as needed. Designed &amp; Developed by <strong>Felixrt-</strong>
                </p>
            </div>
        </footer>
    )
}

export default MenuBar;