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
  font-size: clamp(1.5rem, 3vw, 1.7rem);
  letter-spacing: 1px;
  transform-style: preserve-3d;
  transform: translateZ(-25px);
  transition: transform 0.5s;
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
  padding: 5px 10px 5px 10px;
  box-sizing: border-box;
  border-radius: 36px;
  box-shadow: 3px 3px 8px black;
}
a:before{
  opacity: 1;
  transition: 0.5s opacity;
  color: #fff;
  background: var(--light-purple);
  transform: rotateY(0deg) translateZ(25px);
}
a:after{
  opacity: 0;
  transition: 0.5s opacity;
  color: var(--light-purple);
  background: black;
  transform: rotateX(90deg) translateZ(25px);

}
a:hover{
  transform: translateZ(-25px) rotateX(-90deg);
  &:before{
    opacity: 0;
  }
  &:after{
    opacity: 1;
  }
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
