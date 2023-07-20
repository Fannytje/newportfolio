import React from "react";
import "./Footer.css";

export default function Footer() {
    return <div className="Footer">
        <div>
                <a href="https://www.linkedin.com/in/fanny-nordberg/">
                    <i className="fa-brands fa-linkedin"> </i>
                </a>
                <a href="mailto:fannytje2006@gmail.com">
                    <i className="fa-solid fa-square-envelope"></i>
                </a>
        </div>
        <div>
            <p>© Fanny Nordberg - 2023</p>
        </div>
    </div>
}