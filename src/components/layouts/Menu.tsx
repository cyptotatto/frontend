import { useRouter } from "next/router";
import React, { useCallback, useState, useEffect } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import styled from "styled-components";
import { menuAtom } from "../../recoil/modal";
import { accountAtom } from "../../recoil/user";

function Menu() {
  const setMenu = useSetRecoilState(menuAtom);
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
      <div onClick={() => router.push("/explore")}>Explore</div>
      <div onClick={() => router.push("/minting")}>Minting</div>
      {render && (
        <>
          {account ? (
            <div onClick={() => router.push("/mypage")}>mypage</div>
          ) : (
            <div onClick={getAccount}>Login</div>
          )}
        </>
      )}
      <div onClick={() => setMenu("")}>닫기</div>
    </Wrap>
  );
}

export default Menu;

const Wrap = styled.div`
  opacity: 1;
  margin-top: 60px;
  height: calc(100vh - 60px);
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: white;
  color: black;
  text-align: center;
  @media screen and (min-width: 950px) {
    display: none;
  }
`;
