import React, { useState } from "react";
import styled from "styled-components";

import TattooImg from "../atoms/TattooImg";
import TattooName from "../atoms/TattooName";
import BuyBtn from "../atoms/BuyBtn";
import Details from "../atoms/Details";
import Description from "../atoms/Description";
import ItemTable from "../atoms/ItemTable";

interface detail {
  contractAddress: string;
  tokenId: number;
  blockChain: string;
  tokenStandard: string;
}
interface IProps {
  username: string;
  tattooTitle: string;
  tattooImgUrl: string;
  ownerUserName: string;
  ownerAccount: string;
  price: string;
  intro: string;
  details: detail;
}

function TattooInfo({
  username,
  tattooImgUrl,
  tattooTitle,
  ownerUserName,
  ownerAccount,
  price,
  intro,
  details,
}: IProps) {
  return (
    <Container>
      <StyledTattoo>
        <TattooImg type={username} imgUrl={tattooImgUrl}></TattooImg>
        <Description intro={intro}></Description>
        <Details contractAddress={details.contractAddress}></Details>
      </StyledTattoo>
      <StyledInfo>
        <TattooName
          userName={username}
          tattooTitle={tattooTitle}
          ownerId={ownerUserName}
          price={price}
        ></TattooName>
        <BuyBtn
          ownerAccount={ownerAccount}
          contractAddress={details.contractAddress}
          tokenId={details.tokenId}
          price={price}
        ></BuyBtn>
        <ItemTable></ItemTable>
      </StyledInfo>
    </Container>
  );
}

export default TattooInfo;

const Container = styled.div`
  display: flex;

  padding-bottom: 32px;
`;
const StyledTattoo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInfo = styled.div`
  margin-left: 32px;
`;

const InfoBox = styled.div`
  margin-top: -140px;
  padding: 30px;
`;

const UserNameBox = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0 8px 0;
`;
