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

function DespositContainer({ startLoading }: LoadingPropsType) {
  const { address } = useAccount();
  const [inputBalance, setInputBalance] = useState(0);
  const [walletBalance, setWalletBalance] = useState(0);
  const provider = useProvider();

  const getmyBalance = useCallback(
    async (_account: string): Promise<number> => {
      const value = window && (await provider.getBalance(_account));
      return makeEtherFromBigNumber(value);
    },
    [provider]
  );

  useEffect(() => {
    if (address) {
      getmyBalance(address).then((result) => {
        setWalletBalance(result);
      });
    }
  }, [address, getmyBalance]);

  const depositEther = async () => {
    const Tatto = getContract(provider);
    try {
      await Tatto.currencyControl.depositETH({
        value: parseEtherFromNumber(inputBalance),
      });
      startLoading();
    } catch (err) {
      console.log(err);
    }
  };

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
        marginBottom="20px"
      />
      <BalanceForm
        balance={walletBalance}
        inputBalance={inputBalance}
        setInputBalance={setInputBalance}
      />
      <CurrencyButton handleClick={depositEther}>Deposit</CurrencyButton>
    </Wrap>
  );
}

export default DespositContainer;

const Wrap = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;
