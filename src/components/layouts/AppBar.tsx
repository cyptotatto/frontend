import { useRouter } from "next/router";
import React, { useEffect, useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { accountAtom } from "../../recoil/user";
import styled from "styled-components";

function AppBar() {
  const router = useRouter();
  const [account, setAccount] = useRecoilState(accountAtom);
  const [render, setRender] = useState("");

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

  useEffect(() => {
    setRender("render");
  }, []);

  return (
    <Wrap>
      <Logo>로고</Logo>
      <Search>검색창</Search>
      <Explore>탐색</Explore>
      <Create>민팅</Create>
      {render && (
        <Login onClick={getAccount}>{account ? "마이페이지" : "로그인"}</Login>
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

const Login = styled.div``;
