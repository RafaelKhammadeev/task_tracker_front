import React from "react";
import ModalWindow from "../../atoms/ModalWindow";
import Button from "../../atoms/Button";
import { useDestroyProject } from "../../../lib/hooks/actions/destroyProject";

const DestroyProjectWindow = ({ projectName, isOpen, setIsOpen, id }) => {
  const [destroyProject] = useDestroyProject({ onSubmit: () => setIsOpen(!isOpen) });

  return (
    <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen}>
      You really want to destroy this {projectName}
      <div>
        <Button label="Yes" color="red" onClick={() => destroyProject({ id })} />
        <Button label="No" color="#2f2f2f" onClick={() => setIsOpen(!isOpen)} />
      </div>
    </ModalWindow>
  );
};

export default DestroyProjectWindow;
