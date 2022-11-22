import { BigNumber } from "ethers";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { useAccount, useProvider } from "wagmi";
import { getContract } from "../../../../contracts/contractConfig";
import { LoadingPropsType } from "../../../../types/type";
import {
  makeEtherFromBigNumber,
  parseEtherFromNumber,
} from "../../../../utils/transform";
import BalanceForm from "../common/BalanceForm";
import CurrencyButton from "../common/CurrencyButton";
import CurrencyText from "../common/CurrencyText";

function WithdrawContainer({ startLoading }: LoadingPropsType) {
  const { address } = useAccount();
  const [inputBalance, setInputBalance] = useState(0);
  const [tatuBalance, setTatuBalance] = useState(0);
  const provider = useProvider();

  const getTattoBalace = useCallback(
    async (_account: string): Promise<number> => {
      const Tatto = getContract(provider);
      const value = window && (await Tatto.currencyControl.balanceOf(_account));
      return makeEtherFromBigNumber(value);
    },
    [provider]
  );

  useEffect(() => {
    if (address) {
      getTattoBalace(address).then((result) => {
        setTatuBalance(result);
      });
    }
  }, [address, getTattoBalace]);

  const withdrawEther = async () => {
    const Tatto = getContract(provider);
    try {
      await Tatto.currencyControl.withdrawETH(
        parseEtherFromNumber(inputBalance)
      );
      startLoading();
    } catch (err) {
      console.log(err);
    }
  };

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
        marginBottom="20px"
      />
      <BalanceForm
        balance={tatuBalance}
        inputBalance={inputBalance}
        setInputBalance={setInputBalance}
      />
      <CurrencyButton handleClick={withdrawEther}>Withdraw</CurrencyButton>
    </Wrap>
  );
}

export default WithdrawContainer;

const Wrap = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;
