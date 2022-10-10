import React from "react";
import styled from "styled-components";

import NavBar from "../NavBar";
import UserInfo from "../blocks/UserInfo";

function MypageTemplate() {
  return (
    <Wrap>
      <TopContent>
        <UserInfo />
      </TopContent>
      <NavBar />
    </Wrap>
  );
}

export default MypageTemplate;

const Wrap = styled.div`
  padding: 24px;
`;

const Account = styled.div``;

const Logout = styled.div``;

const TopContent = styled.div`
  margin-bottom: 34px;
`;
