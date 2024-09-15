import { Link, useNavigate, useNavigation } from "react-router-dom"
import BurgerMenu from "../../assets/BurgerMenu.svg";
import Close from "../../assets/Close.svg";

import "./Navbar.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  const [navOpen, setNavOpen] = useState(false);

  // TODO: Hamburger menu for small screens
  return (
    <>
      <nav className="navbar" role="navigation">
        <div className="logo-container" onClick={() => { setNavOpen(false); navigate("/") }} >
          {
            width > 800 ?
              <img className="nav-logo" src="/logo.png" alt="Miata Tech Logo" />
              : <></>
          }
          <h1 className="company-name">Miata Tech Wink Mod</h1>
        </div>
        {
          width > 750 ?
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
            : <>

              <div style={{ display: navOpen ? "flex" : "none" }} className={`navigation-slide-in ${navOpen ? "nav-open" : "nav-closed"}`}>
                <Link onClick={() => setNavOpen(false)} className="nav-item" to="/info">Learn More</Link>
                <Link onClick={() => setNavOpen(false)} className="nav-item" to="/gallery">Gallery</Link>
                <Link onClick={() => setNavOpen(false)} className="nav-item" to="/contact">Contact Us</Link>
              </div>
              <div className="navigation-menu" onClick={() => setNavOpen(!navOpen)}>
                {
                  navOpen ?
                    <Close />
                    :
                    <BurgerMenu />
                }
              </div>

            </>
        }
      </nav>
      {
        (!navigation.location || width < 750) ?
          <div className="navbar-spacer"></div>
          : <></>
      }
    </>
  )
}