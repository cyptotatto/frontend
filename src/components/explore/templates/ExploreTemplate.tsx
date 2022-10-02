import React from "react";
import styled from "styled-components";

import Header from "../blocks/Header";
import TabBar from "../blocks/TabBar";
import TattoBox from "../blocks/TattooBox";

function ExploreTemplate() {
  return (
    <Wrap>
      <Header />
      <TabBar />
      <TattoBox />
    </Wrap>
  );
}

export default ExploreTemplate;

const Wrap = styled.div`
  padding: 24px;
`;
