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
                        Hello, my name is Asel. I'm a Full-Stack Web Developer. Technologes I use is MERN(MongoDB, Express, ReactJS and NodeJS).
                        I have been interested in software engineering for over 20 years, and I began my journey by receiving a degree in information technology and have had a thirst for more knowledge. I received several certifications since moving to Silicon Valley. I am highly organized, I have outstanding attention to details, and I believe that prioritization is what makes the field of software development so successful. 
                        <br />
                        Learning to code inadvertently taught me to think critically and to effectively problem solve. I understand the logic. Learning to code has benefited me personally and professionally by encouraging me to take a step back and approach situations from a new perspective. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
