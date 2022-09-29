import React from "react";
import styled from "styled-components";

import Image from "next/image";
import Label from "../atoms/Label";

function PriceBox() {
  return (
    <Wrap>
      <Container>
        <LabelWrap>
          <Label>Price</Label>
        </LabelWrap>
        <Price>
          <Image
            id="ethereumIcon"
            src="/assets/ethereum.svg"
            width="18"
            height="18"
            alt="ethereumIcon"
          />
          <Num>3,331.9</Num>
        </Price>
        <div>
          <Percentage>168.5%</Percentage>
          <Image id="arrowIcon" src="" alt="arrowIcon" />
        </div>
      </Container>
    </Wrap>
  );
}

export default PriceBox;

const Wrap = styled.div`
  display: flex;
  justify-content: end;
  width: 50%;
  margin-top: 5px;
`;

const Container = styled.div``;

const LabelWrap = styled.div`
  margin-left: 22px;
`;

const Price = styled.div``;

const Num = styled.span`
  font-weight: 700;
  font-size: 28px;
  margin-left: 2px;
`;

const Percentage = styled.span`
  display: inline-block;
  width: 100%;
  text-align: right;
  color: #78e490;
  font-size: 20px;
`;
