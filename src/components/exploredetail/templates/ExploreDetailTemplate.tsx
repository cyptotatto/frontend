import React from "react";
import styled from "styled-components";
import Description from "../atoms/Description";
import Details from "../atoms/Details";
import TattooInfo from "../blocks/TattooInfo";

function ExploreDetailTemplate() {
  const Info = {
    username: "그레이트",
    tattooTitle: "엔틱 무드 레터링과 월계수 잎",
    tattooImgUrl: "/assets/tattoo_img.png",
    ownerId: "gumming",
    accountNum: "0x001700000001D19",
    price: "0.022",
    intro:
      "그레이트는 올드 스쿨 장르를 기반으로 다양한 타투 NFT를 생성하는 타투이스트입니다.\n그레이트는 올드 스쿨 장르를 기반으로 다양한 타투 NFT를 생성하는 타투이스트입니다.\n\nWeb: https://greate.world Twiter: https://twitter.com/great Discord: https://discord.gg/great",
  };

  const Detail = {
    contractAddress: "0xex64..38f3",
    tokenId: "2089",
    blockChain: "Ethereum",
    tokenStandard: "ERC721",
  };
  return (
    <Wrap>
      <TattooInfo
        username={Info.username}
        tattooImgUrl={Info.tattooImgUrl}
        tattooTitle={Info.tattooTitle}
        ownerId={Info.ownerId}
        price={Info.price}
      ></TattooInfo>
      <div>
        <Description intro={Info.intro}></Description>
        <Details contractAddress={Detail.contractAddress}></Details>
      </div>
    </Wrap>
  );
}

export default ExploreDetailTemplate;

const Wrap = styled.div`
  padding: 24px;
`;

const TopContent = styled.div``;

const MainContent = styled.div``;
