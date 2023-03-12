import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: teal;
  padding: 0.5rem 1rem;
  position: sticky;
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-footer-center"> Task Tracker </div>
    </StyledHeader>
  );
};

export default Header;
