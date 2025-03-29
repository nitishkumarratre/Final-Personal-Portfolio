import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {


    // backtotop start

    // Smooth scrolling with gradual steps
    const smoothScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // backtotop end




    return (
        <>
            {/* Start Footer  */}
            <footer className="default-padding bg-cover" style={{ backgroundImage: 'url(assets/img/shape/1.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="footer-items text-center">
                                <a href="#" className="footer-logot"><img src="assets/img/mlogo.png" alt="Image Not Found" /></a>
                                <ul className="foter-menu">
                                    <li><NavLink onClick={smoothScrollToTop} to='/'>Home</NavLink></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#portfolio">Portfolio</a></li>
                                    <li><a href="#blog">Blog</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                                <p>Copyright © 2024 nitishkumarratre. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* End Footer  */}
        </>
    )
}

export default Footer
