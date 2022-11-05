import Image from "next/image";
import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { currencyManagerAtom } from "../../../../recoil/modal";

function Balance() {
  const setCurrencyManager = useSetRecoilState(currencyManagerAtom);
  return (
    <Wrap onClick={() => setCurrencyManager(true)}>
      <div className="title">wallet 🦊</div>
      <div className="balance">
        <div className="ether-img">
          <Image
            src="/assets/ethereum_white.svg"
            alt="ether-img"
            width={32}
            height={32}
          />
        </div>
        <div className="text">
          <div>ETH</div>
          <div>Ethereum</div>
        </div>
        <div className="num">0</div>
      </div>
    </Wrap>
  );
}

export default Balance;

const Wrap = styled.div`
  margin-left: 5%;
  height: 153px;
  width: 90%;
  border: 1px solid #7a7a7a;
  border-radius: 20px;
  margin-bottom: 24px;
  padding: 13px 24px;
  .title {
    font-weight: 600;
    font-size: 24px;
    line-height: 19px;
    text-align: left;

    padding: 14px 5px;
    border-bottom: 1px solid #7a7a7a;
  }
  .balance {
    padding: 20px 5px;
    display: flex;
    align-items: center;
    .ether-img {
      width: 32px;
      height: 32px;
      border-radius: 100%;
      background-color: white;
    }
    .text {
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      flex: 1;
      text-align: left;
      padding-left: 16px;
      div:nth-child(2) {
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #7a7a7a;
      }
    }
    .num {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
