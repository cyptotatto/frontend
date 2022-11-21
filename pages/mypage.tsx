import React from "react";
import styled from "styled-components";
import MypageTemplate from "../src/components/mypage/template/MypageTemplate";

function Mypage() {
  // const router = useRouter();
  // const setAccount = useSetRecoilState(accountAtom);

  // const handleLogout = () => {
  //   setAccount("");
  //   router.push("/");
  // };

  return (
    <Wrap>
      <MypageTemplate />
    </Wrap>
  );
}

export default Mypage;

const Wrap = styled.div`
  padding-top: 80px;
`;
