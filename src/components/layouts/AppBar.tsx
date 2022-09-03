import { useRouter } from "next/router";
import React, { useEffect, useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { accountAtom } from "../../recoil/user";
import styled from "styled-components";

function AppBar() {
  const router = useRouter();
  const [account, setAccount] = useRecoilState(accountAtom);
  const [render, setRender] = useState("");

  useEffect(() => {
    setRender("render");
  }, []);

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
      <Logo onClick={() => router.push("/")}>로고</Logo>
      <Search>검색창</Search>
      <Explore onClick={() => router.push("/explore")}>탐색</Explore>
      <Create onClick={() => router.push("/minting")}>민팅</Create>
      {render && (
        <>
          {account ? (
            <Mypage onClick={() => router.push("/mypage")}>마이페이지</Mypage>
          ) : (
            <Login onClick={getAccount}>로그인</Login>
          )}
        </>
      )}
    </Wrap>
  );
}

export default AppBar;

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Logo = styled.div``;

const Search = styled.div``;

const Explore = styled.div``;

const Create = styled.div``;

const Mypage = styled.div``;

const Login = styled.div``;
