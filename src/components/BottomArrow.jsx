import React, { useEffect, useState } from 'react'
import { throttle } from 'lodash';

const BottomArrow = () => {

    // backtotop start

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        const throttledToggle = throttle(toggleVisibility, 200);
        window.addEventListener("scroll", throttledToggle);
        return () => window.removeEventListener("scroll", throttledToggle);
    }, []);

    const smoothScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
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
