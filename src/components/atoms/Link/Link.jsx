import React from "react";
import styled, { css } from "styled-components";

const StyledLink = styled.a(
  ({ color }) => css`
    background: ${color};
    color: white;
  `,
);

const Link = ({ label, href = "#", color = "black" }) => {
  return (
    <StyledLink href={href} color={color}>
      {label}
    </StyledLink>
  );
};

export default Link;
