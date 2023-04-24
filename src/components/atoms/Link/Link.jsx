import React from "react";
import styled, { css } from "styled-components";

const StyledLink = styled.a(
  ({ color, textColor }) => css`
    background: ${color};
    color: ${textColor};
    text-decoration: none;
    border: none;
    padding: 4px 8px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    border-radius: 4px;
    margin: 2px;
  }
  `,
);

const Link = ({ label, href = "#", color = "black", textColor = "white" }) => {
  return (
    <StyledLink href={href} color={color} textColor={textColor}>
      {label}
    </StyledLink>
  );
};

export default Link;
