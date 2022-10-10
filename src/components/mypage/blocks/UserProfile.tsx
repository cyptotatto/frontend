import React, { useState } from "react";
import styled from "styled-components";

import CoverImgBox from "../atoms/CoverImgBox";
import AccountNumBox from "../atoms/AccountNumBox";
import Setting from "../atoms/Setting";
import UserImg from "../atoms/UserImg";
import UserName from "../atoms/UserName";
import Intro from "../atoms/Intro";

const userInfo = {
  username: "UserName",
  userImgUrl: "/assets/user_default_img.png",
  userCoverImgUrl: "/",
  accountNum: "0x001700000001D19",
  intro:
    "그레이트는 올드 스쿨 장르를 기반으로 다양한 타투 NFT를 생성하는 타투이스트입니다.\n그레이트는 올드 스쿨 장르를 기반으로 다양한 타투 NFT를 생성하는 타투이스트입니다.\n\nWeb: https://greate.world Twiter: https://twitter.com/great Discord: https://discord.gg/great",
};

function UserProfile() {
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  const onToggleSetting = () => setIsSettingOpen((prev) => !prev);

  return (
    <Container>
      <CoverImgBox imgUrl={userInfo.userCoverImgUrl} />
      <InfoBox>
        <UserImg imgUrl={userInfo.userImgUrl} />
        <UserNameBox>
          <UserName>{userInfo.username}</UserName>
          <Setting isOpen={isSettingOpen} onToggleSetting={onToggleSetting} />
        </UserNameBox>
        <AccountNumBox accountNum={userInfo.accountNum} />
        <Intro intro={userInfo.intro} />
      </InfoBox>
    </Container>
  );
}

export default UserProfile;

const Container = styled.div``;

const InfoBox = styled.div`
  margin-top: -140px;
  padding: 30px;
`;

const UserNameBox = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0 8px 0;
`;
