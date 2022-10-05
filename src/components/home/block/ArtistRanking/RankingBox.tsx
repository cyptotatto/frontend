import React from "react";
import styled from "styled-components";
import Description from "../../atom/RankingBox.tsx/Description";
import RankingBar from "../../atom/RankingBox.tsx/RankingBar";

function RankingBox() {
  return (
    <Wrap>
      <RankingBar rank="1" artist="Jane Cooper" type="올드스쿨, 뉴스쿨" />
      <RankingBar rank="1" artist="Jane Cooper" type="올드스쿨, 뉴스쿨" />
      <RankingBar rank="1" artist="Jane Cooper" type="올드스쿨, 뉴스쿨" />
      <RankingBar rank="1" artist="Jane Cooper" type="올드스쿨, 뉴스쿨" />
    </Wrap>
  );
}

export default RankingBox;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 400px;
  margin-right: 20px;
`;
