import React from 'react';
import Button from './Button';
import '../styles/nameDisplayStyle.scss';

function NameDisplay() {
  return (
    <div id="name-display">
      <h1>Héctor González Orozco</h1>
      <h2>Full-stack web developer</h2>
      <Button text="Know more about me ↓" href="#about-me" />
    </div>
  );
}

export default NameDisplay;
