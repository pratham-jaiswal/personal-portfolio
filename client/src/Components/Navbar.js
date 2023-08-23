import React from 'react'
import { Link } from 'react-scroll';
import moon from '../icons/moon.svg';

export default function Navbar() {

    const darkToggle = () => {
        console.log("hi")
    }

    return (
        <div>
            <nav className="navbar">
                <div className="theme-toggle">
                    <img onClick={darkToggle()} id="theme-icon" src={moon} alt="toggle light/dark mode" />
                </div>

                <div className="nav-container">
                    <Link
                        className="nav-link"
                        activeClass="active"
                        to="brief"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                    >
                        Home
                    </Link>
                    <Link
                        className="nav-link"
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                    >
                        About
                    </Link>
                    <Link
                        className="nav-link"
                        activeClass="active"
                        to="project"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                    >
                        Projects
                    </Link>
                    <Link
                        className="nav-link"
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                    >
                        Contact
                    </Link>
                    
                </div>
            </nav>
        </div>
    )
}