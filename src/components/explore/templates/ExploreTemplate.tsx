import React from "react";
import styled from "styled-components";

import Header from "./Header";
import FilterTab from "./FilterTab";
import TabBar from "./TabBar";
import TattoBox from "./TattooBox";

function ExploreTemplate() {
  return (
    <Wrap>
      <Header />
      <Container>
        <FilterTab />
        <MainContent>
          <TabBar />
          <TattoBox />
        </MainContent>
      </Container>
    </Wrap>
  );
}

export default ExploreTemplate;

const Wrap = styled.div`
  padding: 24px;
`;

const Container = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
