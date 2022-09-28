import React from "react";
import styled from "styled-components";

function Text() {
  return (
    <Wrap>
      Cryptattoo는 타투이스트들의 도안을 메타버스에 블록체인 기술을 통하여
      <br />
      디지털 아트로의 확장을 돕습니다. <br />
      지금 바로 <span className="gradient">Cryptattoo</span>에서 NFT 기술로
      자신의 예술을 알리세요.
    </Wrap>
  );
}

export default Text;

const Wrap = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  margin-top: 25px;
  margin-bottom: 38px;
  color: #c5c5c5;
  .gradient {
    background: linear-gradient(
      180deg,
      #da3a3a 0%,
      #da3a3a 0.01%,
      #9723ce 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;
