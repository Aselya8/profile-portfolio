import React from "react";
import travel from "../images/travel.png";
import books from "../images/books.jpg";
import portfolio from "../images/portfolio.jpg";
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
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Aselya8/project-travel-company")}>https://github.com/Aselya8/project-travel-company</a>
            </>
        )
        PopupboxManager.open({ content })
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
    
  const openPopupboxBooks = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={books} alt="Books Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://city-guide-app-project.herokuapp.com/", "_blank")}>https://city-guide-app-project.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/city-guide-app", "_blank")}>https://github.com/8020Coding/city-guide-app</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigBooks = {
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
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://portfolio-rea-and-material-ui.herokuapp.com/", "_blank")}>https://portfolio-rea-and-material-ui.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/portfilio", "_blank")}>https://github.com/8020Coding/portfilio</a>
      </>
    )
    PopupboxManager.open({ content })
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
                    <div className="portfolio-image-box" onClick={openPopupboxBooks}>
                        <img className="portfolio-image" src={books} alt="Books React Native Project..." />
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
            <PopupboxContainer {...popupboxConfigBooks} />
            <PopupboxContainer {...popupboxConfigPortfolio} />
        </div>

    )
}


export default Portfolio;
