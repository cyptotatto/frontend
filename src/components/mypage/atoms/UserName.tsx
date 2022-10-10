import React, { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

function UserName({ children }: IProps) {
  return <Name>{children}</Name>;
}

export default UserName;

const Name = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin: 0;
`;
