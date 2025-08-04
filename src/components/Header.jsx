import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">Windy Ponds</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/services">Services</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Header 