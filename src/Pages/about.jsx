import '../styles/about.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import aboutone from '../assets/about/aboutone.jpg';
import abouttwo from '../assets/about/abouttwo.jpg';
import '../styles/home.css';


function About() {
    return(
        <>
        <div><Navbar /></div>
        <section className="running">
        <div className='abou'>About</div>

        <div className='about'>
            <div className='history'>
                <div className='hist'>
                    <div className='histtxt'>About Us</div>
                    <div className='histtext'>At Powerhouse we are dedicated</div>
                    <div className='histtext'>to helping you achieve the body of your</div>
                    <div className='histtext'>dreams. Our workplace Gallery features modern</div>
                    <div className='histtext'>office, and showcase the company's work atmosphere.</div>
                </div>
                <div className='histpic'><img className='aboutone' src={aboutone} alt='picture' /></div>
            </div>

            <div className='history'>
                <div className='histpic'><img className='aboutone' src={abouttwo} alt='picture' /></div>
                <div className='hist'>
                    <div className='histtxt'>About Us</div>
                    <div className='histtext'>Our expert trainers and nutritionists will work with</div>
                    <div className='histtext'>you to create a personalized fitness and nutrition</div>
                    <div className='histtext'>plan that helps you reach your specific goals.</div>
                </div>
            </div>
        </div>
        </section>
        <div><Footer /></div>
        </>
    )
}

export default About