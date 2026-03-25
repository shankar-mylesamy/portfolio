import React from 'react';
import './Header.css';

export function Header() {
    
    return (
        <header className="header">
            <p className="header-name">Shankar</p>
            <ul className="header-nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    );
}