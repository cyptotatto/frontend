import React from "react";
import styled from "styled-components";

function Title() {
  return (
    <Wrap>
      <div className="title">
        Buy And Sell
        <br />
        Tattoo<span className="gradient">NFTs</span>
      </div>
    </Wrap>
  );
}

export default Title;

const Wrap = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 76.8px;
  .gradient {
    margin-left: 14px;
    font-size: 100px;
    line-height: 120px;

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
