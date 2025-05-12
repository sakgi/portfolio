import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css"
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Projects from "./component/Projects";
import Experience from "./component/Experience";
import Contact from "./component/Contact";
import Skills from "./component/Skills";


const App = () => {
 useEffect(() => {
  Aos.init();

 }, [])

  return (
    
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
    
  );
};
export default App;