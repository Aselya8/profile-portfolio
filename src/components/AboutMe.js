import React from "react";
import author from "../me.png"

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>
                        Hello, my name is Asel. I'm a Full-Stack Web Developer. 
                        I have been interested in software engineering for over 15 years. I began my journey by receiving a degree in information technology and have had a thirst for more knowledge. I received several certifications since moving to Silicon Valley.
                        <br />
                        However, willing and able to learn new technologies in order to impact team goals effectively.  
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
