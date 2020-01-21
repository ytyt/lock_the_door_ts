import React from "react";
import styled from "styled-components";

type TProps = {
  text: string;
  onClick: () => void;
  className?: string;
  theme?: string;
};

const Button: React.FC<TProps> = ({ text, onClick, className, theme }) => {
  return (
    <StyledMainButton onClick={onClick} className={className} theme={theme}>
      {text}
    </StyledMainButton>
  );
};

const StyledMainButton = styled.button`
  ${({ theme }) =>
    theme === "main" &&
    `
  cursor: pointer;
  -webkit-appearance: none;
  display: inline-block;
  border: none;
  border-radius: 20px;
  padding: 1em;
  text-align: center;
  width: 100%;
  background: #5459de;
  color: #fff;
  font-size: 12px;
  `}
`;

export default Button;
