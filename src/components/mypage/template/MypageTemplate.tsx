import React from "react";
import styled from "styled-components";

import NavBar from "../blocks/NavBar";
import UserProfile from "../blocks/UserProfile";
import TabBar from "../blocks/TabBar";
import ListBox from "../blocks/ListBox";

function MypageTemplate() {
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

export default MypageTemplate;

const Wrap = styled.div`
  padding: 24px;
`;

const TopContent = styled.div``;

const MainContent = styled.div``;
