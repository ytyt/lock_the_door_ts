import React from "react";
import styled from "styled-components";
import Logo from "../../icon.png";

const Header: React.FC = ({ children }) => {
  return (
    <StyledHeader>
      <img src={Logo} alt="" />
      {children}
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  padding: 20px 0;
  justify-content: center;

  > img {
    padding-right: 10px;
  }
`;

export default Header;
