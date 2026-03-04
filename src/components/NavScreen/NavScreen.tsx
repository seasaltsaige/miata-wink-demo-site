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

    useEffect(() => {
        setLocation(window.location.pathname);
        // window.scrollTo(0, 0);
    }, [window.location.pathname]);

    return (
        props.navOpen ?
            <div className="nav-blur-background">
                <div className={`nav-navigation-content${props.navOpen ? " nav-open" : ""}`}>
                    <div className="nav-navigation-links">
                        {
                            NAV_MAP.map((({ display, nav }) =>

                                <Link
                                    onClick={() => props.setNavOpen(false)}
                                    className={`nav-navigation-button${location === nav ? " nav-current" : ""}`}
                                    to={nav}>
                                    {display}
                                    <ChevronRightRounded className="nav-chevron-right" />
                                </Link>

                                // <ChevronRightRounded className="" />
                                // </div>
                            ))
                        }

                        {/* <div className="nav-navigation-button">
                            <Link
                                onClick={() => props.setNavOpen(false)}
                                className="nav-item" to={"/"}>
                                Home
                            </Link>

                            <ChevronRightRounded />

                        </div>

                        <div className="nav-navigation-button">
                            <Link
                                onClick={() => props.setNavOpen(false)}
                                className="nav-item" to={"/"}>
                                Learn More
                            </Link>
                        </div>
                        <div className="nav-navigation-button">
                            <Link
                                onClick={() => props.setNavOpen(false)}
                                className="nav-item" to={"/"}>
                                Installation
                            </Link>
                        </div>

                        <div className="nav-navigation-button">
                            <Link
                                onClick={() => props.setNavOpen(false)}
                                className="nav-item" to={"/"}>
                                How it Works
                            </Link>
                        </div>

                        <div className="nav-navigation-button">
                            <Link
                                onClick={() => props.setNavOpen(false)}
                                className="nav-item" to={"/"}>
                                Contact Us
                            </Link>
                        </div> */}

                    </div>

                    <div className="nav-footer">
                        <LinkedIn onClick={() => window.open("https://www.linkedin.com/in/saigesloan/")} className="nav-footer-item" />
                        <GitHub onClick={() => window.open("https://github.com/seasaltsaige/openwink")} className="nav-footer-item" />
                        <Mail onClick={() => window.open("mailto:saige.sloan1@gmail.com")} className="nav-footer-item" />
                    </div>
                    {/* Map nav items here */}
                    {/* If current page is selected */}
                    {/* Highlight it */}
                </div>

                {/* Footer linked to linked in, github */}
                {/* and maybe mail as footer, not sure */}
            </div>
            : <></>
    )
}