import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { accountAtom } from "../../recoil/user";

function MypageTemplate() {
  const router = useRouter();
  const setAccount = useSetRecoilState(accountAtom);

  const handleLogout = () => {
    setAccount("");
    router.push("/");
  };

  return (
    <>
      <Logout onClick={handleLogout}>로그아웃</Logout>
    </>
  );
}

export default MypageTemplate;

const Account = styled.div``;

const Logout = styled.div``;
