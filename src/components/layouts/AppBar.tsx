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
      <Search>
        <input></input>
        <div>검색</div>
      </Search>
      <Responsive>
        <div className="when-wide">
          <Explore onClick={() => router.push("/explore")}>탐색</Explore>
          <Create onClick={() => router.push("/minting")}>민팅</Create>
          {render && (
            <>
              {account ? (
                <Mypage onClick={() => router.push("/mypage")}>
                  마이페이지
                </Mypage>
              ) : (
                <Login onClick={getAccount}>로그인</Login>
              )}
            </>
          )}
        </div>
        <div className="when-narrow">
          <TapButton>메뉴</TapButton>
        </div>
      </Responsive>
    </Wrap>
  );
}

export default AppBar;

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
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
