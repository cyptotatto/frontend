import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import BalanceForm from "../common/BalanceForm";
import CurrencyButton from "../common/CurrencyButton";
import CurrencyText from "../common/CurrencyText";

function DespositContainer() {
  const handleCurrency = () => {};
  const [inputBalance, setInputBalance] = useState(0);
  const [walletBalance, setWalletBalance] = useState("33");
  return (
    <Wrap>
      <Image
        src="/assets/deposit.svg"
        alt="deposit"
        width={40}
        height={40}
      ></Image>
      <CurrencyText
        mainText="입금하기"
        subText="입금하고 싶은 금액을 입력해주세요"
        marginBottom="20"
      />
      <BalanceForm
        balance={walletBalance}
        inputBalance={inputBalance}
        setInputBalance={setInputBalance}
      />
      <CurrencyButton handleClick={handleCurrency}>Deposit</CurrencyButton>
    </Wrap>
  );
}

export default DespositContainer;

const Wrap = styled.div`
  text-align: center;
`;
