import React, { useEffect } from 'react'
import Footer from './Footer';
import PromoBox from './PromoBox';
import { NavLink } from 'react-router-dom';
import BottomArrow from './BottomArrow';

const ServicesDetails = () => {


    // backtotop start

    // Smooth scrolling with gradual steps
    const smoothScrollToTop = () => {
        const scrollStep = -window.scrollY / 50; // Controls speed (smaller number = slower)
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15); // Interval duration in milliseconds
    };

    // backtotop end


    return (
        <>
            <div>

                {/* Header  */}

                <header>
                    {/* Start Navigation */}
                    <nav className="navbar mobile-sidenav navbar-box navbar-default validnavs navbar-sticky">
                        {/* Start Top Search */}
                        <div className="top-search">
                            <div className="container-xl">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-search" /></span>
                                    <input type="text" className="form-control" placeholder="Search" />
                                    <span className="input-group-addon close-search"><i className="fa fa-times" /></span>
                                </div>
                            </div>
                        </div>
                        {/* End Top Search */}
                        <div className="container nav-box d-flex justify-content-between align-items-center">
                            {/* Start Header Navigation */}
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                    <i className="fa fa-bars" />
                                </button>
                                <NavLink onClick={smoothScrollToTop} className="navbar-brand" to="/services-details">
                                    <img src="assets/img/logo.png" className="logo" alt="Logo" />
                                </NavLink>

                            </div>
                            {/* End Header Navigation */}
                            {/* Collect the nav links, forms, and other content for toggling */}
                            <div className="collapse navbar-collapse" id="navbar-menu">
                                <img src="assets/img/logo.png" alt="Logo" />
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                    <i className="fa fa-times" />
                                </button>
                                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle active" data-toggle="dropdown">Home</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="/">Home Version Light</a></li>
                                            <li><a href="/dark">Home Version Dark</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <NavLink className="smooth-menu" to="/#services">Services</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="smooth-menu" to="/#portfolio">Portfolio</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="smooth-menu" to="/#resume">Resume</NavLink>
                                    </li>
                                    {/* <li>
                                        <a className="smooth-menu" href="#pricing">Pricing</a>
                                    </li> */}
                                    <li>
                                        <NavLink className="smooth-menu" to="/#contact">contact</NavLink>
                                    </li>
                                </ul>
                            </div>{/* /.navbar-collapse */}
                            <div className="nav-right">
                                <div className="attr-right">
                                    {/* Start Atribute Navigation */}
                                    <div className="attr-nav attr-box">
                                        <ul>
                                            <li className="button">
                                                <a className="smooth-menu" href="#contact">Let's Talk <i className="fas fa-comment-alt" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* End Atribute Navigation */}
                                </div>
                            </div>
                        </div>
                        {/* Overlay screen for menu */}
                        <div className="overlay-screen" />
                        {/* End Overlay screen for menu */}
                    </nav>
                    {/* End Navigation */}
                </header>

                {/* End Header */}
                {/* Start Breadcrumb  */}
                <div className="breadcrumb-area text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                                <h1>Professional service websites design</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li><NavLink to="/"><i className="fas fa-home" /> Home</NavLink></li>
                                        <li className="active">Services</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrumb */}
                {/* Star Services Details Area */}
                <div className="services-details-area default-padding-bottom">
                    <div className="container">
                        <div className="services-details-items">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="service-single-thumb">
                                        <img src="assets/img/banner/3.jpg" alt="Thumb" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-50">
                                <div className="col-lg-7">
                                    <h2>Best influencer marketing services</h2>
                                    <p>
                                        We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue cannot foresee. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled data structures manages data in technology. Dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble.
                                    </p>
                                </div>
                                <div className="col-lg-5 pl-60 pl-md-15 pl-xs-15">
                                    <p>
                                        New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled data.
                                    </p>
                                    <ul className="list-style-one">
                                        <li>Social media marketing</li>
                                        <li>Search engine optimization (seo)</li>
                                        <li>Public Relations</li>
                                    </ul>
                                </div>
                                <div className="mt-50 mt-xs-40">
                                    <h2>My work process</h2>
                                    <div className="process-style-one">
                                        <div className="process-style-one-item">
                                            <span>01</span>
                                            <h4>Research</h4>
                                            <p>
                                                Excuse Deal say over contain performance from comparison new melancholy themselves.
                                            </p>
                                        </div>
                                        <div className="process-style-one-item">
                                            <span>02</span>
                                            <h4>Concept</h4>
                                            <p>
                                                Excuse Deal say over contain performance from comparison new melancholy themselves.
                                            </p>
                                        </div>
                                        <div className="process-style-one-item">
                                            <span>03</span>
                                            <h4>Implement</h4>
                                            <p>
                                                Excuse Deal say over contain performance from comparison new melancholy themselves.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Services Details Area */}
                {/* Star Services Details Area */}
                <div className="services-details-area default-padding bg-gray">
                    <div className="container">
                        <div className="services-details-items">
                            <div className="d-grid colums-2">
                                <div className="thumb-style-two">
                                    <img src="assets/img/about/1.jpg" alt="Image Not Found" />
                                </div>
                                <div className="item">
                                    <h2>Any questions find here.</h2>
                                    <div className="accordion" id="faqAccordion">
                                        <div className="accordion-item accordion-style-one">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    May i see your work samples?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-style-one">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    What are your rates?
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-style-one">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    How do you prefer to communicate?
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-style-one">
                                            <h2 className="accordion-header" id="headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    How to create an custom order?
                                                </button>
                                            </h2>
                                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Services Details Area */}
                {/* Start Testimonial  */}
                <div className="testimonial-style-one-area default-padding">
                    <div className="shape-left-top">
                        <img src="assets/img/shape/10.png" alt="Image Not Found" />
                    </div>
                    <div className="container">
                        <div className="heading-left">
                            <div className="row">
                                <div className="col-xl-6">
                                    <h4 className="sub-title">Testimonials</h4>
                                    <h2 className="title">Clients Testimonials</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="testimonial-style-one-items">
                                    <div className="testimonial-style-one-carousel swiper">
                                        {/* Additional required wrapper */}
                                        <div className="swiper-wrapper">
                                            {/* Single item */}
                                            <div className="swiper-slide">
                                                <div className="testimonial-style-one">
                                                    <div className="item">
                                                        <div className="thumb">
                                                            <div className="inner">
                                                                <img src="assets/img/illustration/2.png" alt="Image Not Found" />
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <div className="tm-review">
                                                                <div className="top">
                                                                    <h5>Reviews On</h5>
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <div className="bottom">
                                                                    <img src="assets/img/partner/9.png" alt="Image Not Found" />
                                                                    <p>4.9/ 60 Reviews</p>
                                                                </div>
                                                            </div>
                                                            <p>
                                                                "Thanks to your web agency team for their professional work. The website they created for my business exceeded my expectations, and my clients have given positive feedback about its design and user-friendliness."
                                                            </p>
                                                            <div className="tm-footer">
                                                                <div className="provider">
                                                                    <h4>Brooklyn Simmons</h4>
                                                                    <span>UI/UX DESIGNER</span>
                                                                </div>
                                                                <span>01</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single item */}
                                            {/* Single item */}
                                            <div className="swiper-slide">
                                                <div className="testimonial-style-one">
                                                    <div className="item">
                                                        <div className="thumb">
                                                            <div className="inner">
                                                                <img src="assets/img/illustration/3.png" alt="Image Not Found" />
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <div className="tm-review">
                                                                <div className="top">
                                                                    <h5>Reviews On</h5>
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <div className="bottom">
                                                                    <img src="assets/img/partner/9.png" alt="Image Not Found" />
                                                                    <p>4.9/ 60 Reviews</p>
                                                                </div>
                                                            </div>
                                                            <p>
                                                                "Thanks to your web agency team for their professional work. The website they created for my business exceeded my expectations, and my clients have given positive feedback about its design and user-friendliness."
                                                            </p>
                                                            <div className="tm-footer">
                                                                <div className="provider">
                                                                    <h4>Brooklyn Simmons</h4>
                                                                    <span>UI/UX DESIGNER</span>
                                                                </div>
                                                                <span>02</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single item */}
                                            {/* Single item */}
                                            <div className="swiper-slide">
                                                <div className="testimonial-style-one">
                                                    <div className="item">
                                                        <div className="thumb">
                                                            <div className="inner">
                                                                <img src="assets/img/illustration/4.png" alt="Image Not Found" />
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <div className="tm-review">
                                                                <div className="top">
                                                                    <h5>Reviews On</h5>
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <div className="bottom">
                                                                    <img src="assets/img/partner/9.png" alt="Image Not Found" />
                                                                    <p>4.9/ 60 Reviews</p>
                                                                </div>
                                                            </div>
                                                            <p>
                                                                "Thanks to your web agency team for their professional work. The website they created for my business exceeded my expectations, and my clients have given positive feedback about its design and user-friendliness."
                                                            </p>
                                                            <div className="tm-footer">
                                                                <div className="provider">
                                                                    <h4>Brooklyn Simmons</h4>
                                                                    <span>UI/UX DESIGNER</span>
                                                                </div>
                                                                <span>03</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single item */}
                                        </div>
                                    </div>
                                    {/* Navigation */}
                                    <div className="testimonial-pagination">
                                        <div className="swiper-pagination" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Testimonial */}
                {/* Start Promo box */}

                <PromoBox />

                {/* End Promo box */}

                {/* Start Footer  */}

                <Footer />

                {/* End Footer */}

                {/* arrow for back to top  */}

                <BottomArrow />

                {/* arrow for back to top end  */}

            </div>

        </>
    )
}

export default ServicesDetails
