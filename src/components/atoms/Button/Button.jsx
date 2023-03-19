import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button(
  ({ color }) => css`
    background: ${color};
    color: white;
  `,
);

const Button = ({ label, disable = false, onClick = () => {}, color = "black" }) => {
  return (
    <StyledButton color={color} onClick={onClick} disabled={disable}>
      {label}
    </StyledButton>
  );
};

export default Button;
