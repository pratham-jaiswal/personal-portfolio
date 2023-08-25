import React, { useState, useEffect } from "react";
import axios from "axios";
import { Element } from 'react-scroll';
import './App.css';
import './Light.css';
import Navbar from './Components/Navbar';
import Brief from "./Components/Brief";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  const [data, setData] = useState({ desc: [], skills: [], projects: [] });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://pratham-jaiswal-api.onrender.com/api/data");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Element name="brief" className="element">
        <Brief brief={data.desc.find(obj => obj.name === "Introduction")} />
      </Element>
      <Element name="about" className="element">
        <About about={data.desc.find(obj => obj.name === "About")} skills={data.skills} />
      </Element>
      <Element name="project" className="element">
        <Projects projects={data.projects} />
      </Element>
      <Element name="contact" className="element">
        <Contact contactDesc={data.desc.find(obj => obj.name === "Contact")} contactLinks={data.desc.find(obj => obj.name === "Contact Links")} />
      </Element>
    </div>
  );
}

export default App;
