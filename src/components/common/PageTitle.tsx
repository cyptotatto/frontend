import React, { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

function PageTitle({ children }: IProps) {
  return <Title>{children}</Title>;
}

export default PageTitle;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
`;
