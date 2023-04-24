import React from "react";
import ModalWindow from "../../atoms/ModalWindow";
import Button from "../../atoms/Button";

const DestroyWindow = ({ destroyName, isOpen, setIsOpen }) => {
  return (
    <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen}>
      You really want to destroy this {destroyName}
      <div>
        <Button label="Yes" color="red" />
        <Button label="No" color="#2f2f2f" />
      </div>
    </ModalWindow>
  );
};

export default DestroyWindow;
