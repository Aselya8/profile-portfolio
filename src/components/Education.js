import React from "react";


const Education = () => {
    return (
        <div id="education" className="education">
            <div className="d-flex justify-content-center my-5">
                <h1>education & Courses</h1>
            </div>
            <div className="container education-wrapper">
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                    <h3>Polytechnic College of International University of Kyrgyzstan</h3>
                    <p> Communication Systems and Networks
                    <br /> September 2006 — June 2009
                    <br />
                    <br /> 
                    </p>
                    </div>
                </div>

                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                    <h3>Diablo Valley College/Pleasant Hill,CA</h3>
                    <p> Computer Information Systems
                    <br /> January 2020 - Present
                    </p>
                    </div>
                </div>

                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                    <h3>Nucamp Coding Bootcamp/San Francisco,CA</h3>
                    <p> Full Stack Web and Mobile App Developer
                    <br /> May 2021 - November 2021 
                    </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Education;