import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <header className="site-header">
      <img src={logo} alt="Erased Tapes Logo" className="site-logo" />
      <nav className="header-nav">
        <a href="#gig">Our Gig</a>
        <a href="#artists">Our Artists</a>
        <a href="#story">Our Story</a>
      </nav>
    </header>
  );
}