import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface IconType {
  IconType: string;
}

function RankingIcon({ IconType }: IconType) {
  if (IconType === "rank") {
    return (
      <IconWrap>
        <Image
          src="/assets/top100_icon.svg"
          alt="next"
          width="58px"
          height="50px"
        />
      </IconWrap>
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

const IconWrap = styled.div`
  margin-right: 10px;
`;

const ImgWrap = styled.div`
  margin-left: 9px;
  margin-top: 15px;
`;
