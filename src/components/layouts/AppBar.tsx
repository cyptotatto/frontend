import { useRouter } from "next/router";
import React, { useEffect, useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { accountAtom } from "../../recoil/user";
import styled from "styled-components";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "../common/SearchBar";
import WalletModal from "./WalletModal";

function AppBar() {
  const router = useRouter();
  const [account, setAccount] = useRecoilState(accountAtom);
  const [menu, setMenu] = useState("");
  const [wallet, setWallet] = useState("");

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
        router.reload();
      } else {
        alert("install metamask");
      }
    } catch (error) {
      console.log(error);
    }
  }, [setAccount, router]);

  const openWallet = () => {
    setWallet("ok");
    console.log(wallet);
    setMenu("");
  };

  const closeWallet = () => {
    setWallet("");
  };

  const closeMenu = () => {
    setMenu("");
  };

  return (
    <Wrap>
      <>{wallet && <WalletModal closeWallet={closeWallet} />}</>
      <>{menu && <Menu closeMenu={closeMenu} />}</>
      <Logo onClick={() => router.push("/")}>
        <Image src="/assets/logo.svg" alt="logo" width="128px" height="60px" />
      </Logo>
      <SearchBar />
      <Responsive>
        <div className="when-wide">
          <Create onClick={() => router.push("/create")}>create</Create>
          <Explore onClick={() => router.push("/explore")}>explore</Explore>
          <Mypage onClick={account ? () => router.push("/mypage") : getAccount}>
            <Image
              src="/assets/profile.svg"
              alt="logo"
              width="30px"
              height="30px"
            />
          </Mypage>
          <Wallet onClick={openWallet}>
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
`;

const Create = styled.div`
  width: 70px;
`;

const Explore = styled.div`
  width: 70px;
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
