import React from "react";
import { useEffect, useState } from "react";

export const BackToTop = () => {
    const [backToTop , setBackToTop] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 80) {
                setBackToTop(true);
            } else {
                setBackToTop(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const scollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className="backToTop_btn">
            {
                backToTop && (
                    <button style={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        width: "35px",
                        height: "40px",
                        border: "2px solid white",
                        borderRadius: "5px",
                        fontSize: "20px",
                        backgroundColor: "black"
                    }} onClick={scollUp}><p>▲</p></button>
                )
            }
        </div>
    )
}