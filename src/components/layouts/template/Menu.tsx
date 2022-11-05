import { useRouter } from "next/router";
import React, { useCallback, useState, useEffect } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import styled from "styled-components";
import { accountAtom } from "../../../recoil/user";
import CloseButton from "../../common/CloseButton";

interface MenuModalPropsType {
  closeMenu: () => void;
}

function Menu({ closeMenu }: MenuModalPropsType) {
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
      <CloseButton handleClick={closeMenu} />
      <div className="router" onClick={() => router.push("/explore")}>
        explore
      </div>
      <div className="router" onClick={() => router.push("/create")}>
        create
      </div>
      <div
        className="router"
        onClick={account ? () => router.push("/mypage") : getAccount}
      >
        mypage
      </div>
    </Wrap>
  );
}

export default Menu;

const Wrap = styled.div`
  opacity: 1;
  position: fixed;
  z-index: 10;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: black;
  color: white;
  text-align: center;
  line-height: normal;
  .router {
    line-height: 80px;
  }
  @media screen and (min-width: 950px) {
    display: none;
  }
`;
