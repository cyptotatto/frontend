import React from "react";
import styled from "styled-components";

import CoverImgBox from "../../mypage/atoms/CoverImgBox";
import AccountNumBox from "../atoms/AccountNumBox";
import UserImg from "../../mypage/atoms/UserImg";
import UserName from "../../mypage/atoms/UserName";
import Intro from "../../mypage/atoms/Intro";
import HeartBtn from "./HeartBtn";
import Figure from "../atoms/Figure";

const userInfo = {
  username: "그레이트",
  userImgUrl: "/assets/user_img.png",
  userCoverImgUrl: "/",
  accountNum: "0x001700000001D19",
  intro:
    "그레이트는 올드 스쿨 장르를 기반으로 다양한 타투 NFT를 생성하는 타투이스트입니다.\n그레이트는 올드 스쿨 장르를 기반으로 다양한 타투 NFT를 생성하는 타투이스트입니다.\n\nWeb: https://greate.world Twiter: https://twitter.com/great Discord: https://discord.gg/great",
  floor: 0.242,
  volume: 16,
  items: "7.8K",
  owners: "3.2K",
};

function UserProfile() {
  return (
    <Container>
      <CoverImgBox imgUrl={userInfo.userCoverImgUrl} />
      <InfoBox>
        <UserImg type="square" imgUrl={userInfo.userImgUrl} />
        <UserNameBox>
          <UserName>{userInfo.username}</UserName>
          <HeartBtn isHeart={true} />
        </UserNameBox>
        <AccountNumBox accountNum={userInfo.accountNum} />
        <Intro intro={userInfo.intro} />
        <FigureBox>
          <Figure title="Floor" isEthereum={true} num={userInfo.floor} />
          <Figure title="Volume" isEthereum={true} num={userInfo.volume} />
          <Figure title="Items" isEthereum={false} num={userInfo.items} />
          <Figure title="Owners" isEthereum={false} num={userInfo.owners} />
        </FigureBox>
      </InfoBox>
    </Container>
  );
}

export default UserProfile;

const Container = styled.div`
  padding-bottom: 32px;
`;

const InfoBox = styled.div`
  margin-top: -140px;
  padding: 30px;
`;

const UserNameBox = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0 18px 0;
  gap: 16px;
`;

const FigureBox = styled.div`
  display: flex;
  gap: 30px;
`;
