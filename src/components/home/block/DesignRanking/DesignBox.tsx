import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../../../common/Card";
import nftAPI from "../../../../api/nft";
import UserAPI from "../../../../api/user";
import { ContractMethodNoResultError } from "wagmi";

type InfoType = {
  name: string;
  artist: string;
  artistImgUrl: string;
  tattooImgUrl: string;
  price: number;
  percentage: number;
  heartCnt: number;
  isHeart: boolean;
  sign: string;
  detailUrl: string;
};

function DesignBox() {
  const [rankingNfts, setRankingNfts] = useState<any>([]);
  const [top100Nfts, setTop100Nfts] = useState<InfoType[]>([]);
  const getRanking = async () => {
    const res = await nftAPI.getRankingNfts();
    const nftDatas = res?.data.nftTop100;
    nftDatas.map((nftData: any) => {
      const nft = {
        name: nftData.title,
        artist: nftData.artistId,
        artistImgUrl: null,
        tattooImgUrl: nftData.awsUrl,
        price: null,
        percentage: null,
        heartCnt: nftData.likeCount,
        isHeart: null,
        sign: null,
        detailUrl: null,
      };
      console.log(nft);
      setTop100Nfts((prev: any) => [...prev, nft]);
    });
    console.log(nftDatas);
    return res?.data;
  };
  useEffect(() => {
    const res = getRanking();
    setRankingNfts(res);
  }, []);

  return (
    <Wrap>
      {/*
        <button onClick={getAllNfts}>전체</button>
      <button onClick={createUser}>유저생성</button>
  */}
      {top100Nfts.map((nft: any) => {
        if (nft?.tattooImgUrl) {
          return (
            <>
              <Card nftInfo={nft} />
            </>
          );
        }
      })}
    </Wrap>
  );
}

export default DesignBox;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
