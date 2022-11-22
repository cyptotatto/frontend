import React from "react";
import styled from "styled-components";

import PageTitle from "../../common/PageTitle";
import NavBar from "../blocks/NavBar";

function Header() {
  return (
    <StyledHeader>
      <PageTitle>Explore</PageTitle>
      <NavBar />
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header``;
