import React from "react";
import styled from "styled-components";

import FilterMenuBox from "./Filter/FilterMenuBox";
import SelectMenuBox from "./Select/SelectMenuBox";

function NavBar() {
  return (
    <Nav>
      <FilterMenuBox />
      <SelectMenuBox />
    </Nav>
  );
}

export default NavBar;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #7a7a7a;
`;
