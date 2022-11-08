import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.span`
  position: relative;
  display: inline-flex;
  width: ${(props : ButtonProps) => props.small ? "clamp(100px, 15vw, 150px)" : "280px"};
  height: 55px;
  margin: 0 15px;
  perspective: 1000px;

a{
  font-size: 19px;
  letter-spacing: 1px;
  transform-style: preserve-3d;
  transform: translateZ(-25px);
  transition: transform .25s;
  font-family: 'Montserrat', sans-serif;
}
a:before,
a:after{
  position: absolute;
  content: "${(props : ButtonProps) => props.text}";
  height: 55px;
  width: ${(props : ButtonProps) => props.small ? "clamp(100px, 15vw, 150px)" : "280px"};
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
  background: var(--midnight-green-eagle-green-3);
  transform: rotateY(0deg) translateZ(25px);
}
a:after{
  color: white;
  background: var(--space-cadet);
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
}

function Button({ text, href, small } : ButtonProps) {
  return (
    <StyledButton text={text} small={small}>
      <a href={href} aria-label={text} />
    </StyledButton>
  )
}

Button.defaultProps = {
  small: false,
};

export default Button;
