import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

    // backtotop start

    const smoothScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // backtotop end

    // Function to close the navbar on mobile after menu click
    const closeNavbar = () => {
        const navbarToggle = document.querySelector('.navbar-toggle');
        if (navbarToggle) {
            navbarToggle.click(); // Simulate a click to close the navbar
        }
    };

    return (
        <>
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
                                    <a className="smooth-menu mx-3" href="#services" onClick={closeNavbar}>Services</a>
                                </li>
                                <li>
                                    <a className="smooth-menu mx-3" href="#portfolio" onClick={closeNavbar}>Portfolio</a>
                                </li>
                                <li>
                                    <a className="smooth-menu mx-3" href="#skills" onClick={closeNavbar}>Skills</a>
                                </li>

                                <li>
                                    <a className="smooth-menu mx-3" href="#resume" onClick={closeNavbar}>Resume</a>
                                </li>
                                <li>
                                    <a className="smooth-menu mx-3" href="#contact" onClick={closeNavbar}>Contact</a>
                                </li>
                            </ul>
                        </div>
                        {/* /.navbar-collapse */}
                        <div className="nav-right">
                            <div className="attr-right">
                                {/* Start Atribute Navigation */}
                                <div className="attr-nav attr-box">
                                    <ul>
                                        <li className="button">
                                            {/* <a className="smooth-menu" href="NITISH_KUMAR.pdf">See Resume!!! <i className="fas fa-comment-alt" /></a> */}
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
        </>
    )
}

export default Header
