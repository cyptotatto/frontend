import React from "react";
import styled from "styled-components";
import Card from "../src/components/common/Card/templates/CardTemplate";

function explore() {
  return (
    <Wrap>
      <Card />
    </Wrap>
  );
}

export default explore;

const Wrap = styled.div`
  margin-top: 80px;
`;
