import React, { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

function Label({ children }: IProps) {
  return <StyledLabel>{children}</StyledLabel>;
}

export default Label;

const StyledLabel = styled.label`
  color: #bcbcbc;
  font-size: 12px;
  margin-bottom: 5px;
`;
