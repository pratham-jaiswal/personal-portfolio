import React from 'react'
import { Link } from 'react-scroll';

export default function Navbar({toggleTheme, icon}) {

    return (
        <div>
            <nav className="navbar">
                <div className="theme-toggle">
                    <img onClick={toggleTheme} id="theme-icon" src={icon} alt="toggle light/dark mode" />
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