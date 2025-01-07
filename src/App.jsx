import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
 import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import Skills from './components/Skills'; 

function App() {
  return (
    <div>
      <Navbar />
      <About/>
      <Hero/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App
