import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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
                                {/* <li>
                                        <a className="smooth-menu" href="#pricing">Pricing</a>
                                    </li> */}
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
        </>
    )
}

export default Header
