import { useRouter } from "next/router";
import React, { useEffect, useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { accountAtom } from "../../recoil/user";
import styled from "styled-components";
import Menu from "./Menu";
import { menuAtom } from "../../recoil/menu";

function AppBar() {
  const router = useRouter();
  const [account, setAccount] = useRecoilState(accountAtom);
  const [render, setRender] = useState("");
  const [menu, setMenu] = useRecoilState(menuAtom);

  useEffect(() => {
    setRender("render");
  }, []);

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
      <Logo onClick={() => router.push("/")}>Logo</Logo>
      <Search>
        <input></input>
        <div>search</div>
      </Search>
      <Responsive>
        <div className="when-wide">
          <Create onClick={() => router.push("/minting")}>create</Create>
          <Explore onClick={() => router.push("/explore")}>explore</Explore>
          {render && (
            <>
              {account ? (
                <Mypage onClick={() => router.push("/mypage")}>mypage</Mypage>
              ) : (
                <Login onClick={getAccount}>login</Login>
              )}
            </>
          )}
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
  justify-content: space-around;
  height: 80px;
  line-height: 80px;
`;

const Logo = styled.div``;

const Search = styled.div`
  display: flex;
  background-color: gray;
`;

const Explore = styled.div`
  margin-left: 20px;
`;

const Create = styled.div`
  margin-left: 20px;
`;

const Mypage = styled.div`
  margin-left: 20px;
`;

const Login = styled.div`
  margin-left: 20px;
`;

const TapButton = styled.div``;

const Responsive = styled.div`
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
