import React from 'react';
import Button from './Button';
import '../styles/headerStyle.scss';

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Button text="About Me" href="#about-me" small />
        </li>
        <li>
          <Button text="Projects" href="#projects" small/>
        </li>
        <li>
          <Button text="Contact" href="#contact" small />
        </li>
      </ul>
    </nav>
  );
}

export default Header;
