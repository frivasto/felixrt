import React from 'react'

const MenuBar = () => {
    return (
        <footer className="bg-dark footer-section">
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5 className="text-light">Email</h5>
                            <p className="text-white paragraph-lg font-secondary">frivasto@gmail.com</p>
                        </div>
                        <div className="col-md-4">
                            <h5 className="text-light">Phone</h5>
                            <p className="text-white paragraph-lg font-secondary">+593 996435902</p>
                        </div>
                        <div className="col-md-4">
                            <h5 className="text-light">Address</h5>
                            <p className="text-white paragraph-lg font-secondary">Guayaquil City Centre, Ecuador</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-top text-center border-dark py-5">
                <p className="mb-0 text-light">Copyright &copy;
                        {
                            new Date().getFullYear()
                        }
                     Designed &amp; Developed by <a className="text-white-50" href="Themefisher">Felixrt-</a>
                </p>
            </div>
        </footer>
    )
}

export default MenuBar;