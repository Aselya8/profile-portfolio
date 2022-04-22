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
                        I create responsive websites that are displayed on all devices desktops and smartphones.
                        <br />
                        Supportive and enthusiastic team player dedicated to streamlining processes and efficiently resolving project issues. Dedicated to perfecting software before final release cycles.
                        I'm happiest when I'm creating, learning, exploring and thinking about how to make things better. 

                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
