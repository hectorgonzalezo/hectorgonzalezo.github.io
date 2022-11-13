import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.span`
  position: relative;
  display: inline-flex;
  width: ${(props : ButtonProps) => props.small ? "clamp(80px, 14vw, 150px)" : "280px"};
  height: 55px;
  margin: 0 15px;
  perspective: 1000px;

a{
  font-size: clamp(1rem, 2vw, 1.5rem);
  letter-spacing: 1px;
  transform-style: preserve-3d;
  transform: translateZ(-25px);
  transition: transform .25s;
}
a:before,
a:after{
  position: absolute;
  content: "${(props : ButtonProps) => props.text}";
  height: 55px;
  width: ${(props : ButtonProps) => props.small ? "clamp(80px, 15vw, 150px)" : "280px"};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid gray;
  padding: 5px 10px 5px 10px;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 3px 3px 8px black;
}
a:before{
  color: #fff;
  background: var(--dark-purple-2);
  transform: rotateY(0deg) translateZ(25px);
}
a:after{
  color: var(--english-violet-light);
  background: black;
  transform: rotateX(90deg) translateZ(25px);
}
a:hover{
  transform: translateZ(-25px) rotateX(-90deg);
}

`;

interface ButtonProps {
  text: string;
  href: string;
  small?: boolean;
  label?: string;
}

function Button({ text, href, small, label } : ButtonProps) {
  return (
    <StyledButton text={text} small={small} className="button">
      <a href={href} aria-label={`${label} ${text}`} />
    </StyledButton>
  )
}

Button.defaultProps = {
  small: false,
  label: '',
};

export default Button;
