import heroImg from '../assets/hero.png';
import img1 from '../assets/all-encores.jpg';
import img2 from '../assets/articulation.jpg';
import img3 from '../assets/blurred.jpg';
import img4 from '../assets/encores-2.jpg';

export default function ImageGallery() {
  return (
    <section className="image-gallery-grid">
      <div className="gallery-large">
        <img src={heroImg} alt="Erased Tapes Performance" />
      </div>
      <div className="gallery-quad">
        <img src={img1} alt="All Encores" />
        <img src={img2} alt="Articulation" />
        <img src={img3} alt="Blurred" />
        <img src={img4} alt="Encores 2" />
      </div>
    </section>
  );
}