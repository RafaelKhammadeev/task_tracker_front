import React from "react";
import styled from "styled-components";
import Link from "../../atoms/Link";

const StyledHeader = styled.header`
  background: #a3a3a3;
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
      <StyledHeaderTextCenter>
        Task Tracker
        <Link href="/projects" label="projects" />
      </StyledHeaderTextCenter>
    </StyledHeader>
  );
};

export default Header;
