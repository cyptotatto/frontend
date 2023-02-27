import React from "react";
import styled from "styled-components";

function Text() {
  return (
    <Wrap>
      Cryptattoo helps tattoo artists expand their designs into digital art
      <br />
      through blockchain technology in the metaverse. <br />
      Showcase your art using NFT technology on
      <span className="gradient"> Cryptattoo</span> now.
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
