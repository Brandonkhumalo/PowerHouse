import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Top from '../assets/gallery/gallery';
import { Link } from 'react-router-dom';
import '../styles/gallery.css';

function Gallery() {
    return (
        <>
          <div><Navbar /></div>
          <div className='gallery'>Gallery</div>

          <div className='galleryContainer'>
            {Top.map((pic) => {
              return (
                <div>
                  <img className='gallery-pic' src={pic.src} alt='picture' />
                </div>
              )
            })}
          </div>

          <div className='newpage'>
              <Link to="/gallery">
                <button className='gallery-mo clr'>1</button>
              </Link>
              <Link to="/more">
                <button className='gallery-mo'>2</button>
              </Link>
            </div>
          <div><Footer /></div>
        </>
    )
}

export default Gallery;