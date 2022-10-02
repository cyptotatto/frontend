import React from "react";
import styled from "styled-components";

import Header from "../blocks/Header";
import FilterTab from "../blocks/Filter/FilterTab";
import TabBar from "../blocks/TabBar";
import TattoBox from "../blocks/TattooBox";

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
