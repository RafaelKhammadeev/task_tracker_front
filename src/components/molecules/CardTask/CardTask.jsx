import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../atoms/Button";
import DestroyTaskWindow from "../DestroyTaskWindow";

const StyledCard = styled.div`
  background: #e2e2e2;
  width: 300px;
  height: 300px;
  display: flex;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  margin: 8px;
  padding: 8px;
`;

const CardTitle = styled.div`
  font-weight: bold;
`;

const CardText = styled.div`
  word-break: break-all;
`;

const CardTask = ({ id = 1, title = "", description = "", state = "" }) => {
  const [isDestroyModalObject, setIsDestroyModalOpen] = useState(false);

  return (
    <StyledCard>
      <div>
        <CardTitle> Title: </CardTitle>
        <CardText> {title} </CardText>
        <CardTitle> Description: </CardTitle>
        <CardText> {description} </CardText>
        <CardTitle> State: </CardTitle>
        <CardText> {state} </CardText>
      </div>
      <Button onClick={() => setIsDestroyModalOpen(true)} color="red" label="Destroy" />
      {isDestroyModalObject && (
        <DestroyTaskWindow
          isOpen={isDestroyModalObject}
          projectName={`project ${title}`}
          setIsOpen={setIsDestroyModalOpen}
          id={id}
        />
      )}
    </StyledCard>
  );
};

export default CardTask;
