import { useRouter } from "next/router";
import React, { useEffect, useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { accountAtom } from "../../recoil/user";
import styled from "styled-components";
import Menu from "./Menu";
import { menuAtom } from "../../recoil/menu";
import Image from "next/image";
import SearchBar from "../common/SearchBar";

function AppBar() {
  const router = useRouter();
  const [account, setAccount] = useRecoilState(accountAtom);
  const [menu, setMenu] = useRecoilState(menuAtom);

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

  return (
    <Wrap>
      {menu && <Menu />}
      <Logo onClick={() => router.push("/")}>
        <Image src="/assets/logo.svg" alt="logo" width="128px" height="60px" />
      </Logo>
      <SearchBar />
      <Responsive>
        <div className="when-wide">
          <Create onClick={() => router.push("/minting")}>create</Create>
          <Explore onClick={() => router.push("/explore")}>explore</Explore>
          <Mypage onClick={account ? () => router.push("/mypage") : getAccount}>
            <Image
              src="/assets/profile.svg"
              alt="logo"
              width="30px"
              height="30px"
            />
          </Mypage>
          <Wallet>
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
  padding-left: 8%;
  padding-right: 6%;
`;

const Logo = styled.div`
  margin-top: 11px;
`;

const Create = styled.div`
  margin-right: 30px;
`;

const Explore = styled.div`
  margin-right: 40px;
`;

const Mypage = styled.div`
  margin-right: 40px;
  line-height: 30px;
  margin-top: 25px;
`;

const Wallet = styled.div`
  line-height: 30px;
  margin-top: 25px;
`;

const TapButton = styled.div``;

const Responsive = styled.div`
  font-size: 15px;
  font-weight: 500;
  .when-wide {
    display: flex;
  }
  .when-narrow {
    display: none;
  }
  @media screen and (max-width: 980px) {
    .when-wide {
      display: none;
    }
    .when-narrow {
      display: block;
    }
  }
`;
