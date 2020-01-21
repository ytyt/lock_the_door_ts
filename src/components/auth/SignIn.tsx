import React, { useCallback } from "react";
import { firebase } from "./config";
import styled from "styled-components";
import Button from "../Button";
import Header from "../header";

const SignIn = () => {
  const signIn = useCallback(() => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return () => firebase.auth().signInWithRedirect(provider);
  }, []);

  return (
    <StyledWrapper>
      <Header>
        <p>Googleでログインしてや</p>
      </Header>
      <Button text="ログイン" onClick={signIn()} theme="main">
        signIn
      </Button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 320px;
  margin: 0 auto;
  padding-top: 20px;
`;

export default SignIn;
