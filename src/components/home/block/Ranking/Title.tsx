import Image from "next/image";
import React from "react";
import styled from "styled-components";
import RankingIcon from "../../atom/Title/RankingIcon";
import TitleText from "../../atom/Title/TitleText";

function Title() {
  return (
    <Wrap>
      <RankingIcon IconType="rank" />
      <TitleText />
      <RankingIcon IconType="next" />
    </Wrap>
  );
}

export default Title;

const Wrap = styled.div`
  font-size: 34px;
  display: flex;
  margin-bottom: 20px;
`;
