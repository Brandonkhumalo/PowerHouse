import {Link} from "react-router-dom";
import logo from '../assets/home/logo.jpeg';
import menu from '../assets/home/bmenu.svg';
import '../styles/navbar.css';
import '../styles/Mobile View/navbar.css';
import { useState } from "react";

function Navbar() {

    const [isNavOpen, setNavOpen] = useState(false)

    const toggleNav = () => {
        setNavOpen(!isNavOpen)
    };

    return (
        <div className="background">
            <navbar className="navbar">
                <div className="sections">
                    <div className="right">
                        <Link to="/" >
                        <img className="logo" src={logo} alt="Logo" />
                        </Link>
                    </div>

                    <div className="links">
                        <span>
                            <Link to="/"
                            className="link">Home</Link>
                        </span>
                        <span>
                            <Link to="/about"
                            className="link">About</Link>
                        </span>
                        <span>
                            <Link to="/gallery"
                            className="link">Gallery</Link>
                        </span>
                        <span>
                            <Link to="/prices"
                            className="link">Pricing</Link>
                        </span>
                        <span>
                            <Link to="/classes"
                            className="link">Classes</Link>
                        </span>
                        <span>
                            <Link to="/contacts"
                            className="link">Contact</Link>
                        </span>
                    </div>

                    <div className="join">
                       <span className="box">+</span>
                       <div className="para"> Join class now</div>

                       <div>
                        <div onClick={toggleNav}>
                            <img className="menu" src={menu} alt="menu icon" />
                        </div>

                        {isNavOpen && (
                            <div  className="bmenu">
                                <div className="blink">
                                    <Link to="/"
                                    className="link">Home</Link>
                                </div>
                                <div className="blink">
                                    <Link to="/about"
                                    className="link">About</Link>
                                </div>
                                <div className="blink">
                                    <Link to="/gallery"
                                    className="link">Gallery</Link>
                                </div>
                                <div className="blink">
                                    <Link to="/prices"
                                    className="link">Pricing</Link>
                                </div>
                                <div className="blink">
                                    <Link to="/classes"
                                    className="link">Classes</Link>
                                    </div>
                                <div className="blink">
                                    <Link to="/contacts"
                                    className="link">Contact</Link>
                                </div>
                            </div>
                        )}
                       </div>
                    </div>
                </div>
            </navbar>
        </div>
    )
}

export default Navbar;