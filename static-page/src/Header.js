
import logo from '../src/logo.png'
import React from "react";

export default function Header() {
    return(
        <header className="header">
            <nav className= "nav">
                <img src={logo} alt="myimage"></img>
                <h3>ReactFacts</h3>
                <ul className="nav-items">
                    <li><a href="#Pricing">Pricing</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
};