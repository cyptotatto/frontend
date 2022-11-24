import React from "react";
import styled from "styled-components";
import Description from "../atoms/Description";
import Details from "../atoms/Details";
import ItemTable from "../atoms/ItemTable";
import TattooInfo from "../blocks/TattooInfo";

function ExploreDetailTemplate() {
  const Info = {
    username: "그레이트",
    tattooTitle: "엔틱 무드 레터링과 월계수 잎",
    tattooImgUrl: "/assets/tattoo_img.png",
    ownerUserName: "gumming",
    ownerAccount: "0xE976893Bf88F6CC81ae942cE9531fBebd8530D81",
    price: "0.0001",
    intro:
      "그레이트는 올드 스쿨 장르를 기반으로 다양한 타투 NFT를 생성하는 타투이스트입니다.\n그레이트는 올드 스쿨 장르를 기반으로 다양한 타투 NFT를 생성하는 타투이스트입니다.\n\nWeb: https://greate.world Twiter: https://twitter.com/great Discord: https://discord.gg/great",
  };

  const Detail = {
    contractAddress: "0xe4F0E339c173EDb993bAe6f85DC1dcfc9EBbe810",
    tokenId: 1,
    blockChain: "Ethereum",
    tokenStandard: "ERC721",
  };
  return (
    <Wrap>
      <InfoBox>
        <TattooInfo
          username={Info.username}
          tattooImgUrl={Info.tattooImgUrl}
          tattooTitle={Info.tattooTitle}
          ownerUserName={Info.ownerUserName}
          ownerAccount={Info.ownerAccount}
          price={Info.price}
          intro={Info.intro}
          details={Detail}
        ></TattooInfo>
      </InfoBox>
      <StyledDescript></StyledDescript>
    </Wrap>
  );
}

export default ExploreDetailTemplate;

const Wrap = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InfoBox = styled.div`
  padding: 0;
`;

const StyledDescript = styled.div``;

const TopContent = styled.div``;

const MainContent = styled.div``;
