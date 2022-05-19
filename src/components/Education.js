import React from "react";


const Education = () => {
    return (
        <div id="education" className="education">
            <div className="d-flex justify-content-center my-5">
                <h1>education</h1>
            </div>
            <div className="container education-wrapper">
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                    <h3>Polytechnic College of International University of Kyrgyzstan</h3>
                    <p>
                    <br /> Communication Systems and Networks
                    <br /> - Bachelor of Computer Science
                    <br /> 
                    </p>
                    
                </div>
                </div>

                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                    <h3>Nucamp Coding Bootcamp/San Francisco,CA</h3>
                    <p>  
                    <br /> - Web Development Fundamentals - Certificate 
                    <br /> - Front End Web + Mobile Developer - Certificate 
                    <br /> - Full Stack Web and Mobile App Developer - Certificate
                    </p>
                    </div>
                </div>

                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                    <h3>Diablo Valley College/Pleasant Hill,CA</h3>
                    <p> - - Computer Information Systems
                    <br /> - In progress
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;