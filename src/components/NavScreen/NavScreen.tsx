import React, { useEffect, useState } from "react"

import "./NavScreen.css";
import { Link } from "react-router-dom";
import { ChevronRightRounded, GitHub, LinkedIn, Mail } from "@mui/icons-material";

const NAV_MAP: { nav: string, display: string }[] = [
    { display: "Home", nav: "/" },
    { display: "Learn More", nav: "/info" },
    { display: "Installation", nav: "/install" },
    { display: "How It Works", nav: "/function" },
    { display: "Contact Us", nav: "/contact" }

]

export function NavScreen(props: {
    navOpen: boolean;
    setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [location, setLocation] = useState("/");

    const close = () => {
        document.getElementById("root")?.classList.remove("no-scroll");
        props.setNavOpen(false);
    }

    useEffect(() => {
        setLocation(window.location.pathname);
        // window.scrollTo(0, 0);
    }, [window.location.pathname]);

    return (
        // Oops, need to prevent scroll when open lol
        props.navOpen ?
            <div className="nav-blur-background" onClick={close}>
                <div className={`nav-navigation-content${props.navOpen ? " nav-open" : ""}`} onClick={(ev) => ev.stopPropagation()} >
                    <div className="nav-navigation-links">
                        {
                            NAV_MAP.map((({ display, nav }) =>
                                <Link
                                    onClick={close}
                                    className={`nav-navigation-button${location === nav ? " nav-current" : ""}`}
                                    to={nav}>
                                    {display}
                                    <ChevronRightRounded className="nav-chevron-right" />
                                </Link>
                            ))
                        }

                    </div>

                    <div className="nav-footer">
                        <LinkedIn onClick={() => window.open("https://www.linkedin.com/in/saigesloan/")} className="nav-footer-item" />
                        <GitHub onClick={() => window.open("https://github.com/seasaltsaige/openwink")} className="nav-footer-item" />
                        <Mail onClick={() => window.open("mailto:saige.sloan1@gmail.com")} className="nav-footer-item" />
                    </div>
                </div>
            </div>
            : <></>
    )
}