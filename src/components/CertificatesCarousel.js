import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// CERTIFICATES IMPORTS
import certificate1 from "../images/certificate1.png";
import certificate2 from "../images/certificate2.png";



const CertificatesCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >
            <>
                <div className="myCarousel">
                    <img src={certificate1} alt="1" />
                </div>
            </>
            <>
                <div className="myCarousel">
                    <img  src={certificate2} alt="2" />
                </div>
            </>
        </Carousel>
    )
}

export default CertificatesCarousel;