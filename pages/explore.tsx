import React from "react";
import styled from "styled-components";

import ExploreTemplate from "../src/components/explore/templates/ExploreTemplate";

function explore() {
  return (
    <Wrap>
      <ExploreTemplate />
    </Wrap>
  );
}

export default explore;

const Wrap = styled.div`
  margin-top: 80px;
`;
