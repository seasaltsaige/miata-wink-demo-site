import { useNavigate, useLocation } from "react-router-dom"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import "./Navbar.css";
import { useEffect, useState } from "react";

export default function Navbar(props: {
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomeRoute = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    if (isHomeRoute) {
      onScroll();
      window.addEventListener("scroll", onScroll);
    } else {
      setIsScrolled(true);
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomeRoute]);

  return (
    <>
      <nav className={isScrolled && !isHomeRoute ? "navbar navbar-scrolled" : "navbar"} role="navigation">
        <div onClick={() => { props.setNavOpen(true); document.getElementById("root")?.classList.add("no-scroll"); }} className="nav-navigation-container">
          <MenuRoundedIcon className="nav-navigation-menu" />
          <p className="nav-navigation-text">Menu</p>
        </div>

        <div className="logo-container" onClick={() => { props.setNavOpen(false); navigate("/") }} >
          <h1 className="company-name">Open Wink</h1>
        </div>





      </nav>
      {
        (!isHomeRoute) ?
          <div className="navbar-spacer"></div>
          : <></>
      }
    </>
  )
}