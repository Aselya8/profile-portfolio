import React from "react";
import CertificatesCarousel from "./CertificatesCarousel";

const Certificates = () => {
  return (
    <div id="certificates" className="certificates">
      <h1>Certificates</h1>
      <div className="container">
        <div className="certificates-content">
          <CertificatesCarousel />
        </div>
      </div>
    </div>
  )
}

export default Certificates;

