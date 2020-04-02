import React, { useState, useContext } from "react";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { firebase, FirebaseContext } from "../auth/config";
import Modal from "./Modal";
import ToggleButton from "./ToggleButton";

const Settings: React.FC = () => {
  const { userName, updateUserName } = useContext(FirebaseContext);
  const [name, setName] = useState(userName);
  const [show, toggleModal] = useState(false);

  const handleModalButton = () => {
    toggleModal(!show);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleSubmitClick = async () => {
    await firebase.auth().currentUser!.updateProfile({
      displayName: name
    });
    const userName = firebase.auth().currentUser!.displayName;
    setName("");
    updateUserName(userName!);
  };

  return (
    <>
      <ToggleButton onClick={handleModalButton}>モーダル</ToggleButton>
      <TransitionGroup component={null}>
        {show && (
          <CSSTransition
            timeout={400}
            onEnter={() => {
              console.log("FIRED!");
            }}
          >
            <Modal>
              <StyledInputField
                type="text"
                defaultValue={userName}
                onChange={handleInputChange}
              />
              <StyledSubmitButton type="submit" onClick={handleSubmitClick}>
                名前を変更
              </StyledSubmitButton>
            </Modal>
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
};

const StyledInputField = styled.input`
  -webkit-appearance: none;
  border: 1px solid #ccc;
  padding: 10px;
  background: #fff;
  height: 40px;
  box-sizing: border-box;
  border-radius: 2px;
  font-size: 14px;
`;

const StyledSubmitButton = styled.button`
  -webkit-appearance: none;
  background: #5459de;
  border-radius: 4px;
  height: 40px;
  padding: 10px 16px;
  margin-left: 12px;
  color: #fff;
  font-size: 14px;
`;

export default Settings;
