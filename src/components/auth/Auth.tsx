import React, { useEffect, useState } from "react";
import { firebase, FirebaseContext } from "./config";
import Loading from "../Loading";
import SignIn from "./SignIn";

const useFirebaseAuth = () => {
  const [initialized, setInitialized] = useState(false);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setInitialized(true);
      setUserId(user ? user.uid : null);
      setUserName(user ? user.displayName || "" : "");
    });
  }, []);

  return { initialized, userName, userId };
};

export const FirebaseAuth: React.FC = ({ children }) => {
  const { initialized, userName, userId } = useFirebaseAuth();

  if (!initialized) {
    return <Loading />;
  } else if (!userId) {
    return <SignIn />;
  } else {
    return (
      <FirebaseContext.Provider
        value={{ userId, userName }}
        children={children}
      />
    );
  }
};

export const signInWithRedirect = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithRedirect(provider);
};

export const signOut = () => {
  return firebase.auth().signOut();
};
