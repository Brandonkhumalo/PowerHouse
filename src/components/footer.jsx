import '../styles/footer.css'
import logo from '../assets/home/logo.jpeg';
import youtube from '../assets/social/youtube.svg';
import insta from '../assets/social/instagram.svg';
import twitter from '../assets/social/twitter.svg';
import facebook from '../assets/social/facebook.svg';

function Footer() {
    return(
        <div className='blo'>
        <div className='container-footer'>
            <div className='group group-1'>
                <div className='top'>
                    <div><img className='logos' src={logo} alt="logo" /></div>
                    <div className='text-1'>Take your body to the next level with our</div>
                    <div className='text-1'>comprehensive program designed to</div>
                    <div className='text-1'>help you reach your fitness goals</div>
                </div>
                <div className='middle'>
                    <img className='social' src={facebook} alt="Facebook" />
                    <img className='social' src={twitter} alt="Twitter" />
                    <img className='social' src={insta} alt="Instagram" />
                    <img className='social' src={youtube} alt="YouTube" />
                </div>
                <div className='text-1'>
                    Privacy Policy | © 2023 PowerHouse
                </div>
            </div>

            <div className='group group-2'>
                <div className='classs'>Our Classes</div>
                <div className='hov classes'>Fitness Classes</div>
                <div className='hov classes'>Aerobics Classes</div>
                <div className='hov classes'>Power Yoga</div>
                <div className='hov classes'>Learn Machines</div>
                <div className='hov classes'>Full-body Strength</div>
            </div>

            <div className='group group-3'>
                <div className='classs'>Working Hours</div>
                <div className='days'>Monday - Friday</div>
                <div className='classes'>5:00am - 22:00pm</div>
                <div className='days'>Sartuday</div>
                <div className='classes'>6:00am - 19:00pm</div>
                <div className='days'>Sunday - Closed</div>
            </div>
        </div>
        </div>
    )
}

export default Footer;