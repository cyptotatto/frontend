import React from "react";
import styled from "styled-components";
import Card from "../../../common/Card";
import nftAPI from "../../../../api/nft";
function DesignBox() {
  const getRanking = async () => {
    const res = await nftAPI.getRankingNfts();
    console.log(await nftAPI.getRankingNfts());
    console.log(res);
  };
  const getAllNfts = async () => {
    const res = await nftAPI.getAllNfts();
    console.log(await nftAPI.getAllNfts());
    console.log(res);
  };

  return (
    <Wrap>
      <button onClick={getRanking}>랭킹</button>
      <button onClick={getAllNfts}>전체</button>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Wrap>
  );
}

export default DesignBox;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
