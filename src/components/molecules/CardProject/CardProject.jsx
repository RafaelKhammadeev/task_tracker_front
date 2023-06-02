import React, { useState } from "react";
import styled from "styled-components";
import Link from "../../atoms/Link";
import Button from "../../atoms/Button";
import DestroyWindow from "../DestroyWindow";

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

const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

const CardProject = ({ id = 1, name = "", description = "", createdAt = "" }) => {
  const [isDestroyModalObject, setIsDestroyModalOpen] = useState(false);

  return (
    <StyledCard>
      <div>
        <CardTitle> Name: </CardTitle>
        <CardText>
          <Link href={`project/${id}`} color="#e2e2e2" textColor="black" label={name} />
        </CardText>
        <CardTitle> Description: </CardTitle>
        <CardText> {description} </CardText>
        <CardTitle> CreatedAt: </CardTitle>
        <CardText> {createdAt} </CardText>
        <RowStyled>
          <Link href={`project/${id}/tasks`} color="#0170E7FF" label="Task" />
          <Link href="#" color="green" label="Edit" />
          <Button onClick={() => setIsDestroyModalOpen(true)} color="red" label="Destroy" />
        </RowStyled>
      </div>
      {isDestroyModalObject && (
        <DestroyWindow
          isOpen={isDestroyModalObject}
          projectName={`project ${name}`}
          setIsOpen={setIsDestroyModalOpen}
        />
      )}
    </StyledCard>
  );
};

export default CardProject;
