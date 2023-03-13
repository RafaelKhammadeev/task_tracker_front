import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: teal;
  padding: 0.5rem 1rem;
`;

const StyledFooterTextCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterTextCenter> ©Khammadeev Rafael 2023 </StyledFooterTextCenter>
    </StyledFooter>
  );
};

export default Footer;
