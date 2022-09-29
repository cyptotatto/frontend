import React from "react";
import styled from "styled-components";

import UserProfile from "./UserProfile";

function TattooInfoBox() {
  return (
    <Container>
      <TattooName>수선화 타투</TattooName>
      <UserProfile />
    </Container>
  );
}

export default TattooInfoBox;

const Container = styled.div`
  width: 50%;
`;

const TattooName = styled.h2`
  font-size: 24px;
  margin: 0 0 15px 0;
`;
