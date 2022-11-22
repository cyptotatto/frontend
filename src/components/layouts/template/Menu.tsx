import { useRouter } from "next/router";
import React, { useCallback, useState, useEffect } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import styled from "styled-components";
import { useAccount, useConnect } from "wagmi";
import CloseButton from "../../common/CloseButton";

interface MenuModalPropsType {
  closeMenu: () => void;
}

function Menu({ closeMenu }: MenuModalPropsType) {
  const router = useRouter();
  const { address } = useAccount();
  const [render, setRender] = useState("");
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  useEffect(() => {
    setRender("render");
  }, []);

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
        onClick={
          address
            ? () => router.push("/mypage")
            : () => connect({ connector: connectors[0] })
        }
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
