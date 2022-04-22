import React from "react";
import logo from "../logo.png";
import {Link} from "react-scroll"
// React Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { LinkedinIcon } from "react-share";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
            <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}} />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only"></span></Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="about" className="nav-link" href="#">About me</Link>
                    </li>
                    <li className="nav-item">
                        <Link  smooth={true} to="skills" className="nav-link" href="#">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="education" className="nav-link" href="#">Education</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="portfolio" className="nav-link" href="#">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true}  to="contacts" className="nav-link" href="#">Contacts</Link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    )
}

export default Navbar

