import React, { useContext } from "react";
import styled from "styled-components";
import { firebase, FirebaseContext } from "../auth/config";
import List from "../posts/List";
import Header from "../header";
import Settings from "../settings";

const Content = () => {
  const { userName } = useContext(FirebaseContext);

  return (
    <StyledContent>
      <Header>
        <p>{userName}さん、かぎかけた？</p>
      </Header>
      <List />
      <Settings />
    </StyledContent>
  );
};

const StyledContent = styled.div`
  width: 320px;
  margin: 0 auto;
`;

export default Content;
