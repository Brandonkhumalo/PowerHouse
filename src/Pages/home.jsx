import {Link} from "react-router-dom"
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../styles/home.css';

import progression from '../assets/home/refresh.svg';
import workout from '../assets/home/fda-weights.svg';
import nutritions from '../assets/home/download.png';

import sv from '../assets/home/title.svg';
import gym from '../assets/home/gym.png';
import weight from '../assets/home/weightlifter.png';
import equipment from '../assets/home/equipments.png';
import girl from '../assets/home/girl-run.png';

import meditation from '../assets/home/meditation.jpeg';
import boxing from '../assets/home/boxing.jpeg';
import cycling from '../assets/home/Cycling.jpeg';
import power from '../assets/home/Power.jpeg';
import karate from '../assets/home/Karate.jpeg';
import work from '../assets/home/men.jpeg';

function Home() {
    return(
      <>
        <div className='background'>
          <Navbar />
          <div className="container">
            <span className='top-paragraph'>Make Your Body</span>
            <span className='bottom-paragraph'>Fit & Perfect</span>
            <Link to="/classes">
              <button className='btn'>OUR CLASSES</button>
            </Link>
          </div>
        </div>

        <section className="running">
          <div className="tour">
            <div className="grids"><img className="image" src={progression} />
            <span className="title">PROGRESSION</span>
            <span className="content">Our team of experts will work with you to</span>
            <span className="content">create a customized plan that helps you</span>
            <span className="content">achieve success one step at a time</span></div>

            <div className="grids"><img className="image" src={workout} />
            <span className="title">WORKOUT</span>
            <span className="content">With a variety of workouts to choose from,</span>
            <span className="content">you will have everything you need to get into</span>
            <span className="content">the best shape of your life</span></div>

            <div className="grids"><img className="image" src={nutritions} />
            <span className="title">NUTRITIONS</span>
            <span className="content">Our team will work with you to create a</span>
            <span className="content">personalized meal plan that helps you</span>
            <span className="content">react your specific health goals</span></div>
          </div>

          <div className="bottom-side">
            <div className="left-side">
            <div className="first"> <img className="red-bg" src={sv} /> <span className="who-we-are">WHO WE ARE </span></div>
            <div className="second">
              <span className="one"> Take Your Health And Body To</span>
              <span className="one ones"> Next Level</span>
              <span className="two">Take your health and body to the next level with our comprehensive</span>
              <span className="two twos">program designed to help you reach your fitness goals.</span>
            </div>
            <div className="third">
              <div className="items">
                <div className="pro"> <img className="images" src={weight} />
                <span className="sec-content">Proffessional</span>
                <span className="sec-content">Trainers</span></div>

                <div className="pro"> <img className="images" src={equipment} />
                <span className="sec-content">Modern</span>
                <span className="sec-content">Equipments</span></div>

                <div className="pro"> <img className="images" src={gym} />
                <span className="sec-content">Fancy Gym</span>
                <span className="sec-content">Machines</span></div>
              </div>
              <Link to="/classes">
                <button className="btn bttn">TAKE A TOUR</button>
              </Link>
            </div>
            </div>
            <div className="right-side">
              <img className="run-girl" src={girl} />
            </div>
          </div>
        </section>

        <section className="class">
          <div className="feature-text">
            <span className="our-feature">OUR FEATURED CLASS</span>
            <span className="offer">WE ARE OFFERING BEST FLEXIBLE CLASSES</span>
          </div>

          <div className="class-pics">
            <div className="pic"><img className="pics pcs" src={cycling} /><div className="pic-text">Cycling</div></div>

            <div className="pic"><img className="pics" src={karate} /><div className="pic-text">Karate</div></div>

            <div className="pic"><img className="pics pi" src={power} /><div className="pic-text">Power</div></div>

            <div className="pic"><img className="pics pcs" src={meditation} /><div className="pic-text">Meditation</div></div>

            <div className="pic"><img className="pics" src={boxing} /><div className="pic-text">Boxing</div></div>

            <div className="pic"><img className="pics pi" src={work} /><div className="pic-text">Workout</div></div>
          </div>
          <Footer />
        </section>
        
      </>
    )
}

export default Home;