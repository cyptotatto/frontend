import React, { useState } from "react";
import styled from "styled-components";

import TattooImg from "../atoms/TattooImg";
import TattooName from "../atoms/TattooName";

const Info = {
  username: "그레이트",
  tattooTitle: "엔틱 무드 레터링과 월계수 잎",
  tattooImgUrl: "/assets/tattoo_img.png",
  ownerId: "gumming",
  accountNum: "0x001700000001D19",
  intro:
    "그레이트는 올드 스쿨 장르를 기반으로 다양한 타투 NFT를 생성하는 타투이스트입니다.\n그레이트는 올드 스쿨 장르를 기반으로 다양한 타투 NFT를 생성하는 타투이스트입니다.\n\nWeb: https://greate.world Twiter: https://twitter.com/great Discord: https://discord.gg/great",
};

function TattooInfo() {
  return (
    <Container>
      <TattooImg type={Info.username} imgUrl={Info.tattooImgUrl}></TattooImg>
      <TattooName
        userName={Info.username}
        tattooTitle={Info.tattooTitle}
        ownerId={Info.ownerId}
      ></TattooName>
    </Container>
  );
}

export default TattooInfo;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 32px;
`;

const InfoBox = styled.div`
  margin-top: -140px;
  padding: 30px;
`;

const UserNameBox = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0 8px 0;
`;
