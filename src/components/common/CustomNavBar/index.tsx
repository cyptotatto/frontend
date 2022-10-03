import React, { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

function NavBar({ children }: IProps) {
  return <Nav>{children}</Nav>;
}

export default NavBar;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #7a7a7a;
`;
