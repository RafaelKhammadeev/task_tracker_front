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

const CardTask = ({ title = "", description = "", state = "" }) => {
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
    </StyledCard>
  );
};

export default CardTask;
