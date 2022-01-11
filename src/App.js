import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe'; 
import Skills from './components/Skills'; 
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Certificates from './components/Certificates';
import CertificatesCarousel from './components/CertificatesCarousel';


function App() {
  return (
    < >

      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke:{
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      < Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Education />
      <Portfolio />
      <Certificates />

    </>
  );
}

export default App;
