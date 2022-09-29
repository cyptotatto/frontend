import React from "react";
import styled from "styled-components";
import Description from "../block/Ranking/Description";
import RankingBar from "../block/Ranking/RankingBar";
import Title from "../block/Ranking/Title";

function Ranking() {
  return (
    <Wrap>
      <Title />
      <Description />
      <RankingBar rank="1" artist="Jane Cooper" type="올드스쿨, 뉴스쿨" />
    </Wrap>
  );
}

export default Ranking;

const Wrap = styled.div`
  margin: 0 14%;
`;
