import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import CurrencyButton from "../common/CurrencyButton";
import CurrencyText from "../common/CurrencyText";

function WithdrawContainer() {
  const handleCurrency = () => {};
  return (
    <Wrap>
      <Image
        src="/assets/withdraw.svg"
        alt="withdraw"
        width={40}
        height={40}
      ></Image>
      <CurrencyText
        mainText="출금하기"
        subText="출금하고 싶은 금액을 입력해주세요"
        marginBottom="20"
      />
      <CurrencyButton handleClick={handleCurrency}>Withdraw</CurrencyButton>
    </Wrap>
  );
}

export default WithdrawContainer;

const Wrap = styled.div`
  text-align: center;
`;
