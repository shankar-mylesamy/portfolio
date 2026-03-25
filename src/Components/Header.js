import React from 'react';
import {useEffect, useState} from "react";
import './Header.css';

export function Header() {

    const [ navBarLinks, setNavBarLinks] = useState(true);
    const listItems = { display : navBarLinks ? "block" : "none" };

    useEffect( function() {
        console.log("Current navbar " + navBarLinks);
    },[navBarLinks])
    
    return (
        <header className="header">
            <p className="header-name">Shankar</p>
            <ul className="header-nav-links" style={listItems}>
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    );
}