import React from 'react';
import '../styles/headerStyle.scss';

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="circle" />
    </nav>
  );
}

export default Header;
