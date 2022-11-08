import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

  position: relative;
  border-radius: 50%;
  background-color: var(--dark-purple);
  padding: 25px;
  margin: 10px;
  width: 50px;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 0;

  &:hover{
    background-color: var(--dark-purple-2);
  }

  .tooltip {
  position: absolute;
  top: 0;
  font-size: 1.5rem;
  background: var(--dark-purple-2);
  color: #ffffff;
  padding: 8px;
  border-radius: 1rem;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

  .tooltip::before {
  position: absolute;
  content: " ";
  height: 8px;
  width: 8px;
  background: var(--dark-purple-2);
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

&:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

&:hover span,
&:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

img{
  max-width: 64px
}
`;

interface IconProps {
  children: React.ReactNode;
  text: string;
}

function Icon({ children, text } : IconProps) {
  return (
    <Wrapper>
      <span className="tooltip">{text}</span>
      <span>{children}</span>
    </Wrapper>
  )
};

export default Icon;
