import { BigNumber } from "ethers";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { provider, Tatto } from "../../../../contracts/contractConfig";
import { accountAtom } from "../../../../recoil/user";
import { LoadingPropsType } from "../../../../types/type";
import {
  makeEtherFromBigNumber,
  parseEtherFromNumber,
} from "../../../../utils/transform";
import BalanceForm from "../common/BalanceForm";
import CurrencyButton from "../common/CurrencyButton";
import CurrencyText from "../common/CurrencyText";

function WithdrawContainer({ startLoading }: LoadingPropsType) {
  const account = useRecoilValue(accountAtom);
  const [inputBalance, setInputBalance] = useState(0);
  const [tatuBalance, setTatuBalance] = useState(0);

  useEffect(() => {
    if (account && window) {
      getTattoBalace(account).then((result) => {
        setTatuBalance(result);
      });
    }
  }, [account]);

  const getTattoBalace = async (_account: string): Promise<number> => {
    const value = window && (await Tatto.currencyControl.balanceOf(_account));
    return makeEtherFromBigNumber(value);
  };

  const withdrawEther = async () => {
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
