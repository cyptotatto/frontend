import React, { useState } from "react";
import styled from "styled-components";

import CustomButton from "../CustomButton";
import ImgBox from "../Card/blocks/ImgBox";
import TattooInfoBox from "../Card/blocks/TattooInfoBox";
import PriceBox from "../Card/blocks/PriceBox";
import HeartBox from "./blocks/HeartBox";
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
  sign: "down",
  detailUrl: "/",
};

function Card() {
  return (
    <Container>
      <ImgBox imgUrl={tattooInfo.tattooImgUrl} isHeart={tattooInfo.isHeart} />
      <Content>
        <TopContent>
          <TattooInfoBox
            name={tattooInfo.name}
            artist={tattooInfo.artist}
            artistImgUrl={tattooInfo.artistImgUrl}
          />
          <PriceBox
            sign={tattooInfo.sign}
            price={tattooInfo.price}
            percentage={tattooInfo.percentage}
          />
        </TopContent>
        <BottomContent>
          <HeartBox cnt={tattooInfo.heartCnt} />
          <Link href={tattooInfo.detailUrl}>
            <a>
              <CustomButton active="true">Buy Now</CustomButton>
            </a>
          </Link>
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
