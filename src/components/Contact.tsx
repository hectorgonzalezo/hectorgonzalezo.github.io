import React from 'react';
import Icon from './Icon';
import Button from './Button';
import githubLogo from '../assets/github-logo.png';
import emailLogo from '../assets/mail-logo.svg';
import linkedinLogo from '../assets/linkedin-logo.png';
import '../styles/contactStyle.scss';

function Contact() {
  return (
    <section id="contact">
      <h1><span>Contact</span></h1>
      <div>
        <Icon text="Github">
          <a href="https://github.com/hectorgonzalezo">
            <img src={githubLogo} alt="Github" />
          </a>
        </Icon>
        <Icon text="LinkedIn">
          <a href="https://www.linkedin.com/in/hector-gonzalez-17b278239/">
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
        </Icon>
        <Icon text="hgonzalez@wesleyan.edu">
          <a href="mailto:hgonzalez@wesleyan.edu">
            <img src={emailLogo} alt="Email" />
          </a>
        </Icon>
      </div>
      <Button text="Go to top" href="#name-display" />
    </section>
  )
}

export default Contact;
