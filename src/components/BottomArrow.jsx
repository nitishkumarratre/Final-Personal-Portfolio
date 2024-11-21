import React, { useEffect, useState } from 'react'

const BottomArrow = () => {

    // backtotop start

    const [isVisible, setIsVisible] = useState(false);

    // Show the button when the user scrolls down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

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
                {isVisible && (
                    <div
                        className="arrow"
                        onClick={smoothScrollToTop}
                        style={{
                            position: "fixed",
                            bottom: "20px",
                            right: "20px",
                            backgroundColor: "#FFA500", // Orange color
                            color: "#fff",
                            width: "50px",
                            height: "50px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "20px",
                            fontWeight: "bold",
                            borderRadius: "50%",
                            cursor: "pointer",
                            transition: "opacity 0.3s, transform 0.3s",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            zIndex: 1000, // Ensures it stays above other elements
                        }}
                        aria-label="Scroll to Top"
                    >
                        ↑
                    </div>
                )}
            </div>
        </>
    )
}

export default BottomArrow
