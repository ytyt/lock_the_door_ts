import React from "react";
import { createGlobalStyle } from "styled-components";
import { FirebaseAuth } from "./components/auth/Auth";
import Content from "./components/Content";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    color: #404040;
    background: linear-gradient( 135deg, #dfbb54 0%, #ded054 100% );
    height: 100vh;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <FirebaseAuth>
        <Content />
      </FirebaseAuth>
    </>
  );
};

export default App;
