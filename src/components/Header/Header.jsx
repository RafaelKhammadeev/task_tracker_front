import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: teal;
  padding: 0.5rem 1rem;
  position: sticky;
`;

const StyledHeaderTextCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderTextCenter> Task Tracker </StyledHeaderTextCenter>
    </StyledHeader>
  );
};

export default Header;
