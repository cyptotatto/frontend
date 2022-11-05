import { BigNumber } from "ethers";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Tatto } from "../../../../contracts/contractConfig";
import { TattoCurrencyListener } from "../../../../contracts/eventListener";
import CurrencyButton from "../../atom/common/CurrencyButton";
import CurrencyText from "../../atom/common/CurrencyText";
import Loading from "../../atom/common/Loading";
import TxComplete from "../../atom/common/TxComplete";
import DespositContainer from "../../atom/ModalContainer/DepositContainer";
import WithdrawContainer from "../../atom/ModalContainer/WithdrawContainer";

function ModalContainer() {
  const [loading, setLoading] = useState(0);
  const [type, setType] = useState("");

  useEffect(() => {
    const listener = (from: string, to: string, amount: BigNumber) => {
      setLoading(2);
    };

    TattoCurrencyListener.addDepositListener(Tatto.currencyControl, listener);
    TattoCurrencyListener.addWithdrawListener(Tatto.currencyControl, listener);
    return () => {
      TattoCurrencyListener.deleteDepositListener(
        Tatto.currencyControl,
        listener
      );
      TattoCurrencyListener.deleteWithdrawListener(
        Tatto.currencyControl,
        listener
      );
    };
  }, []);
  if (loading === 1) {
    return <Loading />;
  }
  if (loading === 2) {
    return <TxComplete type={type} />;
  }
  switch (type) {
    case "deposit":
      return <DespositContainer startLoading={() => setLoading(1)} />;
    case "withdraw":
      return <WithdrawContainer startLoading={() => setLoading(1)} />;
    default:
      return (
        <Wrap>
          <Image
            src="/assets/currency_manager_img.svg"
            alt="currency_manager"
            width={40}
            height={40}
          ></Image>
          <CurrencyText
            mainText="입출금하기"
            subText="원하시는 서비스를 클릭해주세요"
            marginBottom="20px"
          />
          <CurrencyButton handleClick={() => setType("deposit")}>
            입금하기
          </CurrencyButton>
          <CurrencyButton handleClick={() => setType("withdraw")}>
            출금하기
          </CurrencyButton>
        </Wrap>
      );
  }
}

export default ModalContainer;

const Wrap = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;
