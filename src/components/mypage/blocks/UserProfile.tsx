import React from "react";
import styled from "styled-components";

import CoverImgBox from "../atoms/CoverImgBox";
import UserInfo from "../atoms/UserInfo";

export type InfoType = {
  username: string;
  userImgUrl: string;
  userCoverImgUrl: string;
  accountNum: string;
  intro: string;
};

const userInfo: InfoType = {
  username: "UserName",
  userImgUrl: "/assets/user_default_img.png",
  userCoverImgUrl: "/",
  accountNum: "0x0017...1D19",
  intro:
    "그레이트는 올드 스쿨 장르를 기반으로 다양한 타투 NFT를 생성하는 타투이스트입니다.\n그레이트는 올드 스쿨 장르를 기반으로 다양한 타투 NFT를 생성하는 타투이스트입니다.\n\nWeb: https://greate.world Twiter: https://twitter.com/great Discord: https://discord.gg/great",
};

function UserProfile() {
  return (
    <Container>
      <CoverImgBox imgUrl={userInfo.userCoverImgUrl} />
      <UserInfo info={userInfo} />
    </Container>
  );
}

export default UserProfile;

const Container = styled.div``;
