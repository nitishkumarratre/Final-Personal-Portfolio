import React from 'react'
import { NavLink } from 'react-router-dom';

const Portfolio = () => {

    // smoothScrollToTop start

    // Smooth scrolling with gradual steps
    const smoothScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // smoothScrollToTop end

    return (
        <>
            <div id="portfolio" className="portfolio-style-one-area default-padding bg-gray">
                <div className="shape-top-left">
                    <img src="assets/img/shape/9.png" alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Portfolio</h4>
                                <h2 className="title">My Recent Work</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 gallery-content">
                            <div className="magnific-mix-gallery gallery-masonary">
                                <div id="gallery-masonary" className="gallery-items colums-3">
                                    {/* Single Item */}
                                    <div className="gallery-item">
                                        <div className="gallery-style-one">
                                            <img src="assets/img/projects/1.jpg" alt="Thumb" />
                                            <div className="info">
                                                <div className="overlay">
                                                    <div className="content">
                                                        <ul className="pf-tags">
                                                            <li>
                                                                <a href="#">Web</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Coding</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="icon">
                                                        <NavLink onClick={smoothScrollToTop} to="/project-details"><i className="fas fa-long-arrow-right" /></NavLink>
                                                    </div>
                                                </div>
                                                <h4><NavLink onClick={smoothScrollToTop} to="/project-details">Document manager application</NavLink></h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Item */}
                                    {/* Single Item */}
                                    <div className="gallery-item">
                                        <div className="gallery-style-one">
                                            <img src="assets/img/projects/2.jpg" alt="Thumb" />
                                            <div className="info">
                                                <div className="overlay">
                                                    <div className="content">
                                                        <ul className="pf-tags">
                                                            <li>
                                                                <a href="#">Software</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Mobile</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="icon">
                                                        <NavLink onClick={smoothScrollToTop} to="/project-details"><i className="fas fa-long-arrow-right" /></NavLink>
                                                    </div>
                                                </div>
                                                <h4><NavLink onClick={smoothScrollToTop} to="/project-details">Dynamic mobile app development</NavLink></h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Item */}
                                    {/* Single Item */}
                                    <div className="gallery-item">
                                        <div className="gallery-style-one">
                                            <img src="assets/img/projects/3.jpg" alt="Thumb" />
                                            <div className="info">
                                                <div className="overlay">
                                                    <div className="content">
                                                        <ul className="pf-tags">
                                                            <li>
                                                                <a href="#">Brochure</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Design</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="icon">
                                                        <NavLink onClick={smoothScrollToTop} to="/project-details"><i className="fas fa-long-arrow-right" /></NavLink>
                                                    </div>
                                                </div>
                                                <h4><NavLink onClick={smoothScrollToTop} to="/project-details">Printable professional brochure templates</NavLink></h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Item */}
                                    {/* Single Item */}
                                    <div className="gallery-item">
                                        <div className="gallery-style-one">
                                            <img src="assets/img/projects/6.jpg" alt="Thumb" />
                                            <div className="info">
                                                <div className="overlay">
                                                    <div className="content">
                                                        <ul className="pf-tags">
                                                            <li>
                                                                <a href="#">Brand</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Mockup</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="icon">
                                                        <NavLink onClick={smoothScrollToTop} to="/project-details"><i className="fas fa-long-arrow-right" /></NavLink>
                                                    </div>
                                                </div>
                                                <h4><NavLink onClick={smoothScrollToTop} to="/project-details">Create stunning product flexible mockups</NavLink></h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Item */}
                                    {/* Single Item */}
                                    <div className="gallery-item">
                                        <div className="gallery-style-one">
                                            <img src="assets/img/projects/5.jpg" alt="Thumb" />
                                            <div className="info">
                                                <div className="overlay">
                                                    <div className="content">
                                                        <ul className="pf-tags">
                                                            <li>
                                                                <a href="#">Design</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Art</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="icon">
                                                        <NavLink onClick={smoothScrollToTop} to="/project-details"><i className="fas fa-long-arrow-right" /></NavLink>
                                                    </div>
                                                </div>
                                                <h4><NavLink onClick={smoothScrollToTop} to="/project-details">Decor design vectors illustrations</NavLink></h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Item */}
                                    {/* Single Item */}
                                    <div className="gallery-item">
                                        <div className="gallery-style-one">
                                            <img src="assets/img/projects/4.jpg" alt="Thumb" />
                                            <div className="info">
                                                <div className="overlay">
                                                    <div className="content">
                                                        <ul className="pf-tags">
                                                            <li>
                                                                <a href="#">Music</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Video</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="icon">
                                                        <NavLink onClick={smoothScrollToTop} to="/project-details"><i className="fas fa-long-arrow-right" /></NavLink>
                                                    </div>
                                                </div>
                                                <h4><NavLink onClick={smoothScrollToTop} to="/project-details">Making smart software smartphones</NavLink></h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Item */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="load-more-info text-center mt-60 mt-xs-30">
                                        <p>
                                            Are you interested to show more portfolios? <a href="#">Load More</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
