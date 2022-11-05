import Image from "next/image";
import React from "react";
import styled, { keyframes } from "styled-components";
import CurrencyText from "./CurrencyText";

function Loading() {
  return (
    <Wrap>
      <ImageWraper>
        <Image src="/assets/loading.svg" alt="loading" width={64} height={64} />
      </ImageWraper>
      <CurrencyText
        mainText="트랜잭션이 진행중입니다"
        subText="잠시만 기다려주세요"
        marginTop="24px"
        marginBottom="60px"
      />
    </Wrap>
  );
}

export default Loading;

const Wrap = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const spin = keyframes`
from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ImageWraper = styled.div`
  animation: ${spin} 2s linear infinite;
`;
