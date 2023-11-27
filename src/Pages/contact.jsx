import Navbar from "../components/navbar";
import Footer from "../components/footer";
import fb from '../assets/social/facebook.svg';
import insta from '../assets/social/instagram.svg';
import x from '../assets/social/twitter.svg';
import youtube from '../assets/social/youtube.svg'
import '../styles/contact.css'

import { useState } from "react";

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value)
    };

    const handleName = (e) => {
        setName(e.target.value)
    };

    function handleSubmit(e) {
        e.preventDefault();
        alert('Thank You for getting in touch with us')
    }

    return (
        <>
          <div><Navbar /></div>
          <div className="contact-us">Contact Us</div>
          <div className="contact-container">

            <div className="left-part">
                <div className="head-text">
                    We are here for help you! To Shape Your Body.
                </div>
                <div className="mid-text">
                    At Powerhouse, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition planthat helps you reach your specific goals.
                </div>
                <div className="bottom-pt">
                    <div className="left-s">
                        <div className="city-time">Pretoria, South Africa</div>
                        <div className="loc">433 Sisulu street</div>
                        <div className="loc-time">Pretoria Central</div>

                        <div className="city-time">Information</div>
                        <div className="loc"> +27 83 534 5041</div>
                        <div className="loc-time">powerhouse@gmail.com</div>
                    </div>

                    <div className="right-s">
                        <div className="city-time">Opening Hours</div>
                        <div className="loc">Mon-Fri: 5am--10pm</div>
                        <div className="loc-time">sart: 6am--7pm</div>

                        <div className="city-time">Follow Us On</div>
                        <div className="social-icons">
                            <img className="icns" src={fb} alt="facebook" />
                            <img className="icns" src={x} alt="twitter" />
                            <img className="icns" src={insta} alt="instagram" />
                            <img className="icns" src={youtube} alt="youtube" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="right-part">
                <form onSubmit={handleSubmit}>
                    <div className="info">Leave Us Your Info</div>

                    <input className="inpt" type="text" value={name} placeholder="Full Name" required onChange={handleName} />

                    <div className="email">
                    <input className="inpt" type="email" value={email} placeholder="johnDoe@gmail.com" onChange={handleEmail} />
                    </div>
                    <div>
                        <div className="s-class">Select class</div>
                        <select  className="selct" name="class">
                            <option value="boxing">Boxing</option>
                            <option value="karate">Karate</option>
                            <option value="cycling">cycling</option>
                            <option value="power">Power-lifting</option>
                            <option value="workout">Workout</option>
                            <option value="crossfit">Crossfit</option>
                            <option value="meditation">Meditation</option>
                            <option value="Body-building">Body-building</option>
                        </select>
                    </div>
                    <textarea rows="6" cols="59" />
                    <button className="butn" type="submit" >Submit</button>
                </form>
            </div>
          </div>
          <div><Footer /></div>
        </>
    )
}

export default Contact;