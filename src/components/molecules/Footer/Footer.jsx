import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: teal;
  padding: 0.5rem 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: black;
  text-align: center;
  font-size: 20px;
`;

const Footer = () => {
  return <StyledFooter> © Khammadeev Rafael 2023 </StyledFooter>;
};

export default Footer;
