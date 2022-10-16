import React, { useState } from "react";
import styled from "styled-components";

import TattooImg from "../atoms/TattooImg";
import TattooName from "../atoms/TattooName";
import BuyBtn from "../atoms/BuyBtn";

interface IProps {
  username: string;
  tattooTitle: string;
  tattooImgUrl: string;
  ownerId: string;
  price: string;
}

function TattooInfo({
  username,
  tattooImgUrl,
  tattooTitle,
  ownerId,
  price,
}: IProps) {
  return (
    <Container>
      <TattooImg type={username} imgUrl={tattooImgUrl}></TattooImg>
      <StyledInfo>
        <TattooName
          userName={username}
          tattooTitle={tattooTitle}
          ownerId={ownerId}
          price={price}
        ></TattooName>
        <BuyBtn></BuyBtn>
      </StyledInfo>
    </Container>
  );
}

export default TattooInfo;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 32px;
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
