import { useRouter } from "next/router";
import React from "react";
import { useSetRecoilState } from "recoil";
import styled, { keyframes } from "styled-components";
import { menuAtom } from "../../recoil/menu";

function Menu() {
  const router = useRouter();
  const setMenu = useSetRecoilState(menuAtom);

  return (
    <Wrap>
      <div onClick={() => router.push("/explore")}>Explore</div>
      <div onClick={() => router.push("/minting")}>Minting</div>
      <div>Login</div>
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
  @media screen and (min-width: 750px) {
    display: none;
  }
`;
