import React from "react";
import styled from "styled-components";
import Card from "../../../common/Card";

function DesignBox() {
  return (
    <Wrap>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Wrap>
  );
}

export default DesignBox;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
