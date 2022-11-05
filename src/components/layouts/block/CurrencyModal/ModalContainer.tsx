import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import CurrencyButton from "../../atom/common/CurrencyButton";
import CurrencyText from "../../atom/common/CurrencyText";
import DespositContainer from "../../atom/ModalContainer/DepositContrainer";
import ManagerAtom from "../../atom/ModalContainer/DepositContrainer";
import WithdrawContainer from "../../atom/ModalContainer/WithdrawContainer";

function ModalContainer() {
  const [type, setType] = useState("");
  switch (type) {
    case "deposit":
      return <DespositContainer />;
    case "withdraw":
      return <WithdrawContainer />;
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
            marginBottom="20"
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
`;
