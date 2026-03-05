import { useNavigate } from "react-router-dom"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import "./Navbar.css";
import { useEffect, useState } from "react";

export default function Navbar(props: {
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const navigate = useNavigate();
  // const navigation = useNavigation();
  const [location, setLocation] = useState("/");

  useEffect(() => {
    setLocation(window.location.pathname);
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  return (
    <>
      <nav className="navbar" role="navigation">
        <div onClick={() => { props.setNavOpen(true); document.getElementById("root")?.classList.add("no-scroll"); }} className="nav-navigation-container">
          <MenuRoundedIcon className="nav-navigation-menu" />
          <p className="nav-navigation-text">Menu</p>
        </div>

        <div className="logo-container" onClick={() => { props.setNavOpen(false); navigate("/") }} >
          {
            // width > 800 ?
            //   <img className="nav-logo" src="/logo.webp" alt="Shybeams Logo" />
            //   : <></>
          }
          <h1 className="company-name">Open Wink</h1>
        </div>





      </nav>
      {
        (location !== "/") ?
          <div className="navbar-spacer"></div>
          : <></>
      }
    </>
  )
}