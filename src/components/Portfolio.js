import React from "react";
import travel from "../images/travel.png";
import reactNative from "../images/react-native-project-photo.png";
import portfolio from "../images/portfolio.png";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";




//fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";


const Portfolio = () => {

    //Travel
    const openPopupboxTravel = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={travel} alt="Travel Company Project..." />
                <p>
                <br />A responsive website that is fully functional, would allow a user to search for any place
                <br />This project was used purely to get comfortable with designing with Bootstrap.
                </p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://sun-travel.netlify.app/", "_blank")}>https://sun-travel.netlify.app</a>
        <br />
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Aselya8/project-travel-company")}>https://github.com/Aselya8/project-travel-company</a>
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({  content, config: {
          titleBar: {  text: "Travel Company Website with Bootstrap"  }
},
});
    }

    const popupboxConfigTravel = {
        titleBar: {
            enable: true,
            text: "Portfolio Project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //
    //React Native Project
    
  const openPopupboxReactNativeApp = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={reactNative} alt="React Native Project..." />
        <p>
        <br />A React Native application in which the user can search for any place to visit in Kyrgyzstan. 
        <br />After logging in to their account, the user can save and add favorite place. 
        <br />Technologies used: Javascript, React JS, React Native, API's, React Redux, React Native Elements.</p>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Aselya8/React-native-project", "_blank")}>https://github.com/Aselya8/React-native-project</a>
      </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({  content, config: {
      titleBar: {  text: "Mobile application with React Native"  }
},
});
  }

  const popupboxConfigReactNativeApp = {
    titleBar: {
      enable: true,
      text: "Portfolio Project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

//
  // Portfolio Project
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={portfolio} alt="Portfolio Project..." />
        <p>
        <br />This is portfolio project. I used tools as React Hooks, bootstrap, react-particles, 
        <br />react-popupbox, react-responsive-carousel.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Aselya8/portfolio-project-react", "_blank")}>https://github.com/Aselya8/portfolio-project-react</a>
      </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({  content, config: {
      titleBar: {  text: "Portfolio Project with React"  }
},
});
  }

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Poftfolio  Project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }
  
  //

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">projects</h1>
                <div className="image-box-wrapper row row-cols-auto justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxTravel}>
                        <img className="portfolio-image" src={travel} alt="Travel Company Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxReactNativeApp}>
                        <img className="portfolio-image" src={reactNative} alt="React Native Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
                        <img className="portfolio-image" src={portfolio} alt="Portfolio React Bootstrap Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <popupboxConfigTravel {...popupboxConfigTravel} />
            <PopupboxContainer {...popupboxConfigReactNativeApp} />
            <PopupboxContainer {...popupboxConfigPortfolio} />
        </div>

    )
}


export default Portfolio;
