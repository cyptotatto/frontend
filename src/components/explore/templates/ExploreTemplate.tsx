import React from "react";
import styled from "styled-components";
import PageTitle from "../../common/PageTitle";
import NavBar from "../blocks/NavBar";
import TabBar from "../blocks/TabBar";
import TattoBox from "../blocks/TattoBox";

function ExploreTemplate() {
  return (
    <Wrap>
      <PageTitle>Explore</PageTitle>
      <NavBar />
      <TabBar />
      <TattoBox />
    </Wrap>
  );
}

export default ExploreTemplate;

const Wrap = styled.div``;
