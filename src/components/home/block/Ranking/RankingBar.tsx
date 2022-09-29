import React from "react";
import styled from "styled-components";

interface RankingBarPropsType {
  rank: string;
  artist: string;
  type: string;
}

function RankingBar({ rank, artist, type }: RankingBarPropsType) {
  return (
    <Wrap>
      <div className="rank">{rank}</div>
      <div className="img"></div>
      <div className="artist">{artist}</div>
      <div className="type">{type}</div>
    </Wrap>
  );
}

export default RankingBar;

const Wrap = styled.div`
  margin-left: 38px;
  display: flex;
  height: 100px;
  align-items: center;
  margin-top: 10px;
  .rank {
    margin-left: 13px;
  }
  .img {
    width: 80px;
    height: 80px;
    background-color: white;
    border-radius: 100%;
    margin-left: 93px;
  }
  .artist {
    margin-left: 29.03px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
  .type {
    margin-left: 194.17px;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
  }
`;
