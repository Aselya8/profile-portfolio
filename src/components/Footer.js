import React from "react";
import {Link} from "react-scroll"
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    //RedditShareButton,
    //RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>San Francisco, CA</p>
                        </div>
                        <div className="d-flex">
                            <p>aselya.atakeeva@gmail.com </p>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to="home" className="footer-nav">Home</Link>
                                <br />
                                <Link smooth={true} to="about" className="footer-nav">About me</Link>
                                <br />
                                <Link smooth={true} to="skills" className="footer-nav">Skills</Link>
                            </div>
                            <div className="col">
                                <Link smooth={true} to="education"  className="footer-nav">Education</Link>
                                <br />
                                <Link smooth={true} to="portfolio"  className="footer-nav">Portfolio</Link>
                                <br />
                                <Link smooth={true} to="contacts"  className="footer-nav">Contacts</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://github.com/Aselya8"}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                            >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"https://www.linkedin.com/in/aselya-atakeev"}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                            >
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>
                            <LinkedinShareButton
                                url={"https://www.linkedin.com/in/aselya-atakeev"}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                            >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp; All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
