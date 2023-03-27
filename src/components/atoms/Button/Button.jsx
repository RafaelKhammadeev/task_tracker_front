import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button(
  ({ color }) => css`
    background-color: ${color};
    border: none;
    color: white;
    padding: 4px 8px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 4px;
    margin: 2px;
  `,
);

const Button = ({ label, disable = false, onClick = () => {}, color = "#2f2f2f" }) => {
  return (
    <StyledButton color={color} onClick={onClick} disabled={disable}>
      {label}
    </StyledButton>
  );
};

export default Button;
