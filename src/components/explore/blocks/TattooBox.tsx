import React from "react";
import styled from "styled-components";

import Card from "../../common/Card";

function TattoBox() {
  return (
    <Box>
      <Card />
      <Card />
      <Card />
      <Card />
    </Box>
  );
}

export default TattoBox;

const Box = styled.div``;
