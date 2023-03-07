import React from "react";
import styled from "styled-components";
import Card from "../../../common/Card";
import nftAPI from "../../../../api/nft";
function DesignBox() {
  const getRanking = async () => {
    const res = await nftAPI.getRankingNfts();
    console.log(res);
  };

  return (
    <Wrap>
      <button onClick={getRanking}>랭킹</button>
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
