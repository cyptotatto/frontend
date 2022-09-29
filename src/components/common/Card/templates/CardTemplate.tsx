import React, { useState } from "react";
import styled from "styled-components";

import CustomButton from "../../CustomButton";
import ImgBox from "../../Card/blocks/ImgBox";
import TattooInfoBox from "../../Card/blocks/TattooInfoBox";
import PriceBox from "../../Card/blocks/PriceBox";
import HeartBox from "../blocks/HeartBox";

function Card() {
  return (
    <Container>
      <ImgBox />
      <Content>
        <TopContent>
          <TattooInfoBox />
          <PriceBox />
        </TopContent>
        <BottomContent>
          <HeartBox />
          <CustomButton active="true">Buy Now</CustomButton>
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
  border-radius: 22px;
`;

const Content = styled.div`
  padding: 24px;
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
