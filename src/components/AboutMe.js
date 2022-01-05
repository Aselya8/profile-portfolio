import React from "react";
import author from "../me.jpg"

const AboutMe = () => {
    return (
        <div className="container py-5">
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
                        Before I start developing website for you, we will discuss all the details of your niche with you, I will conduct a survey of your competitors and make a list of their advantages and weaknesses.

                        All this is necessery to give your customers something that your competitors do not provide, or to present it too, but better!

                        After the website is finished and ready to deploy and sll a product or service. It is essential that your potential clients know about you. I will create an advertising campaign for you in Google Adwords and Facebook!

                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
