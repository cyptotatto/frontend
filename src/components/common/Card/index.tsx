import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import CustomButton from "../CustomButton";
import ImgBox from "./blocks/ImgBox";
import TattooInfoBox from "./blocks/TattooInfoBox";
import PriceBox from "./atoms/PriceBox";
import HeartBox from "./atoms/HeartBox";
import Link from "next/link";

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
  detailUrl: "/";
};

const tattooInfo: InfoType = {
  name: "수선화 타투",
  artist: "그레이트",
  artistImgUrl: "/assets/user_img.png",
  tattooImgUrl: "/assets/tattoo_img.png",
  price: 3331.9,
  percentage: 168.5,
  heartCnt: 96,
  isHeart: true,
  sign: "up",
  detailUrl: "/",
};

interface IProps {
  type?: string;
}

function Card({ type }: IProps) {
  const router = useRouter();

  return (
    <Container onClick={() => router.push(tattooInfo.detailUrl)}>
      <ImgBox imgUrl={tattooInfo.tattooImgUrl} isHeart={tattooInfo.isHeart} />
      <Content>
        <TopContent>
          <TattooInfoBox
            type={"artist"}
            name={tattooInfo.name}
            artist={tattooInfo.artist}
            artistImgUrl={tattooInfo.artistImgUrl}
          />
          {type === "art" && (
            <PriceBox
              sign={tattooInfo.sign}
              price={tattooInfo.price}
              percentage={tattooInfo.percentage}
            />
          )}
        </TopContent>
        <BottomContent>
          <HeartBox cnt={tattooInfo.heartCnt} />
        </BottomContent>
      </Content>
    </Container>
  );
}

export default Card;

const Container = styled.div`
  display: inline-block;
  background: black;
  color: white;
  padding: 16px;
  border-radius: 22px;
  width: 100%;
  cursor: pointer;

  @media screen and (700px < width < 1000px) {
    width: 50%;
  }
  @media screen and (min-width: 1000px) {
    width: 33%;
  }
`;
const Content = styled.div`
  padding: 22px 0;
`;

const TopContent = styled.div`
  display: flex;
  width: 100%;
`;

const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;
