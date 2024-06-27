import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Section1 from './components/Section1';
import About from './components/Aboutsection'
import EducationSection from './components/EducationSection';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <div className='bg-black h-full'>
        <Nav />
        <Section1 />
        <About/>
        <EducationSection/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
    </div>


  );
}

export default App;
