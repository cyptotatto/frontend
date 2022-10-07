import Image from "next/image";
import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { walletAtom } from "../../recoil/modal";
import { accountAtom } from "../../recoil/user";
import { makeShortAddress } from "../../utils/transform";
import CustomButton from "../common/CustomButton";
import Balance from "./block/Balance";
import CloseButton from "./block/CloseButton";
import WalletUserInfo from "./block/WalletUserInfo";

function WalletModal() {
  const account = useRecoilValue(accountAtom);
  const setWallet = useSetRecoilState(walletAtom);

  const closeWallet = () => {
    setWallet("");
  };
  return (
    <Wrap>
      <Back></Back>
      <Modal>
        <CloseButton handleClick={closeWallet} />
        <WalletUserInfo account={account} />
        <Balance></Balance>
        <CustomButton active="false">Disconnect</CustomButton>
      </Modal>
    </Wrap>
  );
}

export default WalletModal;

const Wrap = styled.div`
  height: 100vh;
  position: fixed;
  z-index: 20;
  left: 0;
  right: 0;
  right: 0;
  top: 0;
  bottom: 0;
  line-height: normal;
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.3;
`;

const Modal = styled.div`
  position: absolute;
  height: 100vh;
  top: 0px;
  right: 0px;
  width: 375px;
  background-color: black;
  color: white;
  text-align: center;
`;
