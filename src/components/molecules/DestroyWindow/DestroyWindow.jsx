import React from "react";
import ModalWindow from "../../atoms/ModalWindow";
import Link from "../../atoms/Link";

const DestroyWindow = ({ destroyName, yesLink, noLink, isOpen, setIsOpen }) => {
  return (
    <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen}>
      You really want to destroy this {destroyName}
      <div>
        <Link href={yesLink} label="Yes" color="red" />
        <Link href={noLink} label="No" color="#2f2f2f" />
      </div>
    </ModalWindow>
  );
};

export default DestroyWindow;
