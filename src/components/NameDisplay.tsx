import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import Button from './Button';
import '../styles/nameDisplayStyle.scss';

function NameDisplay() {
  const [visible, setVisible] = useState(false);
  return (
    <InView as="div" onChange={(inView) => setVisible(inView)} id="name-display">
      {visible ?
      <>
      <h1>Héctor González Orozco</h1>
      <h2>Full-stack web developer</h2>
      <Button text="Know more about me ↓" href="#about-me" />
      </>
      : null}
    </InView>
  );
}

export default NameDisplay;
