import { Link, useNavigate, useNavigation } from "react-router-dom"
import "./Navbar.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function Navbar() {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  // TODO: Hamburger menu for small screens
  return (
    <>
      <nav className="navbar" role="navigation">
        <div className="logo-container" onClick={() => navigate("/")} >
          {
            width > 800 ?
              <img className="nav-logo" src="/logo.png" alt="Miata Tech Logo" />
              : <></>
          }
          <h1 className="company-name">Miata Tech Wink Mod</h1>
        </div>
        <ul className="navigation">
          <li>
            <Link className="nav-item" to="/info">Learn More</Link>
          </li>
          <li>
            <Link className="nav-item" to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link className="nav-item" to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      {
        (navigation.location) ?
          <div className="navbar-spacer"></div>
          : <></>
      }
    </>
  )
}