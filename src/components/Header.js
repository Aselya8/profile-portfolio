import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hi, there I'm Asel Atakeev
                </h1>
                <Typed className="typed-text"
                strings={[ "Full-Stack Web Developer", "ReactJs", "NodeJs", "Java", "SQL" ]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="https://www.linkedin.com/in/aselya-atakeev"  className="btn-main-offer">contact me</a>
            </div>
        </div>
    )
}

export default Header;
