import React from "react";
import styled from "styled-components";

const Loading = () => {
  return <StyledLoading>Loading...</StyledLoading>;
};

const StyledLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  text-align: center;
  line-height: 100vh;
  font-size: 18px;
`;

export default Loading;
