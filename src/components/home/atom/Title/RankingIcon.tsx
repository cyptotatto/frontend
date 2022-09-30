import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface IconType {
  IconType: string;
}

function RankingIcon({ IconType }: IconType) {
  if (IconType === "rank") {
    return (
      <Image
        src="/assets/artist_top100.svg"
        alt="next"
        width="62px"
        height="56px"
      />
    );
  } else if (IconType == "next") {
    return (
      <ImgWrap>
        <Image
          src="/assets/Icon_next.svg"
          alt="next"
          width="13px"
          height="24px"
        />
      </ImgWrap>
    );
  } else return <></>;
}

export default RankingIcon;

const ImgWrap = styled.div`
  margin-left: 9px;
  margin-top: 3px;
`;
