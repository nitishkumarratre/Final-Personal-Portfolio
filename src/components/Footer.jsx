import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {


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
            {/* Start Footer  */}
            <footer className="default-padding bg-cover" style={{ backgroundImage: 'url(assets/img/shape/1.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="footer-items text-center">
                                <a href="#" className="footer-logot"><img src="assets/img/logo.png" alt="Image Not Found" /></a>
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
