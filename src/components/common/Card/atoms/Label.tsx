import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

function Label({ children }: Props) {
  return <StyledLabel>{children}</StyledLabel>;
}

export default Label;

const StyledLabel = styled.label`
  color: #bcbcbc;
  font-size: 12px;
  margin-bottom: 5px;
`;
