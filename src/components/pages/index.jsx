import styled from "styled-components";
import React from "react";
import DefaultTemplate from "../templates/DefaultTemplate";
import Button from "../atoms/Button";

const StyledMyDescription = styled.li`
  font-size: 20px;
`;

const StyledMyDescriptionList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

const HomePage = () => {
  const onClick = () => {
    console.log("Hello World");
  };
  return (
    <DefaultTemplate>
      <StyledMyDescriptionList>
        <StyledMyDescription> I`m a good swimmer </StyledMyDescription>
        <StyledMyDescription> I love bicycle </StyledMyDescription>
        <StyledMyDescription> I`ve been to baikal </StyledMyDescription>
      </StyledMyDescriptionList>
      <Button disable={false} onClick={onClick} label="hello" />
    </DefaultTemplate>
  );
};

export default HomePage;
