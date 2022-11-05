import React from "react";
import styled from "styled-components";

import NavBar from "../blocks/NavBar";
import UserProfile from "../blocks/UserProfile";
import TabBar from "../../explore/template/TabBar";
import ListBox from "../../mypage/blocks/ListBox";

function ArtistTemplate() {
  return (
    <Wrap>
      <TopContent>
        <UserProfile />
        <NavBar />
      </TopContent>
      <MainContent>
        <TabBar />
        <ListBox />
      </MainContent>
    </Wrap>
  );
}

export default ArtistTemplate;

const Wrap = styled.div`
  padding: 24px;
`;

const TopContent = styled.div``;

const MainContent = styled.div``;
