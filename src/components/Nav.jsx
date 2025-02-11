// Suggested code may be subject to a license. Learn more: ~LicenseLog:851914685.
import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import './Nav.css';
import { div } from "framer-motion/client";

function Nav(){




    return(
        <div>
<div className="Navbar">
    <div className="logo"></div>

    <input type="checkbox" id="menu-toggle" />
    <label className="hamburger" htmlFor="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
    </label>

    <nav>
        <ul>
            <li><a className="Navother" href="#">Services</a></li>
            <li><a className="Navother" href="#">Works</a></li>
            <li><a className="Navother" href="#">About</a></li>
            <li><a className="Navother" href="#">Contact</a></li>
        </ul>
    </nav>
</div>




</div>
    );
}
export default Nav;