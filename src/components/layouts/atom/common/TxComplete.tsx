import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { typePropsType } from "../../../../types/type";
import CurrencyText from "./CurrencyText";

function TxComplete({ type }: typePropsType) {
  const [mainText, setMainText] = useState("");

  useEffect(() => {
    switch (type) {
      case "deposit":
        setMainText("입금이 완료되었습니다");
      case "withdraw":
        setMainText("출금이 완료되었습니다");
    }
  }, [type]);
  return (
    <Wrap>
      <Image src="/assets/check.svg" alt="check" width={64} height={64} />
      <CurrencyText
        mainText={mainText}
        subText="기다려주셔셔 감사합니다"
        marginTop="8px"
        marginBottom="44px"
      />
    </Wrap>
  );
}

export default TxComplete;

const Wrap = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;
