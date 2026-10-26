import authorPic from '../assets/profile_picture.jpg';
import fbIcon from '../assets/facebook-icon.png';
import instaIcon from '../assets/instagram-icon.svg';
import twitterIcon from '../assets/twitter-icon.svg';

export default function Author() {
  return (
    <section className="author-card">
      <div className="author-bio">
        <h2>The Author</h2>
        <p>
          Sapien leo scelerisque per convallis torquent nunc. Lobortis eleifend
          a nam sit turpis nostra. Tempus suspendisse libero curae faucibus
          lobortis litora bibendum praesent! Eget quam magna, diam commodo
          interdum sapien magnis.
        </p>
      </div>

      <img src={authorPic} alt="The Author" className="author-photo" />

      <div className="social-links">
        <a href="#facebook" aria-label="Facebook">
          <img src={fbIcon} alt="Facebook" className="social-icon" />
        </a>
        <a href="#instagram" aria-label="Instagram">
          <img src={instaIcon} alt="Instagram" className="social-icon" />
        </a>
        <a href="#twitter" aria-label="Twitter">
          <img src={twitterIcon} alt="Twitter" className="social-icon" />
        </a>
      </div>
    </section>
  );
}