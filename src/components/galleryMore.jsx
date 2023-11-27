import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from 'react-router-dom';
import '../styles/gallery.css';
import More from '../assets/gallery/more';

function GalleryMore() {
    return(
        <>
          <div><Navbar /></div>
          <div className='gallery'>Gallery</div>

          <div className='galleryContainer'>
            {More.map((pic) => {
              return (
                <div>
                  <img className='gallery-pic' src={pic.src} alt='picture' />
                </div>
              )
            })}
          </div>

          <div className='newpage'>
              <Link to="/gallery">
                <button className='gallery-mo'>1</button>
              </Link>
              <Link to="/more">
                <button className='gallery-mo clr'>2</button>
              </Link>
            </div>
          <div><Footer /></div>
        </>
    )
}

export default GalleryMore;