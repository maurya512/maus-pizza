import React from 'react'
import { NavLink } from 'react-router-dom'

// import files
import pizza from '../../src/images/pizza1.png'

function OurStory() {
    return (
        <h1>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        How it all started at <strong className="brand-name">Mau's</strong>
                                    </h1>
                                    <h2 className="my-3">
                                        <strong>
                                            When my parents landed in the US 40 some years ago they worked hard to provide for me and my sisters. After a long day at work, pizza night was something that we looked forward to. My parents always had a dream of owning a pizza cafe where people would come for the pizza and stayed for the hospitality. 40 years later I plan to fulfill their dream.
                                            <p>

                                            </p>
                                            <p>
                                                Enjoy
                                            </p>
                                            Mau
                                        </strong>
                                    </h2>
                                    <div className="mt-3">
                                        {/* redirects the user to a menu page */}
                                        <NavLink to="/menu" className="btn-get-started">Order Now</NavLink>
                                    </div>
                                </div>

                                {/* div for images */}
                                {/* order-1 dictates that the image will be displayed on top on mobile devices and order-lg-2 means the image will be displayed side by side on the larger screens */}
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={pizza} className="img-fluid animated" alt="home" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </h1>
    )
}

export default OurStory
