import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { provider, Tatto } from "../../../../contracts/contractConfig";
import { currencyManagerAtom } from "../../../../recoil/modal";
import { accountAtom } from "../../../../recoil/user";
import { makeEtherFromBigNumber } from "../../../../utils/transform";

function Balance() {
  const account = useRecoilValue(accountAtom);
  const setCurrencyManager = useSetRecoilState(currencyManagerAtom);
  const [walletBalance, setWalletBalance] = useState(0);
  const [tatuBalance, setTatuBalance] = useState(0);

  useEffect(() => {
    if (account && window) {
      getMyBalance(account).then((result) => {
        setWalletBalance(result);
      });
      getTattoBalace(account).then((result) => {
        setTatuBalance(result);
      });
    }
  }, [account]);

  const getMyBalance = async (_account: string): Promise<number> => {
    const value = window && (await provider.getBalance(_account));
    return makeEtherFromBigNumber(value);
  };

  const getTattoBalace = async (_account: string): Promise<number> => {
    const value = window && (await Tatto.currencyControl.balanceOf(_account));
    return makeEtherFromBigNumber(value);
  };

  return (
    <Wrap onClick={() => setCurrencyManager(true)}>
      <div className="title">
        <div>wallet</div>
        <Image
          src="/assets/metamask.svg"
          width={24}
          height={24}
          alt="metamask"
        />
      </div>
      <div className="eth-balance">
        <div className="eth-img">
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
        <div className="eth">{walletBalance}</div>
      </div>
      <div className="eth-balance">
        <div className="ether-img">
          <Image
            src="/assets/ethereum_white.svg"
            alt="ether-img"
            width={32}
            height={32}
          />
        </div>
        <div className="text">
          <div>TATU</div>
          <div>tatu balance</div>
        </div>
        <div className="eth">{tatuBalance}</div>
      </div>
    </Wrap>
  );
}

export default Balance;

const Wrap = styled.div`
  margin-left: 5%;
  width: 90%;
  border: 1px solid #7a7a7a;
  border-radius: 20px;
  margin-bottom: 24px;
  padding: 8px 24px;
  .title {
    font-weight: 600;
    font-size: 24px;
    text-align: left;
    display: flex;
    padding: 14px 5px;
    border-bottom: 1px solid #7a7a7a;
    div {
      margin-right: 10px;
    }
  }
  .eth-balance {
    padding: 20px 5px;
    display: flex;
    align-items: center;
    .eth-img {
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
    .eth {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
