import React from "react";
import certificate1 from "../images/certificate1.png";
import certificate2 from "../images/certificate2.png";
import certificate3 from "../images/certificate3.png";
//added an new certificate
import certificate4 from "../images/certificate4.png";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";




//fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";


const Certificates = () => {

    //certificte1
    const openPopupboxCertificate1 = () => {
        const content = (
            <>
                <img className="certificate-image-popupbox" src={certificate1} alt="Certificate1..." />
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({  content, config: {
          titleBar: {  text: "Web Development Fundamentals"  }
},
});
    }

    const popupboxConfigCertificate1 = {
        titleBar: {
            enable: true,
            text: "Web Development Fundamentals."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //
    //certificate2
    
  const openPopupboxCertificate2 = () => {
    const content = (
      <>
        <img className="certificate-image-popupbox" src={certificate2} alt="Certificate2..." />
      </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({  content, config: {
      titleBar: {  text: "Front End Web + Mobile Developer"  }
},
});
  }

  const popupboxConfigCertificate2 = {
    titleBar: {
      enable: true,
      text: "Front End Web + Mobile Developer"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

//
  // certificate3
  const openPopupboxCertificate3 = () => {
    const content = (
      <>
        <img className="certificate-image-popupbox" src={certificate3} alt="Certificate3..." />
      </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({  content, config: {
      titleBar: {  text: "Full Stack Web and Mobile App Developer"  }
},
});
  }

  const popupboxConfigCertificate3 = {
    titleBar: {
      enable: true,
      text: "Full Stack Web and Mobile App Developer."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }
  
  //


  // certificate4
  const openPopupboxCertificate4 = () => {
    const content = (
      <>
        <img className="certificate-image-popupbox" src={certificate4} alt="Certificate4..." />
      </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({  content, config: {
      titleBar: {  text: "Application Development - JAVA Intensive"  }
},
});
  }

  const popupboxConfigCertificate4 = {
    titleBar: {
      enable: true,
      text: "Application Developmenr - JAVA Intensive"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }
  
  //

    return (
        <div id="certificate" className="certificate-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Certificates</h1>
                <div className="image-box-wrapper row row-cols-auto justify-content-center">

                    <div className="certificate-image-box" onClick={openPopupboxCertificate1}>
                        <img className="certificate-image" src={certificate1} alt="Certificate1..." />
                        <div className="certificate-overflow"></div>
                        <FontAwesomeIcon className="certificate-icon" icon={faSearchPlus} />
                    </div>

                    {/* - */}
                    <div className="certificate-image-box" onClick={openPopupboxCertificate2}>
                        <img className="certificate-image" src={certificate2} alt="Certificate2..." />
                        <div className="certificate-overflow"></div>
                        <FontAwesomeIcon className="certificate-icon" icon={faSearchPlus} />
                    </div>

                    {/* - */}
                    <div className="certificate-image-box" onClick={openPopupboxCertificate3}>
                        <img className="certificate-image" src={certificate3} alt="Certificate3..." />
                        <div className="certificate-overflow"></div>
                        <FontAwesomeIcon className="certificate-icon" icon={faSearchPlus} />
                    </div>

                    {/* - */}
                    <div className="certificate-image-box" onClick={openPopupboxCertificate4}>
                        <img className="certificate-image" src={certificate4} alt="Certificate4..." />
                        <div className="certificate-overflow"></div>
                        <FontAwesomeIcon className="certificate-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <popupboxConfigCertificate1 {...popupboxConfigCertificate1} />
            <PopupboxContainer {...popupboxConfigCertificate2} />
            <PopupboxContainer {...popupboxConfigCertificate3} />
            <PopupboxContainer {...popupboxConfigCertificate4} />
        </div>

    )
}


export default Certificates;
