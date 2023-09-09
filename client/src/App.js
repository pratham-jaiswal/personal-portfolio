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
import LoadingScreen from "./Components/LoadingScreen";

function App() {
  const [data, setData] = useState(null);
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

  useEffect(() => {
    const pingInterval = setInterval(() => {
      // Make a request to the server to keep it awake
      axios.get(`${process.env.REACT_APP_API_URI}/ping`);
    }, 1000 * 60 * 10);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(pingInterval);
    };
  }, []);

  return (
    <div>
      {!data ? (
        <LoadingScreen />
      ) : (
        <div>
          <Navbar />
          <Element name="brief" className="element">
            <Brief brief={data.desc.find(obj => obj.name === "Introduction").content} />
          </Element>
          <Element name="about" className="element">
            <About about={data.desc.find(obj => obj.name === "About").content} skills={data.skills} />
          </Element>
          <Element name="project" className="element">
            <Projects projects={data.projects} />
          </Element>
          <Element name="contact" className="element">
            <Contact contactDesc={data.desc.find(obj => obj.name === "Contact").content} contactLinks={data.desc.find(obj => obj.name === "Contact Links").content} />
          </Element>
        </div>
      )}
    </div>
  );
}

export default App;
