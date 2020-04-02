import React from "react";
import styled from "styled-components";

const Modal: React.FC = ({ children }) => {
  return (
    <>
      <StyledOverlay />
      <StyledPanel>
        <StyledTitle>設定</StyledTitle>
        {children}
      </StyledPanel>
    </>
  );
};

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  transition: all 0.1s ease-out;
  opacity: 0;
  z-index: 10;

  &.enter-active,
  &.enter-done {
    opacity: 1;
  }
`;

const StyledPanel = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60vh;
  background: #fff;
  border-radius: 3px 3px 0 0;
  box-sizing: border-box;
  padding: 20px;
  transition: all 0.1s ease-out;
  opacity: 0;
  transform: translateY(30vh);
  z-index: 11;

  .enter-active ~ &,
  .enter-done ~ & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledTitle = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 20px;
`;

export default Modal;
