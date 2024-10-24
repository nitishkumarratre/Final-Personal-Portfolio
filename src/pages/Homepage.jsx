import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { NavLink } from 'react-router-dom';



const Homepage = () => {

    useEffect(() => {
        const svg = document.getElementById("preloaderSvg");
        const svgText = document.querySelector(".hero-section .intro_text svg text");

        const tl = gsap.timeline({
            onComplete: startStrokeAnimation,
        });

        const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
        const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

        tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
            delay: 1.5,
            y: -100,
            opacity: 0,
        })
            .to(svg, {
                duration: 0.5,
                attr: { d: curve },
                ease: "power2.easeIn",
            })
            .to(svg, {
                duration: 0.5,
                attr: { d: flat },
                ease: "power2.easeOut",
            })
            .to(".preloader", {
                y: -1500,
            })
            .to(".preloader", {
                zIndex: -1,
                display: "none",
            });

        function startStrokeAnimation() {
            if (svgText) {
                svgText.classList.add("animate-stroke");
            }
        }
    }, []);


    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div>
                {/* Header 
    ============================================= */}
                <div className="preloader">
                    <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
                        <path id="preloaderSvg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z" />
                    </svg>
                    <div className="preloader-heading">
                        <div className="load-text">
                            <span>L</span>
                            <span>o</span>
                            <span>a</span>
                            <span>d</span>
                            <span>i</span>
                            <span>n</span>
                            <span>g</span>
                        </div>
                    </div>
                </div>


                {/* Preloader Area End */}
                {/* Header 
    ============================================= */}
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
                                <NavLink onClick={backToTop} className="navbar-brand" to="/">
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
                                        <a className="smooth-menu" href="#services">Services</a>
                                    </li>
                                    <li>
                                        <a className="smooth-menu" href="#portfolio">Portfolio</a>
                                    </li>
                                    <li>
                                        <a className="smooth-menu" href="#resume">Resume</a>
                                    </li>
                                    <li>
                                        <a className="smooth-menu" href="#pricing">Pricing</a>
                                    </li>
                                    <li>
                                        <a className="smooth-menu" href="#contact">contact</a>
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
                {/* Start Banner 
    ============================================= */}
                <div className="banner-style-one-area bg-gray" style={{ backgroundImage: 'url(assets/img/shape/4.png)' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="banner-style-one-items">
                                    <div className="info">
                                        <h1>I👋 am Dalton </h1>
                                        <h2>
                                            <span className="header-caption" id="page-top">
                                                {/* type headline start*/}
                                                <span className="cd-headline clip is-full-width">
                                                    {/* ROTATING TEXT */}
                                                    <span className="cd-words-wrapper">
                                                        <b className="is-visible">Web Developer</b>
                                                        <b className="is-hidden">Professional Coder</b>
                                                        <b className="is-hidden">UI/UX Designer</b>
                                                    </span>
                                                </span>
                                                {/* type headline end */}
                                            </span>
                                        </h2>
                                        <p>
                                            Hi, my name is Dalton Grant and I began using WordPress when it first began. I’ve spent most of my waking hours for the last ten years designing, programming and operating WordPress sites.
                                        </p>
                                        <div className="flex-social mt-40">
                                            <div className="button">
                                                <a className="btn-style-regular" href="#contact"><span>Hire Me Now</span> <i className="fas fa-arrow-right" /></a>
                                            </div>
                                            <ul className="social-info">
                                                <li>
                                                    <a href="#"><i className="fab fa-facebook" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-linkedin-in" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-dribbble" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="thumb">
                                        <img src="assets/img/illustration/1.png" alt="Image Not Found" />
                                        <img src="assets/img/shape/1.png" alt="Image Not Found" />
                                        <img src="assets/img/shape/3.png" alt="Image Not Found" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Banner */}
                {/* Start About 
    ============================================= */}
                <div id="about" className="about-style-one-area bg-gray default-padding">
                    <div className="shape-style-one">
                        <img src="assets/img/shape/3.png" alt="Image Not Found" />
                        <img className="upDownScrol" src="assets/img/shape/8.png" alt="Image Not Found" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="fun-fact-style-one-items">
                                    <div className="fun-fact">
                                        <div className="counter">
                                            <div className="timer" data-to={12} data-speed={1000}>12</div>
                                            <div className="operator">+</div>
                                        </div>
                                        <span className="medium">Years of Experience</span>
                                    </div>
                                    <div className="fun-fact">
                                        <div className="counter">
                                            <div className="timer" data-to={138} data-speed={1000}>138</div>
                                            <div className="operator">+</div>
                                        </div>
                                        <span className="medium">Projects completed on 30 countries</span>
                                    </div>
                                </div>
                                <div className="clieents-list mt-40">
                                    <div className="d-flex">
                                        <div className="thumb">
                                            <img src="assets/img/team/14.jpg" alt="Image Not Found" />
                                            <img src="assets/img/team/15.jpg" alt="Image Not Found" />
                                            <img src="assets/img/team/16.jpg" alt="Image Not Found" />
                                            <img src="assets/img/team/17.jpg" alt="Image Not Found" />
                                        </div>
                                        <div className="info">
                                            <h5>20K+ Clients</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 pl-80 pl-md-15 pl-xs-15">
                                <div className="about-style-one-info">
                                    <p>
                                        As a skilled web developer, I specialize in creating responsive, user-friendly websites with a focus on modern design and efficient code. I excel in front-end development, with a deep understanding of HTML, CSS, JavaScript, and various frameworks. My passion is turning ideas into functional and aesthetically pleasing digital experiences.
                                    </p>
                                    <a className="btn-style-regular btn-border" href="#"><span>Learn More</span> <i className="fas fa-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="about-style-one-bottom-info mt-50">
                            <div className="row">
                                <div className="col-lg-8 pr-60 pr-md-15 pr-xs-15">
                                    <div className="img-container">
                                        <img src="assets/img/about/1.jpg" alt="Image Not Found" />
                                        <a href="https://www.youtube.com/watch?v=aTC_RNYtEb0" className="popup-youtube video-play-button">
                                            <i className="fas fa-play" />
                                            <div className="effect" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <img src="assets/img/about/2.jpg" alt="Image Not Found" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About */}
                {/* Start Services 
    ============================================= */}
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
                                    <h4><a href="services-details.html">Digital Marketing</a></h4>
                                    <p>
                                        Continue indulged speaking the was horrible for domestic position. Seeing get rather.
                                    </p>
                                    <a href="services-details.html" className="btn-style-four">
                                        <div className="icon"><img src="assets/img/icon/arrow.png" alt="Image Not Found" /></div> Read More
                                    </a>
                                </div>
                            </div>
                            {/* End Single Item */}
                            {/* Single Item */}
                            <div className="col-xl-3 col-md-6 mb-30 active wow fadeInUp" data-wow-delay="200ms">
                                <div className="service-style-one-item active">
                                    <img src="assets/img/icon/2.png" alt="Image Not Found" />
                                    <h4><a href="services-details.html">App Development</a></h4>
                                    <p>
                                        Continue indulged speaking the was horrible for domestic position. Seeing get rather.
                                    </p>
                                    <a href="services-details.html" className="btn-style-four">
                                        <div className="icon"><img src="assets/img/icon/arrow.png" alt="Image Not Found" /></div> Read More
                                    </a>
                                </div>
                            </div>
                            {/* End Single Item */}
                            {/* Single Item */}
                            <div className="col-xl-3 col-md-6 mb-30 wow fadeInUp" data-wow-delay="400ms">
                                <div className="service-style-one-item">
                                    <img src="assets/img/icon/3.png" alt="Image Not Found" />
                                    <h4><a href="services-details.html">UI/UX Design</a></h4>
                                    <p>
                                        Continue indulged speaking the was horrible for domestic position. Seeing get rather.
                                    </p>
                                    <a href="services-details.html" className="btn-style-four">
                                        <div className="icon"><img src="assets/img/icon/arrow.png" alt="Image Not Found" /></div> Read More
                                    </a>
                                </div>
                            </div>
                            {/* End Single Item */}
                            {/* Single Item */}
                            <div className="col-xl-3 col-md-6 mb-30 wow fadeInUp" data-wow-delay="600ms">
                                <div className="service-style-one-item">
                                    <img src="assets/img/icon/4.png" alt="Image Not Found" />
                                    <h4><a href="services-details.html">Web Design</a></h4>
                                    <p>
                                        Continue indulged speaking the was horrible for domestic position. Seeing get rather.
                                    </p>
                                    <a href="services-details.html" className="btn-style-four">
                                        <div className="icon"><img src="assets/img/icon/arrow.png" alt="Image Not Found" /></div> Read More
                                    </a>
                                </div>
                            </div>
                            {/* End Single Item */}
                        </div>
                    </div>
                </div>
                {/* End Services */}
                {/* Start Portfolio 
    ============================================= */}
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
                                                            <a href="project-details.html"><i className="fas fa-long-arrow-right" /></a>
                                                        </div>
                                                    </div>
                                                    <h4><a href="project-details.html">Document manager application</a></h4>
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
                                                            <a href="project-details.html"><i className="fas fa-long-arrow-right" /></a>
                                                        </div>
                                                    </div>
                                                    <h4><a href="project-details.html">Dynamic mobile app development</a></h4>
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
                                                            <a href="project-details.html"><i className="fas fa-long-arrow-right" /></a>
                                                        </div>
                                                    </div>
                                                    <h4><a href="project-details.html">Printable professional brochure templates</a></h4>
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
                                                            <a href="project-details.html"><i className="fas fa-long-arrow-right" /></a>
                                                        </div>
                                                    </div>
                                                    <h4><a href="project-details.html">Create stunning product flexible mockups</a></h4>
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
                                                            <a href="project-details.html"><i className="fas fa-long-arrow-right" /></a>
                                                        </div>
                                                    </div>
                                                    <h4><a href="project-details.html">Decor design vectors illustrations</a></h4>
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
                                                            <a href="project-details.html"><i className="fas fa-long-arrow-right" /></a>
                                                        </div>
                                                    </div>
                                                    <h4><a href="project-details.html">Making smart software smartphones</a></h4>
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
                {/* End Portfolio */}
                {/* Start Fun Fact 
    ============================================= */}
                <div className="fun-factor-area default-padding overflow-hidden">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h4 className="sub-title">Top Skills</h4>
                                    <h2 className="title">See my expertise</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="fun-fact-style-two-items text-center">
                            {/* Single item */}
                            <div className="funfact-style-two-item wow fadeInUp">
                                <div className="icon">
                                    <img src="assets/img/icon/xd.png" alt="Image Not Found" />
                                </div>
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer" data-to={80} data-speed={2000}>80</div>
                                        <div className="operator">%</div>
                                    </div>
                                    <span className="medium">Adobe XD</span>
                                </div>
                            </div>
                            {/* End Single item */}
                            {/* Single item */}
                            <div className="funfact-style-two-item wow fadeInUp" data-wow-delay="100ms">
                                <div className="icon">
                                    <img src="assets/img/icon/figma.png" alt="Image Not Found" />
                                </div>
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer" data-to={90} data-speed={2000}>90</div>
                                        <div className="operator">%</div>
                                    </div>
                                    <span className="medium">Figma</span>
                                </div>
                            </div>
                            {/* End Single item */}
                            {/* Single item */}
                            <div className="funfact-style-two-item wow fadeInUp" data-wow-delay="200ms">
                                <div className="icon">
                                    <img src="assets/img/icon/wordpress.png" alt="Image Not Found" />
                                </div>
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer" data-to={70} data-speed={2000}>70</div>
                                        <div className="operator">%</div>
                                    </div>
                                    <span className="medium">WordPress</span>
                                </div>
                            </div>
                            {/* End Single item */}
                            {/* Single item */}
                            <div className="funfact-style-two-item wow fadeInUp" data-wow-delay="300ms">
                                <div className="icon">
                                    <img src="assets/img/icon/photoshop.png" alt="Image Not Found" />
                                </div>
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer" data-to={80} data-speed={2000}>80</div>
                                        <div className="operator">%</div>
                                    </div>
                                    <span className="medium">Photoshop</span>
                                </div>
                            </div>
                            {/* End Single item */}
                            {/* Single item */}
                            <div className="funfact-style-two-item wow fadeInUp" data-wow-delay="400ms">
                                <div className="icon">
                                    <img src="assets/img/icon/diamon.png" alt="Image Not Found" />
                                </div>
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer" data-to={60} data-speed={2000}>60</div>
                                        <div className="operator">%</div>
                                    </div>
                                    <span className="medium">Sketch</span>
                                </div>
                            </div>
                            {/* End Single item */}
                            {/* Single item */}
                            <div className="funfact-style-two-item wow fadeInUp" data-wow-delay="500ms">
                                <div className="icon">
                                    <img src="assets/img/icon/ai.png" alt="Image Not Found" />
                                </div>
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer" data-to={90} data-speed={2000}>90</div>
                                        <div className="operator">%</div>
                                    </div>
                                    <span className="medium">Illustrator</span>
                                </div>
                            </div>
                            {/* End Single item */}
                        </div>
                    </div>
                </div>
                {/* End Fun Factor */}
                {/* Start Timeline 
    ============================================= */}
                <div id="resume" className="timeline-area default-padding bg-gray">
                    <div className="container">
                        <div className="time-line-style-one-box">
                            <div className="row guttex-xl">
                                <div className="col-lg-6">
                                    <h2>My Expertise</h2>
                                    <div className="time-style-one-items">
                                        {/* Single Item */}
                                        <div className="timeline-style-one-item wow fadeInUp">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>Lead Developer</h4>
                                                    <p>
                                                        Blockdots, London
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>2022 - Present</span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. sectors of the economy or areas of culture sed mauris hendrerit, laoreet smart software.
                                                </p>
                                            </div>
                                        </div>
                                        {/* End Single Item */}
                                        {/* Single Item */}
                                        <div className="timeline-style-one-item wow fadeInUp">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>Full Stack Web Developer</h4>
                                                    <p>
                                                        Parsons, The New School
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>2021 - 2022</span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. sectors of the economy or areas of culture sed mauris hendrerit, laoreet smart software.
                                                </p>
                                            </div>
                                        </div>
                                        {/* End Single Item */}
                                        {/* Single Item */}
                                        <div className="timeline-style-one-item wow fadeInUp">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>UI Designer</h4>
                                                    <p>
                                                        House of Life, Leeds
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>2018 - 2023</span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. sectors of the economy or areas of culture sed mauris hendrerit, laoreet smart software.
                                                </p>
                                            </div>
                                        </div>
                                        {/* End Single Item */}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h2>Education Background</h2>
                                    <div className="time-style-one-items">
                                        {/* Single Item */}
                                        <div className="timeline-style-one-item wow fadeInUp">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>Programming Course</h4>
                                                    <p>
                                                        Harverd University
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>2006 - 2014</span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. sectors of the economy or areas of culture sed mauris hendrerit, laoreet smart software.
                                                </p>
                                            </div>
                                        </div>
                                        {/* End Single Item */}
                                        {/* Single Item */}
                                        <div className="timeline-style-one-item wow fadeInUp">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>Graphic Design Course</h4>
                                                    <p>
                                                        Blockdots, London
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>2016 - 2020</span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. sectors of the economy or areas of culture sed mauris hendrerit, laoreet smart software.
                                                </p>
                                            </div>
                                        </div>
                                        {/* End Single Item */}
                                        {/* Single Item */}
                                        <div className="timeline-style-one-item wow fadeInUp">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>Web design course</h4>
                                                    <p>
                                                        University of California
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>2012 - 2015</span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. sectors of the economy or areas of culture sed mauris hendrerit, laoreet smart software.
                                                </p>
                                            </div>
                                        </div>
                                        {/* End Single Item */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Timeline */}
                {/* Start Partner 
    ============================================= */}
                <div className="partner-style-one-area text-center default-padding bottom-less overflow-hidden">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="site-heading text-center">
                                    <h4 className="sub-title">Partner</h4>
                                    <h2 className="title">With The World Premier 80+ Brands</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-full">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="partner-style-one-items">
                                    {/* Single Item */}
                                    <div className="partner-style-one-item wow fadeInLeft">
                                        <img src="assets/img/partner/1.png" alt="Image Not Found" />
                                    </div>
                                    {/* End Single Item */}
                                    {/* Single Item */}
                                    <div className="partner-style-one-item wow fadeInLeft">
                                        <img src="assets/img/partner/2.png" alt="Image Not Found" />
                                    </div>
                                    {/* End Single Item */}
                                    {/* Single Item */}
                                    <div className="partner-style-one-item wow fadeInLeft">
                                        <img src="assets/img/partner/3.png" alt="Image Not Found" />
                                    </div>
                                    {/* End Single Item */}
                                    {/* Single Item */}
                                    <div className="partner-style-one-item wow fadeInLeft">
                                        <img src="assets/img/partner/4.png" alt="Image Not Found" />
                                    </div>
                                    {/* End Single Item */}
                                </div>
                                <div className="partner-style-one-items">
                                    {/* Single Item */}
                                    <div className="partner-style-one-item wow fadeInRight">
                                        <img src="assets/img/partner/5.png" alt="Image Not Found" />
                                    </div>
                                    {/* End Single Item */}
                                    {/* Single Item */}
                                    <div className="partner-style-one-item wow fadeInRight">
                                        <img src="assets/img/partner/6.png" alt="Image Not Found" />
                                    </div>
                                    {/* End Single Item */}
                                    {/* Single Item */}
                                    <div className="partner-style-one-item wow fadeInRight">
                                        <img src="assets/img/partner/7.png" alt="Image Not Found" />
                                    </div>
                                    {/* End Single Item */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Partner */}
                {/* Start Testimonial 
    ============================================= */}
                <div className="testimonial-style-one-area default-padding bg-gray">
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
                {/* Start Pricing 
    ============================================= */}
                <div id="pricing" className="pricing-style-one-area default-padding bg-light">
                    <div className="shape-right-top">
                        <img src="assets/img/shape/15.png" alt="Image Not Found" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="site-heading text-center">
                                    <h4 className="sub-title">Pricing</h4>
                                    <h2 className="title">The best pricing plans to get your best</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            {/* Single Item */}
                            <div className="col-lg-6 pricing-one-single">
                                <div className="pricing-style-one wow fadeInUp">
                                    <div className="pricing-top">
                                        <div className="right">
                                            <i className="fab fa-wordpress" />
                                        </div>
                                        <div className="left">
                                            <h4>WordPress Development</h4>
                                            <p>
                                                Simple and flexible per - user pricing
                                            </p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="price">
                                            <h2><sup>$</sup>48</h2>
                                        </div>
                                        <ul>
                                            <li>1 Page with Elementor</li>
                                            <li>Design Customization</li>
                                            <li>Responsive Design</li>
                                            <li>1 Page with Elementor</li>
                                            <li>Design Customization</li>
                                            <li>Responsive Design</li>
                                        </ul>
                                        <div className="button mt-30">
                                            <a className="btn-style-regular" href="#contact"><span>Order Now</span> <i className="fas fa-arrow-right" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Item */}
                            {/* Single Item */}
                            <div className="col-lg-6 pricing-one-single">
                                <div className="pricing-style-one wow fadeInUp" data-wow-delay="200ms">
                                    <div className="pricing-top">
                                        <div className="right">
                                            <i className="fab fa-bootstrap" />
                                        </div>
                                        <div className="left">
                                            <h4>Static frontend design</h4>
                                            <p>
                                                Simple and flexible per - user pricing
                                            </p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="price">
                                            <h2><sup>$</sup>28</h2>
                                        </div>
                                        <ul>
                                            <li>2 Page with Bootstrap5</li>
                                            <li>Design implement</li>
                                            <li>Responsive Design</li>
                                            <li>2 Page with Bootstrap5</li>
                                            <li>Design implement</li>
                                            <li>Responsive Design</li>
                                        </ul>
                                        <div className="button mt-30">
                                            <a className="btn-style-regular btn-border" href="#contact"><span>Order Now</span> <i className="fas fa-arrow-right" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Item */}
                        </div>
                    </div>
                </div>
                {/* End Pricing */}
                {/* Start Faq 
    ============================================= */}
                <div className="faq-style-one-area default-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="thumb-style-one">
                                    <img src="assets/img/about/3.jpg" alt="Image Not Found" />
                                    <div className="chat-card">
                                        <p>Can't find what your are loking for you?</p>
                                        <h5>I would like to chat with you</h5>
                                        <a href="#"><i className="fab fa-facebook-messenger" /></a>
                                        <img src="assets/img/shape/12.png" alt="Image Not Found" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="faq-style-one-items">
                                    <h4 className="sub-title">Faq</h4>
                                    <h2>Frequently Asked Questions</h2>
                                    <div className="accordion mt-30" id="faqAccordion">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Faq */}
                {/* Start Contact 
    ============================================= */}
                <div id="contact" className="contact-style-one-area default-padding bg-gray">
                    <div className="container">
                        <div className="contact-style-one-items">
                            <h1 className="fixed-text">Contact Me</h1>
                            <div className="row">
                                <div className="col-lg-6">
                                    <form action="https://validthemes.net/site-template/antux/assets/mail/contact.php" method="POST" className="contact-form contact-form">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input className="form-control" id="name" name="name" placeholder="Name" type="text" />
                                                    <span className="alert-error" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" id="email" name="email" placeholder="Email*" type="email" />
                                                    <span className="alert-error" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" />
                                                    <span className="alert-error" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group comments">
                                                    <textarea className="form-control" id="comments" name="comments" placeholder="Tell Us About Project *" defaultValue={""} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <button className="btn-style-regular" type="submit" name="submit" id="submit">
                                                    <span>Get in Touch</span> <i className="fas fa-arrow-right" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* Alert Message */}
                                        <div className="col-lg-12 alert-notification">
                                            <div id="message" className="alert-msg" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="contact-illustration">
                                <img src="assets/img/illustration/5.png" alt="Image Not Found" />
                                <img src="assets/img/shape/13.png" alt="Image Not Found" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Contact */}
                {/* Start Blog 
    ============================================= */}
                <div id="blog" className="blog-area home-blog default-padding bottom-less">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h4 className="sub-title">Blog Insight</h4>
                                    <h2 className="title">Valuable insights to change your startup idea</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            {/* Single Item */}
                            <div className="col-xl-4 col-md-6 col-lg-6 mb-30">
                                <div className="home-blog-style-one-item wow fadeInUp">
                                    <div className="home-blog-thumb">
                                        <img src="assets/img/blog/1.jpg" alt="Image not Found" />
                                    </div>
                                    <div className="content">
                                        <ul className="home-blog-meta">
                                            <li>
                                                <a href="#">Design</a>
                                            </li>
                                            <li>July 24, 2024</li>
                                        </ul>
                                        <div className="info">
                                            <h4 className="blog-title">
                                                <a href="blog-single-with-sidebar.html">Picked up brussels burger signications with ham efforts.</a>
                                            </h4>
                                            <a href="blog-single-with-sidebar.html" className="btn-read-more">Read More <i className="fas fa-long-arrow-right" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Item */}
                            {/* Single Item */}
                            <div className="col-xl-4 col-md-6 col-lg-6 mb-30">
                                <div className="home-blog-style-one-item wow fadeInUp">
                                    <div className="home-blog-thumb" data-wow-delay="200ms">
                                        <img src="assets/img/blog/2.jpg" alt="Image not Found" />
                                    </div>
                                    <div className="content">
                                        <ul className="home-blog-meta">
                                            <li>
                                                <a href="#">Mockup</a>
                                            </li>
                                            <li>October 18, 2024</li>
                                        </ul>
                                        <div className="info">
                                            <h4 className="blog-title">
                                                <a href="blog-single-with-sidebar.html">This prefabrice passive house is highly sustainable with intent</a>
                                            </h4>
                                            <a href="blog-single-with-sidebar.html" className="btn-read-more">Read More <i className="fas fa-long-arrow-right" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Item */}
                            {/* Single Item */}
                            <div className="col-xl-4 col-md-6 col-lg-6 mb-30">
                                <div className="home-blog-style-one-item wow fadeInUp" data-wow-delay="400ms">
                                    <div className="home-blog-thumb">
                                        <img src="assets/img/blog/3.jpg" alt="Image not Found" />
                                    </div>
                                    <div className="content">
                                        <ul className="home-blog-meta">
                                            <li>
                                                <a href="#">Discuss</a>
                                            </li>
                                            <li>August 26, 2024</li>
                                        </ul>
                                        <div className="info">
                                            <h4 className="blog-title">
                                                <a href="blog-single-with-sidebar.html">Announcing if attachment resolution sentim commercial.</a>
                                            </h4>
                                            <a href="blog-single-with-sidebar.html" className="btn-read-more">Read More <i className="fas fa-long-arrow-right" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Item */}
                        </div>
                    </div>
                </div>
                {/* End Blog */}
                {/* Start Promo box
    ============================================= */}
                <div className="promot-box-area default-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2">
                                <div className="promo-box-items text-center">
                                    <h2>Hello👋i'm available for freelance work</h2>
                                    <h4>For quick response: <a href="skype:example123?chat"><i className="fab fa-skype" /> Chat now</a></h4>
                                    <div className="button mt-40">
                                        <a className="btn-style-regular" href="#contact"><span>Hire Me Now </span> <i className="fas fa-arrow-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Promo box */}
                {/* Start Footer 
    ============================================= */}
                <footer className="default-padding bg-cover" style={{ backgroundImage: 'url(assets/img/shape/1.jpg)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="footer-items text-center">
                                    <a href="#" className="footer-logot"><img src="assets/img/logo.png" alt="Image Not Found" /></a>
                                    <ul className="foter-menu">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="service.html">Services</a></li>
                                        <li><a href="projects.html">Portfolio</a></li>
                                        <li><a href="blog-with-sidebar.html">Blog</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                    <p>Copyright © 2024 Antux. All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </>
    )
}

export default Homepage
