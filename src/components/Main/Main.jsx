import React from "react";
import styled from "styled-components";

const StyledMain = styled.header`
  background: #00b8b8;
`;

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

const Main = () => {
  return (
    <StyledMain>
      <StyledMyDescriptionList>
        <StyledMyDescription> I`m a good swimmer </StyledMyDescription>
        <StyledMyDescription> I love bicycle </StyledMyDescription>
        <StyledMyDescription> I`ve been to baikal </StyledMyDescription>
      </StyledMyDescriptionList>
    </StyledMain>
  );
};

export default Main;
