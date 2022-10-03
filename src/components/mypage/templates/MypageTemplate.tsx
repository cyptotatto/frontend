import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { accountAtom } from "../../../recoil/user";
import NavBar from "../NavBar";

function MypageTemplate() {
  const router = useRouter();
  const setAccount = useSetRecoilState(accountAtom);

  const handleLogout = () => {
    setAccount("");
    router.push("/");
  };

  return (
    <Wrap>
      <Logout onClick={handleLogout}>로그아웃</Logout>
      <NavBar />
    </Wrap>
  );
}

export default MypageTemplate;

const Wrap = styled.div`
  padding: 24px;
`;

const Account = styled.div``;

const Logout = styled.div``;
