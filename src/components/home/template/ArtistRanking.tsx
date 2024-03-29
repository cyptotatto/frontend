import React from "react";

import styled from "styled-components";
import HomeTitle from "../../common/HomeTitle";
import RankingBox from "../block/ArtistRanking/RankingBox";
import Description from "../atom/RankingBox.tsx/Description";
import ResponsiveDescription from "../atom/RankingBox.tsx/ResponsiveDescription";
import Link from "next/link";

// 8개 데이터 받아와서 4개씩 나눠서 넣기
function ArtistRanking() {
  return (
    <Wrap>
      <Link href="/explore/artists">
        <a>
          <HomeTitle>아티스트 Top 100 🔥</HomeTitle>
        </a>
      </Link>
      <DescriptionWrap>
        <Description />
        <ResponsiveDescription />
      </DescriptionWrap>
      <BoxWrap>
        <RankingBox />
      </BoxWrap>
    </Wrap>
  );
}

export default ArtistRanking;

const Wrap = styled.div`
  margin: 0 7%;
`;

const DescriptionWrap = styled.div`
  display: flex;
`;

const BoxWrap = styled.div`
  display: flex;
  @media screen and (max-width: 1120px) {
    display: block;
  }
`;
