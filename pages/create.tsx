import React from "react";
import styled from "styled-components";

import CreateTemplate from "../src/components/create/templates/CreateTemplate";

function create() {
  return (
    <Wrap>
      <CreateTemplate />
    </Wrap>
  );
}

export default create;

const Wrap = styled.div`
  margin-top: 80px;
`;
