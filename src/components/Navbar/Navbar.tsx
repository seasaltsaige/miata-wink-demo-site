import { Link, useNavigate } from "react-router-dom"
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <nav className="navbar" role="navigation">
      <div className="logo-container" onClick={() => navigate("/")} >
        <img className="nav-logo" src="/logo.png" alt="Miata Tech Logo" />
        <h1 className="company-name">Miata Tech Wink Mod</h1>
      </div>
      <ul className="navigation">
        <li>
          <Link className="nav-item" to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link className="nav-item" to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  )
}