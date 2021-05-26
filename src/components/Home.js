// import dependencies 
import React from 'react'

// import files
import logo from '../../src/images/logo.png'
// Home component
function Home() {
    return (
        <>
            <section id="header" className="">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                                <h1>
                                    Welcome to <strong className="brand-name">Mau's</strong>
                                </h1>
                                <h2 className="my-3">
                                    <strong>
                                        PIZZA DONE RIGHT!!
                                        </strong>
                                </h2>
                                <div className="mt-3">
                                    <a href="" className="btn-get-started">Order Now</a>
                                </div>
                            </div>

                            {/* div for images */}
                            {/* order-1 dictates that the image will be displayed on top on mobile devices and order-lg-2 means the image will be displayed side by side on the larger screens */}
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={logo} className="img-fluid animated" alt="home"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
