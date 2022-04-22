import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe'; 
import Skills from './components/Skills'; 
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Certificates from './components/Certificates'
import Contacts from './components/Contacts';
import Footer from './components/Footer';


function App() {
  return (
    < >

      < Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Education />
      <Portfolio />
      <Certificates />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
