import React from "react";
import styled from "styled-components";
import RankingIcon from "../home/atom/Title/RankingIcon";

interface HomeTitlePropsType {
  children: React.ReactNode;
}

function HomeTitle({ children }: HomeTitlePropsType) {
  return (
    <Wrap>
      <RankingIcon IconType="rank" />
      <TitleText>{children}</TitleText>
      <RankingIcon IconType="next" />
    </Wrap>
  );
}

export default HomeTitle;

const Wrap = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const TitleText = styled.div`
  font-weight: 700;
  font-size: 34px;
  line-height: 56px;
  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
`;
