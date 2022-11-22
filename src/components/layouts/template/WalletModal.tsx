import Image from "next/image";
import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { makeShortAddress } from "../../../utils/transform";
import CustomButton from "../../common/CustomButton";
import CloseButton from "../../common/CloseButton";
import WalletUserInfo from "../block/WalletModal/WalletUserInfo";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useAccount, useDisconnect } from "wagmi";

interface WalletModalPropsType {
  closeWallet: () => void;
}

const DynamicBalance = dynamic(() => import("../block/WalletModal/Balance"), {
  ssr: false,
});

function WalletModal({ closeWallet }: WalletModalPropsType) {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const router = useRouter();
  const disconnectWallet = () => {
    disconnect();
    closeWallet();
    router.push("/");
  };
  return (
    <Wrap>
      <Back onClick={closeWallet}></Back>
      <Modal>
        <CloseButton handleClick={closeWallet} />
        <WalletUserInfo account={address} />
        <DynamicBalance></DynamicBalance>
        <CustomButton active="false" handleClick={disconnectWallet}>
          Disconnect
        </CustomButton>
      </Modal>
    </Wrap>
  );
}

export default WalletModal;

const Wrap = styled.div`
  height: 100vh;
  position: fixed;
  z-index: 15;
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
