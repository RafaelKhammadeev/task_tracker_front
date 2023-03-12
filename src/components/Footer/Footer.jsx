import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: teal;
  padding: 0.5rem 1rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h1 className="header-footer-center"> 2023 Khammadeev Rafael </h1>
    </StyledFooter>
  );
};

export default Footer;
