import React from 'react';
import '../styles/nameDisplayStyle.scss';

function NameDisplay() {
  return (
    <div>
      <h1>Héctor González Orozco</h1>
      <h2>Full-stack web developer</h2>
      <button type="button">
        <a href="#about-me">Know more about me ↓</a>
      </button>
    </div>
  );
}

export default NameDisplay;
