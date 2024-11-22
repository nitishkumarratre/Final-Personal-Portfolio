import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Services = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location]);




    // smoothScrollToTop start

    // Smooth scrolling with gradual steps
    const smoothScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // smoothScrollToTop end


    return (
        <>
            <div id="services" className="services-style-one-area default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Services</h4>
                                <h2 className="title">My Quality Services</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {/* Single Item */}
                        <div className="col-xl-3 col-md-6 mb-30 wow fadeInUp">
                            <div className="service-style-one-item">
                                <img src="assets/img/icon/1.png" alt="Image Not Found" />
                                <h4><NavLink onClick={smoothScrollToTop} to="/services-details">Digital Marketing</NavLink></h4>
                                <p>
                                    Continue indulged speaking the was horrible for domestic position. Seeing get rather.
                                </p>
                                <NavLink onClick={smoothScrollToTop} to="/services-details" className="btn-style-four">
                                    <div className="icon"><img src="assets/img/icon/arrow.png" alt="Image Not Found" /></div> Read More
                                </NavLink>
                            </div>
                        </div>
                        {/* End Single Item */}
                        {/* Single Item */}
                        <div className="col-xl-3 col-md-6 mb-30 active wow fadeInUp" data-wow-delay="200ms">
                            <div className="service-style-one-item active">
                                <img src="assets/img/icon/2.png" alt="Image Not Found" />
                                <h4><NavLink onClick={smoothScrollToTop} to="/services-details">App Development</NavLink></h4>
                                <p>
                                    Continue indulged speaking the was horrible for domestic position. Seeing get rather.
                                </p>
                                <NavLink onClick={smoothScrollToTop} to="/services-details" className="btn-style-four">
                                    <div className="icon"><img src="assets/img/icon/arrow.png" alt="Image Not Found" /></div> Read More
                                </NavLink>
                            </div>
                        </div>
                        {/* End Single Item */}
                        {/* Single Item */}
                        <div className="col-xl-3 col-md-6 mb-30 wow fadeInUp" data-wow-delay="400ms">
                            <div className="service-style-one-item">
                                <img src="assets/img/icon/3.png" alt="Image Not Found" />
                                <h4><NavLink onClick={smoothScrollToTop} to="/services-details">UI/UX Design</NavLink></h4>
                                <p>
                                    Continue indulged speaking the was horrible for domestic position. Seeing get rather.
                                </p>
                                <NavLink onClick={smoothScrollToTop} to="/services-details" className="btn-style-four">
                                    <div className="icon"><img src="assets/img/icon/arrow.png" alt="Image Not Found" /></div> Read More
                                </NavLink>
                            </div>
                        </div>
                        {/* End Single Item */}
                        {/* Single Item */}
                        <div className="col-xl-3 col-md-6 mb-30 wow fadeInUp" data-wow-delay="600ms">
                            <div className="service-style-one-item">
                                <img src="assets/img/icon/4.png" alt="Image Not Found" />
                                <h4><NavLink onClick={smoothScrollToTop} to="/services-details">Web Design</NavLink></h4>
                                <p>
                                    Continue indulged speaking the was horrible for domestic position. Seeing get rather.
                                </p>
                                <NavLink onClick={smoothScrollToTop} to="/services-details" className="btn-style-four">
                                    <div className="icon"><img src="assets/img/icon/arrow.png" alt="Image Not Found" /></div> Read More
                                </NavLink>
                            </div>
                        </div>
                        {/* End Single Item */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
