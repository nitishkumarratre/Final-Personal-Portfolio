import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import BottomArrow from '../components/BottomArrow';
import PromoBox from '../components/PromoBox';


const ProjectDetails = () => {




    // backtotop start

    // Smooth scrolling with gradual steps
    const smoothScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // backtotop end

    return (
        <>
            <div>

                {/* Header */}
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
                                <NavLink onClick={smoothScrollToTop} className="navbar-brand" to="/">
                                    <img src="assets/img/mlogo.png" className="logo" alt="Logo" />
                                </NavLink>

                            </div>
                            {/* End Header Navigation */}
                            {/* Collect the nav links, forms, and other content for toggling */}
                            <div className="collapse navbar-collapse" id="navbar-menu">
                                <img src="assets/img/mlogo.png" alt="Logo" />
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                    <i className="fa fa-times" />
                                </button>
                                <ul className="nav navbar-nav navbar-right gap-10" data-in="fadeInDown" data-out="fadeOutUp">
                                    <li className="dropdown mx-3">
                                        <a href="#" className="dropdown-toggle active" data-toggle="dropdown">Home</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="/">Home Version Light</a></li>
                                            <li><a href="/dark">Home Version Dark</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="smooth-menu mx-3" href="/#services" >Services</a>
                                    </li>
                                    <li>
                                        <a className="smooth-menu mx-3" href="/#portfolio" >Portfolio</a>
                                    </li>
                                    <li>
                                        <a className="smooth-menu mx-3" href="/#skills" >Skills</a>
                                    </li>

                                    <li>
                                        <a className="smooth-menu mx-3" href="/#resume" >Resume</a>
                                    </li>
                                    <li>
                                        <a className="smooth-menu mx-3" href="/#contact" >Contact</a>
                                    </li>
                                </ul>
                            </div>{/* /.navbar-collapse */}
                            <div className="nav-right">
                                <div className="attr-right">
                                    {/* Start Atribute Navigation */}
                                    <div className="attr-nav attr-box">
                                        <ul>
                                            <li className="button">
                                                {/* <a className="smooth-menu" href="#contact">Let's Talk <i className="fas fa-comment-alt" /></a> */}
                                                <a className="smooth-menu" href="NITISH_KUMAR.pdf" target='_blank'>My Resume!!! </a>
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
                {/* Start Breadcrumb */}
                <div className="breadcrumb-area text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                                <h1>Digital marketing and analytical solution</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li><a href="#"><i className="fas fa-home" /> Home</a></li>
                                        <li className="active">Project</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrumb */}
                {/* Start Background Move */}
                <div className="banner-animation-zoom overflow-hidden">
                    <div className="container">
                        <div className="image-move-bg">
                            <div className="animation-zoom-banner" id="js-hero">
                                <img src="assets/img/banner/1.jpg" alt="Image Not Found" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Background Move */}
                {/* Star Project Details Area */}
                <div className="project-details-items default-padding">
                    <div className="container">
                        <div className="top-info">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5 left-info mb-xs-40 mb-md-50">
                                    <div className="project-single-info">
                                        <ul>
                                            <li>
                                                Client <span>themeforest.validthemes.com</span>
                                            </li>
                                            <li>
                                                Date <span>25 February, 2022</span>
                                            </li>
                                            <li>
                                                Service <span>Web Development</span>
                                            </li>
                                            <li>
                                                Address <span>1401, 21st Street STE R4569, California</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="right-info col-xl-8 col-lg-7 pl-50 pl-md-15 pl-xs-15 mt-md-10">
                                    <h2>Description</h2>
                                    <p>
                                        Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget urna potenti cum vestibulum cras. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum fringilla facilisi volutpat fusce pharetra felis sapien varius quisque class convallis praesent est sollicitudin donec nulla venenatis, cursus fermentum netus posuere sociis porta risus habitant malesuada nulla habitasse hymenaeos.
                                    </p>
                                    <p>
                                        Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. convallis praesent est sollicitudin donec nulla venenatis, cursus fermentum.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-details-items default-padding-bottom">
                    <div className="container">
                        <div className="project-thumb mt-md--25 mt-xs--25">
                            <div className="row">
                                <div className="col-md-7">
                                    <img src="assets/img/projects/9.jpg" alt="Image Not Found" />
                                </div>
                                <div className="col-md-5">
                                    <img src="assets/img/projects/4.jpg" alt="Image Not Found" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-details-items default-padding bg-gray">
                    <div className="container">
                        <div className="item-grid-container">
                            <div className="single-grid">
                                <div className="item-grid-colum">
                                    <div className="left-info">
                                        <h2>Background</h2>
                                    </div>
                                    <div className="right-info">
                                        <p>
                                            Contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence
                                        </p>
                                        <p>
                                            New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="single-grid">
                                <div className="item-grid-colum">
                                    <div className="left-info">
                                        <h2>The Challenges</h2>
                                    </div>
                                    <div className="right-info">
                                        <p>
                                            Contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence
                                        </p>
                                        <p>
                                            New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                        </p>
                                        <h3>Continue indulged speaking the horrible for domestic.</h3>
                                        <ul className="list-style-one">
                                            <li>Social media marketing</li>
                                            <li>Search engine optimization (seo)</li>
                                            <li>Public Relations</li>
                                        </ul>
                                        <img src="assets/img/banner/2.jpg" alt="Image Not Found" />
                                    </div>
                                </div>
                            </div>
                            <div className="single-grid">
                                <div className="item-grid-colum">
                                    <div className="left-info">
                                        <h2>The Solution</h2>
                                    </div>
                                    <div className="right-info">
                                        <p>
                                            Contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence
                                        </p>
                                        <p>
                                            New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-pagination default-padding-bottom bg-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="project-paginvation-items mt-xs--25 mt-md--25">
                                    <div className="project-previous">
                                        <a href="#">
                                            <div className="icon"><i className="fas fa-angle-double-left" /></div>
                                            <div className="nav-title"> Previus Post <h5>Discovery incommode</h5></div>
                                        </a>
                                    </div>
                                    <div className="project-all">
                                        <a href="#"><i className="fas fa-th-large" /></a>
                                    </div>
                                    <div className="project-next">
                                        <a href="#">
                                            <div className="nav-title">Next Post <h5>Discovery incommode</h5></div>
                                            <div className="icon"><i className="fas fa-angle-double-right" /></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Project Details Area */}
                {/* Start Promo box */}
                <PromoBox />
                {/* End Promo box */}

                {/* Start Footer  */}
                <footer className="default-padding bg-cover" style={{ backgroundImage: 'url(assets/img/shape/1.jpg)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="footer-items text-center">
                                    <a href="#" className="footer-logot"><img src="assets/img/logo.png" alt="Image Not Found" /></a>
                                    <ul className="foter-menu">
                                        <li><NavLink onClick={smoothScrollToTop} to='/'>Home</NavLink></li>
                                        <li><NavLink to="/#services">Services</NavLink></li>
                                        <li><NavLink to="/#portfolio">Portfolio</NavLink></li>
                                        <li><NavLink to="/#blog">Blog</NavLink></li>
                                        <li><NavLink to="/#contact">Contact</NavLink></li>
                                    </ul>
                                    <p>Copyright © 2024 nitishkumarratre. All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* End Footer */}

                {/* arrow for back to top  */}

                <BottomArrow />

                {/* arrow for back to top end  */}
            </div>

        </>
    )
}

export default ProjectDetails
