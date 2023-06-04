import React from "react";
import ModalWindow from "../../atoms/ModalWindow";
import Button from "../../atoms/Button";
import { useDestroyTask } from "../../../lib/hooks/actions/destroyTask";

const DestroyProjectWindow = ({ taskName, isOpen, setIsOpen, id }) => {
  const [destroyTask] = useDestroyTask({ onSubmit: () => setIsOpen(!isOpen) });

  return (
    <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen}>
      You really want to destroy this {taskName}
      <div>
        <Button label="Yes" color="red" onClick={() => destroyTask({ id })} />
        <Button label="No" color="#2f2f2f" onClick={() => setIsOpen(!isOpen)} />
      </div>
    </ModalWindow>
  );
};

export default DestroyProjectWindow;
