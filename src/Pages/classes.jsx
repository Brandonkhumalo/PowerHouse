import Navbar from '../components/navbar';
import Footer from '../components/footer';
import classPic from '../assets/classes/classes';
import { Link } from 'react-router-dom';

import '../styles/class.css'

function Class() {
    return (
        <>
        <div><Navbar /></div>
        <div className='heading'>Classes</div>
        <div className='classContainer'>
            {classPic.map((pictures) => {
                return (
                    <div className='classContain'>
                        <img className='classpic' src={pictures.src} />
                        <div className='classtext'>{pictures.name}</div>
                        <Link to="/contacts">
                            <button className='btnn'>Join Us</button>
                        </Link>
                    </div>
                )
            })}
        </div>
        <div><Footer /></div>
        </>
    )
}

export default Class;