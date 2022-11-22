import React from "react";
import styled from "styled-components";
import MypageTemplate from "../src/components/mypage/template/MypageTemplate";

function Mypage() {
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
