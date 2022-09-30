import React from "react";
import styled from "styled-components";

function TitleText() {
  return (
    <Wrap>
      <div className="artist-text">아티스트 </div>
      <div className="top100-text">&nbsp;Top 100 🔥</div>
    </Wrap>
  );
}

export default TitleText;

const Wrap = styled.div`
  display: flex;
  .artist-text {
    font-weight: 700;
    margin-top: 2px;
  }
  .top100-text {
    font-weight: 600;
    margin-top: -1px;
  }
`;
