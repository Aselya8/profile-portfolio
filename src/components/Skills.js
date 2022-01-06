import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faCss3, faHtml5, faNodeJs, faBootstrap, faJava, faGit, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";


const Skills = () => {
    return (
        <div className="skills">
            <h1 className="py-5">my tehnical skills</h1>
                <div className="container">
                    <div className="row justify-content beetween mx-auto">
                    <div className="col-md-3 col-sm-6">
                    
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faHtml5} size="2x" /></div>
                                <h3>Html5
                                </h3>
                        </div>

                        <div className="col-md-3 col-sm-6">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faCss3} size="2x" /></div>
                            <h3>Css3
                            </h3>
                    </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faBootstrap} size="2x" /></div>
                                <h3>Bootstrap
                                </h3>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faJs} size="2x" /></div>
                                <h3>Javascript
                                </h3>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faReact} size="2x" /></div>
                                <h3>React Js
                                </h3>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faNodeJs} size="2x" /></div>
                                <h3>Node JS
                                </h3>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faReact} size="2x" /></div>
                                <h3>React Native
                                </h3>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faJava} size="2x" /></div>
                                <h3>Java
                                </h3>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                                <h3>RESTful APIs
                                </h3>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faGit} size="2x" /></div>
                                <h3>Git
                                </h3>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faGithub} size="2x" /></div>
                                <h3>GitHub
                                </h3>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                                <h3>MongoDB
                                </h3>
                        </div>
                        
                    </div>
                </div>
        </div>
    )
}

export default Skills;
