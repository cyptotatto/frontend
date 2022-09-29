import Image from "next/image";
import React from "react";
import styled from "styled-components";

function Title() {
  return (
    <Wrap>
      <Image
        src="/assets/artist_top100.svg"
        alt="next"
        width="62px"
        height="56px"
      />
      <div className="artist-text">아티스트 </div>
      <div className="top100-text">&nbsp;Top 100 🔥</div>
      <Image
        src="/assets/Icon_next.svg"
        alt="next"
        width="13px"
        height="24px"
      />
    </Wrap>
  );
}

export default Title;

const Wrap = styled.div`
  font-size: 34px;

  margin-bottom: 20px;

  .logo {
    margin-left: 61px;
  }
  .artist-text {
    font-weight: 700;
    margin-top: 2px;
  }
  .top100-text {
    font-weight: 600;
    margin-top: -1px;
  }
  display: flex;
`;
