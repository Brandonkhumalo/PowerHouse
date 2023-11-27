import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import '../styles/pricing.css';

import image1 from "../assets/pricing/images4.jpeg";
import image2 from "../assets/pricing/images1.png";
import image3 from "../assets/pricing/images5.jpeg";

function Prices() {
    return (
        <>
          <div><Navbar /></div>
          <div className="price">
            <div className="price-one">Exclusive Pricing Plan</div>
            <div className="price-two">
                Powerhouse an unknown printer took a galley of type and scrambled</div>
            <div className="price-two">
                make a type specimen book.</div>
          </div>

          <div className="pricing">
            <div className="plan">
                <div className="class-bg">
                    <img className="plan-img" src={image1} />
                    <div className="level-text">Beginners</div>
                    <div className="amount">R420</div>
                    <div className="your-class">Free Hand</div>
                    <div className="your-class">Gym Fitness</div>
                    <div className="your-class">Weight Loss</div>
                    <div className="your-class">Personal Trainer</div>
                    <div className="your-class">Cycling</div>
                    <Link to="/contact">
                        <button className="price-btn">Purchase Now</button>
                    </Link>
                </div>
            </div>

            <div className="plan">
                <div className="class-bg">
                    <img className="plan-img" src={image2} />
                    <div className="level-text">Intermediate</div>
                    <div className="amount">R650</div>
                    <div className="your-class">Free Hand</div>
                    <div className="your-class">Gym Fitness</div>
                    <div className="your-class">Weight Loss</div>
                    <div className="your-class">Personal Trainer</div>
                    <div className="your-class">Cycling</div>
                    <Link to="/contact">
                        <button className="price-btn">Purchase Now</button>
                    </Link>
                </div>
            </div>

            <div className="plan">
                <div className="class-bg">
                    <img className="plan-img" src={image3} />
                    <div className="level-text">Advanced</div>
                    <div className="amount">R850</div>
                    <div className="your-class">Free Hand</div>
                    <div className="your-class">Gym Fitness</div>
                    <div className="your-class">Weight Loss</div>
                    <div className="your-class">Personal Trainer</div>
                    <div className="your-class">Cycling</div>
                    <Link to="/contact">
                        <button className="price-btn">Purchase Now</button>
                    </Link>
                </div>
            </div>
           </div>
          <div><Footer /></div>
        </>
    )
}

export default Prices;