import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
    <div className="navigation">
        <ul>
            <NavLink
                to="/"
                className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
            <li>Accueil</li>
            </NavLink>

            <li className="nav-portfolio">
                portfolio
                <ul className="nav-projects">
                    <NavLink
                        to="/reservia"
                        className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
                    >
                    <li>Reservia</li>
                    </NavLink>

                    <NavLink
                        to="/ohmyfood"
                        className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
                    >
                    <li>Ohmyfood</li>
                    </NavLink>

                    <NavLink
                        to="/fisheye"
                        className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
                    >
                    <li>FishEye</li>
                    </NavLink>

                    <NavLink
                        to="/kasa"
                        className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
                    >
                    <li>Kasa</li>
                    </NavLink>

                    <NavLink
                        to="/sportsee"
                        className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
                    >
                    <li>SportSee</li>
                    </NavLink>

                    <NavLink
                        to="/remede"
                        className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
                    >
                    <li>Remede Agency</li>
                    </NavLink>

                    <NavLink
                        to="/wealth"
                        className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
                    >
                    <li>Wealth Health</li>
                    </NavLink>
                </ul>
            </li>

            <NavLink
                to="/contact"
                className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
            <li>contact</li>
            </NavLink>
        </ul>
    </div>
    );
};

export default Navigation;
