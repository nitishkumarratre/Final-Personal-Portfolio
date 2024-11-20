import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import Header from '../components/Header';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import PromoBox from '../components/PromoBox';



const Homepage = () => {

    // for loading 
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
    // for loading end 


    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div>
                {/* preloader  */}
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
                {/* Header  */}
                <Header />

                {/* End Header */}
                {/* Start Banner  */}
                <div className="banner-style-one-area bg-gray" style={{ backgroundImage: 'url(assets/img/shape/4.png)' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="banner-style-one-items">
                                    <div className="info">
                                        <h1>I👋 am Nitish </h1>
                                        <h2>
                                            <span className="header-caption" id="page-top">
                                                {/* type headline start*/}
                                                <span className="cd-headline clip is-full-width">
                                                    {/* ROTATING TEXT */}
                                                    <span className="cd-words-wrapper">
                                                        <b className="is-visible">Full Stack Developer !</b>
                                                        <b className="is-hidden">Web Developer !</b>
                                                        <b className="is-hidden">Professional Coder !</b>
                                                        <b className="is-hidden">UI/UX Designer !</b>
                                                    </span>
                                                </span>
                                                {/* type headline end */}
                                            </span>
                                        </h2>
                                        <p>
                                            Hi, my name is Nitish Kumar Ratre and I began using WordPress when it first began. I’ve spent most of my waking hours for the last ten years designing, programming and operating WordPress sites.
                                        </p>
                                        <div className="flex-social mt-40">
                                            <div className="button">
                                                <a className="btn-style-regular" href="#contact"><span>Hire Me Now</span> <i className="fas fa-arrow-right" /></a>
                                            </div>
                                            <ul className="social-info">
                                                <li>
                                                    <a href="https://www.facebook.com" target='_blank'><i className="fab fa-facebook" /></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.linkedin.com" target='_blank'><i className="fab fa-linkedin-in" /></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.github.com" target='_blank'><i className="fab fa-github" /></a>
                                                </li>
                                                 <li>
                                                    <a href="https://www.whatsapp.com" target='_blank'><i className="fab fa-whatsapp" /></a>
                                                </li>
                                                 <li>
                                                    <a href="https://www.twitter.com" target='_blank'><i className="fab fa-twitter" /></a>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="thumb">
                                        <img src="assets/img/illustration/nkr.png" alt="Image Not Found" />
                                        <img src="assets/img/shape/1.png" alt="Image Not Found" />
                                        <img src="assets/img/shape/3.png" alt="Image Not Found" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Banner */}
                {/* Start About  */}
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

                {/* Start Services  */}

                <Services />

                {/* End Services */}

                {/* Start Portfolio  */}

                <Portfolio />

                {/* End Portfolio */}

                {/* Start Fun Fact  */}
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

                {/* Start Timeline */}
                <Resume />

                {/* End Timeline */}

                {/* Start Testimonial  */}
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

                {/* Start Faq */}
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
                {/* Start Contact  */}

                <Contact />

                {/* End Contact */}

                {/* Start Blog  */}
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

                {/* Start Promo box */}

                <PromoBox />

                {/* End Promo box */}

                {/* Start Footer  */}

                <Footer />

                {/* End Footer  */}
            </div>

        </>
    )
}

export default Homepage
