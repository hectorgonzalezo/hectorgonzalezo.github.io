import React from 'react';
import '../styles/nameDisplayStyle.scss';

function NameDisplay() {
  return (
    <div>
      <h1>Héctor González Orozco</h1>
      <h2>Full-stack web developer</h2>
      <button type="button" onClick={() => window.location.hash = '#about-me'}>Know more about me ↓</button>
    </div>
  );
}

export default NameDisplay;
