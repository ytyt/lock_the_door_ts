import React from "react";
import styled from "styled-components";

type TProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ToggleButton: React.FC<TProps> = ({ onClick }) => {
  return <StyledButton onClick={onClick}>設定</StyledButton>;
};

const StyledButton = styled.button`
  -webkit-appearance: none;
  border: none;
  background: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 20;
  border: 1px solid #5459de;
`;

export default ToggleButton;
