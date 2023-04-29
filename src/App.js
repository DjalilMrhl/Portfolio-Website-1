import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import './index.scss';
import {motion} from 'framer-motion'
import About from './components/About/About';
import Experience from './components/Experience/Experience'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';


function App() {
  return (
    <motion.div className="App" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4, duration:1}}>
      <NavBar/>
      <Header/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </motion.div>
  );
}

export default App;
