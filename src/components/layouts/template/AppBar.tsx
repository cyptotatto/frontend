import { useRouter } from "next/router";
import React, { useEffect, useCallback, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "../../common/SearchBar";
import WalletModal from "./WalletModal";
import { currencyManagerAtom } from "../../../recoil/modal";
import CurrencyModal from "./CurrencyModal";
import { useAccount, useConnect } from "wagmi";

function AppBar() {
  const router = useRouter();
  const [menu, setMenu] = useState("");
  const [wallet, setWallet] = useState("");
  const isCurrencyModal = useRecoilValue(currencyManagerAtom);

  const { address, isConnected } = useAccount({
    onConnect({ address, connector, isReconnected }) {
      console.log("Connected", { address, connector, isReconnected });
    },
    onDisconnect() {
      console.log("Disconnected");
    },
  });
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  console.log(connectors);

  useEffect(() => {
    setMenu("");
  }, [setMenu, router]);

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
          {isConnected ? (
            <>
              <Mypage onClick={() => router.push("/mypage")}>
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
            </>
          ) : (
            <Login onClick={() => connect({ connector: connectors[0] })}>
              로그인
            </Login>
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

const Login = styled.div`
  width: 104px;
  height: 40px;

  border: 1px solid #ffffff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
