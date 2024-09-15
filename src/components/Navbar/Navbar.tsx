import { Link, useNavigate } from "react-router-dom"
import BurgerMenu from "../../assets/BurgerMenu.svg";
import Close from "../../assets/Close.svg";

import "./Navbar.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  // const navigation = useNavigation();
  const [location, setLocation] = useState("/");
  const { width } = useWindowDimensions();

  useEffect(() => {
    setLocation(window.location.pathname);
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  const [navOpen, setNavOpen] = useState(false);
  // TODO: Hamburger menu for small screens
  return (
    <>
      <nav className="navbar" role="navigation" style={{ backgroundColor: !(location !== "/" || width < 750) ? "transparent" : "" }}>
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
                <Link onClick={() => setNavOpen(false)} className="nav-item" to="/">Home</Link>
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
        (location !== "/" || width < 750) ?
          <div className="navbar-spacer"></div>
          : <></>
      }
    </>
  )
}