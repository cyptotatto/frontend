import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface BalanceFormType {
  balance: string;
  inputBalance: number;
  setInputBalance: Dispatch<SetStateAction<number>>;
}

function BalanceForm({
  balance,
  inputBalance,
  setInputBalance,
}: BalanceFormType) {
  return (
    <Wrap>
      <div className="main-text">입금할 금액 입력</div>
      <div className="input">
        <input
          onChange={() => setInputBalance(inputBalance)}
          value={inputBalance}
        ></input>
        <span>ETH</span>
      </div>
      <div className="bottom-text">
        현재 내 지갑 잔액 : <span>{balance}</span> ETH
      </div>
    </Wrap>
  );
}

export default BalanceForm;

const Wrap = styled.div`
  margin: 4px 24px;
  text-align: start;
  .main-text {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
  }
  .input {
    margin: 8px 0;
    input {
      width: 299px;
      height: 40px;
      background: #191919;
      border-radius: 10px;
      border: none;
      padding: 8px;
      color: #7a7a7a;
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 22px;
    }
    span {
      margin-left: 8px;
    }
  }
  .bottom-text {
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #7a7a7a;
    span {
      color: white;
    }
  }
  margin-bottom: 60px;
`;
