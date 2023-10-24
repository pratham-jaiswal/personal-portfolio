import React, { useState, useEffect } from "react";
import axios from "axios";
import { Element } from 'react-scroll';
import './App.scss';
import moon from './icons/moon.svg';
import sun from './icons/sun.svg';
// import './Light.css';
import Navbar from './Components/Navbar';
import Brief from "./Components/Brief";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import LoadingScreen from "./Components/LoadingScreen";

function App() {
  const [data, setData] = useState(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URI}/api/data`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className={`${theme}`}>
      {!data ? (
        <LoadingScreen />
      ) : (
        <div>
          <Navbar toggleTheme={toggleTheme} theme={theme} icon={theme === "light" ? moon:sun}/>
          <Element name="brief" className="element" >
            <Brief brief={data.desc.find(obj => obj.name === "Introduction").content} theme={theme} />
          </Element>
          <Element name="about" className="element">
            <About about={data.desc.find(obj => obj.name === "About").content} skills={data.skills} theme={theme} />
          </Element>
          <Element name="project" className="element">
            <Projects projects={data.projects} theme={theme} />
          </Element>
          <Element name="contact" className="element">
            <Contact contactDesc={data.desc.find(obj => obj.name === "Contact").content} contactLinks={data.desc.find(obj => obj.name === "Contact Links").content} theme={theme} />
          </Element>
        </div>
      )}
    </div>
  );
}

export default App;
