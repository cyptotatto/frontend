import Image from "next/image";
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
      <div className="img">
        <Image
          src="/assets/artist_mock_img.svg"
          alt="artist_mock_image"
          width="80px"
          height="80px"
        />
      </div>
      <div className="artist">{artist}</div>
      <div className="type">{type}</div>
    </Wrap>
  );
}

export default RankingBar;

const Wrap = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  padding-top: 10px;
  .rank {
    width: 15%;
    padding-left: 25px;
  }
  .img {
  }
  .artist {
    padding-left: 20px;
    width: calc(68% - 80px);
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    padding-right: 10px;
  }
  .type {
    width: 17%;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
  }
`;
