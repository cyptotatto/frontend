import React from "react";
import styled from "styled-components";
import Title from "../block/Ranking/Title";
import RankingBox from "../block/Ranking/RankingBox";
import Description from "../atom/RankingBox.tsx/Description";

// 8개 데이터 받아와서 4개씩 나눠서 넣기
function Ranking() {
  return (
    <Wrap>
      <Title />
      <BoxWrap>
        <RankingBox />
        <RankingBox />
      </BoxWrap>
    </Wrap>
  );
}

export default Ranking;

const Wrap = styled.div`
  margin: 0 10%;
`;

const BoxWrap = styled.div`
  display: flex;
  @media screen and (max-width: 1120px) {
    display: block;
  }
`;
