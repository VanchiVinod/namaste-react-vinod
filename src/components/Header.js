import { LOGO_URL } from "../utils/constants";

import React from "react";
import ReactDOM from "react";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Kart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;