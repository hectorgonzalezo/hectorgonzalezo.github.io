import React from 'react';

export interface INameDisplayProps {
}

function NameDisplay (props: INameDisplayProps) {
  return (
    <div>
      <h1>Héctor González Orozco</h1>
      <h2>Full-stack web developer</h2>
      <button type="button">Know more about me ↓</button>
    </div>
  );
}

export default NameDisplay;
