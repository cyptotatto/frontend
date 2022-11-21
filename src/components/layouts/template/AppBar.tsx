import { useRouter } from "next/router";
import React, { useEffect, useCallback, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { accountAtom } from "../../../recoil/user";
import styled from "styled-components";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "../../common/SearchBar";
import WalletModal from "./WalletModal";
import { currencyManagerAtom } from "../../../recoil/modal";
import CurrencyModal from "./CurrencyModal";

function AppBar() {
  const router = useRouter();
  const [account, setAccount] = useRecoilState(accountAtom);
  const [menu, setMenu] = useState("");
  const [wallet, setWallet] = useState("");
  const isCurrencyModal = useRecoilValue(currencyManagerAtom);

  useEffect(() => {
    setMenu("");
  }, [setMenu, router]);

  const getAccount = useCallback(async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } else {
        alert("install metamask");
      }
    } catch (error) {
      console.log(error);
    }
  }, [setAccount]);

  useEffect(() => {
    getAccount();
  }, [getAccount]);

  const openWallet = () => {
    setWallet("ok");
    setMenu("");
  };

  return (
    <Wrap>
      <>{isCurrencyModal && <CurrencyModal />}</>
      <>{wallet && <WalletModal closeWallet={() => setWallet("")} />}</>
      <>{menu && <Menu closeMenu={() => setMenu("")} />}</>
      <Logo onClick={() => router.push("/")}>
        <Image src="/assets/logo.svg" alt="logo" width="128px" height="60px" />
      </Logo>
      <SearchBar />
      <Responsive>
        <div className="when-wide">
          <Create onClick={() => router.push("/create")}>Create</Create>
          <Explore onClick={() => router.push("/explore")}>Explore</Explore>
          <Mypage onClick={account ? () => router.push("/mypage") : getAccount}>
            <Image
              src="/assets/profile.svg"
              alt="logo"
              width="30px"
              height="30px"
            />
          </Mypage>
          <Wallet onClick={account ? openWallet : getAccount}>
            <Image
              src="/assets/wallet.svg"
              alt="logo"
              width="30px"
              height="30px"
            />
          </Wallet>
        </div>
        <div className="when-narrow">
          <TapButton onClick={() => setMenu("show")}>menu</TapButton>
        </div>
      </Responsive>
    </Wrap>
  );
}

export default AppBar;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  line-height: 80px;
`;

const Logo = styled.div`
  display: flex;
  margin: 0 15px;
  cursor: pointer;
`;

const Create = styled.div`
  width: 70px;
  cursor: pointer;
  font-family: "Acumin Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
`;

const Explore = styled.div`
  width: 70px;
  cursor: pointer;
  font-family: "Acumin Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
`;

const Mypage = styled.div`
  display: flex;
  width: 50px;
  text-align: center;
`;

const Wallet = styled.div`
  display: flex;
  width: 50px;
  text-align: center;
`;

const TapButton = styled.div``;

const Responsive = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin: 0 15px;
  .when-wide {
    display: flex;
  }
  .when-narrow {
    display: none;
  }
  @media screen and (max-width: 750px) {
    .when-wide {
      display: none;
    }
    .when-narrow {
      display: block;
    }
  }
`;
