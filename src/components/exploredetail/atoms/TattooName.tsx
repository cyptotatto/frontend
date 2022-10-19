import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import HeartBtn from "./HeartArtist";

import EthereumIcon from "../../../../public/assets/ethereum.svg";
interface IProps {
  userName: string;
  tattooTitle: string;
  ownerId: string;
  // imgUrl: string;
  price: string;
}

function TattooName({ userName, tattooTitle, ownerId, price }: IProps) {
  const [heart, setHeart] = useState(true);

  return (
    <div>
      <StyledName>{userName}</StyledName>

      <StyledTitle>
        <h1>{tattooTitle}&nbsp;</h1>
        <HeartBtn isHeart={heart}></HeartBtn>
      </StyledTitle>

      <StyledOwner>
        Owner by&nbsp;<StyledOwnerName> {ownerId}</StyledOwnerName>
      </StyledOwner>

      <StyledCurrentPrice>current price</StyledCurrentPrice>

      <StyledPrice>
        <EthereumIcon></EthereumIcon>
        <h1>&nbsp;{price}</h1>
      </StyledPrice>
    </div>
  );
}

export default TattooName;

const StyledName = styled.h1`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.02em;

  color: #7a7a7a;
`;
const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 32px;
  margin: 0;
  h1 {
    margin: 0;
  }
`;
const StyledCurrentPrice = styled.h1`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.02em;

  color: #7a7a7a;
`;

const StyledPrice = styled.div`
  display: flex;
  align-items: center;
  h1 {
    margin: 0;
  }
`;

const StyledOwner = styled.h1`
  font-family: "Acumin Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;

  letter-spacing: 0.02em;

  color: #7a7a7a;

  h1 {
    margin: 0;
  }
`;

const StyledOwnerName = styled.span`
  background: linear-gradient(180deg, #da3a3a 0%, #da3a3a 0.01%, #9723ce 100%);
  font-weight: 700;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
