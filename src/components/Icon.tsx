import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  padding: 25px;
  ${(props: { color?: boolean }) =>
    props.color
      ? `
    border-radius: 50%;
    background-color: var(--light-purple);
    width: clamp(1.2rem, 5vw, 3rem);
    height: clamp(1.2rem, 5vw, 3rem);
  `
      : `width: clamp(10px, 2vw, 40px);
  height: 0px;`};

  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 0;

  .tooltip {
    position: absolute;
    top: 0;
    font-size: 1.1rem;
    background: var(--light-purple);
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
    background: var(--light-purple);
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

  img {
    ${(props: { color?: boolean }) =>
    props.color
      ? 'width: clamp(48px, 6vw, 68px)' :
    'width: clamp(34px, 4vw, 68px)'}
  }
`;

interface IconProps {
  children: React.ReactNode;
  text: string;
  color?: boolean;
}

function Icon({ children, text, color = false } : IconProps) {
  return (
    <Wrapper className="icon" color={color}>
      <span className="tooltip">{text}</span>
      <span>{children}</span>
    </Wrapper>
  )
};

export default Icon;
