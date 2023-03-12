import React from "react";
import styled from "styled-components";
import "./Main.css";

const StyledMain = styled.header`
  background: #00b8b8;
`;

const Main = () => {
  return (
    <StyledMain>
      <ul className="my-description-list">
        <li className="my-description">I`m a good swimmer </li>
        <li className="my-description">I love bicycle </li>
        <li className="my-description">I`ve been to baikal </li>
      </ul>
    </StyledMain>
  );
};

export default Main;
