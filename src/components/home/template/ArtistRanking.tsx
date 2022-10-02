import React from "react";
import styled from "styled-components";
import HomeTitle from "../../common/HomeTitle";
import RankingBox from "../block/ArtistRanking/RankingBox";
import Description from "../atom/RankingBox.tsx/Description";

// 8개 데이터 받아와서 4개씩 나눠서 넣기
function ArtistRanking() {
  return (
    <Wrap>
      <HomeTitle>아티스트 Top 100 🔥</HomeTitle>
      <DescriptionWrap>
        <Description />
        <Responsive>
          <Description />
        </Responsive>
      </DescriptionWrap>
      <BoxWrap>
        <RankingBox />
        <RankingBox />
      </BoxWrap>
    </Wrap>
  );
}

export default ArtistRanking;

const Wrap = styled.div`
  margin: 0 10%;
`;

const DescriptionWrap = styled.div`
  display: flex;
`;

const Responsive = styled.div`
  width: 100%;
  @media screen and (max-width: 1120px) {
    display: none;
  }
`;

const BoxWrap = styled.div`
  display: flex;
  @media screen and (max-width: 1120px) {
    display: block;
  }
`;
