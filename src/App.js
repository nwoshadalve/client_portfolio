// import { AnimatePresence } from 'framer-motion';
import './components/common.css';
import React, { useEffect, useState } from 'react';
import Nav from './components/nav/Nav';
import NavMobile from './components/nav/NavMobile';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import Portfolio from './components/pages/Portfolio.jsx';
import CaseStudies from './components/pages/CaseStudies.jsx';
import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import Blog from './components/pages/Blog.jsx';
import Nopage from './components/pages/Nopage.jsx';
import Footer from './components/footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  
  // Navbar Changes on Scroll
  const [scrollNav, setScrollNav] = useState('');

  const onScrollHandaler = () =>{
    if(window.scrollY>30){
      setScrollNav("onScrollNav");
    }
    else if(window.scrollY<30){
      setScrollNav("");
    }

  }

  useEffect(()=>{
    window.addEventListener("scroll", onScrollHandaler);
  },[scrollNav]);
  
  return (
    <>
      <Router>
        <div className={`fixed ${scrollNav} w-full z-50 transition-all ease-in-out origin-top duration-500`}>
          <Nav/>
          <NavMobile/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/casestudies' element={<CaseStudies/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='*' element={<Nopage/>} />
        </Routes>
        <div className='w-full mt-[60px] lg:mt-[100px]'>
          <Footer/>
        </div>        
      </Router>
    </>
  );
}

export default App;
