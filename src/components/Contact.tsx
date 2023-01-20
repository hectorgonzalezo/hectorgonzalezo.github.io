import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import Icon from './Icon';
import Button from './Button';
import githubLogo from '../assets/github-logo.png';
import emailLogo from '../assets/mail-logo.png';
import linkedinLogo from '../assets/linkedin-logo.png';
import '../styles/contactStyle.scss';

function Contact() {
  const [visible, setVisible] = useState(false);
  return (
    <InView as="section" onChange={(inView) => setVisible(inView)} id="contact">
      <div className="arrow"/>
        {visible ?
        <>
        <h1>Contact</h1>
        <div>
        <Icon text="hectorgonzalezo">
          <a href="https://github.com/hectorgonzalezo">
            <img src={githubLogo} alt="Github" />
          </a>
        </Icon>
        <Icon text="hgonzalez@wesleyan.edu">
          <a href="mailto:hgonzalez@wesleyan.edu">
            <img src={emailLogo} alt="Email" />
          </a>
        </Icon>
        <Icon text="Héctor González Orozco">
          <a href="https://www.linkedin.com/in/hector-gonzalez-orozco/">
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
        </Icon>
      </div>
      <Button text="Go to top" href="#name-display" />
      </>
      : null}
    </InView>
  )
}

export default Contact;
