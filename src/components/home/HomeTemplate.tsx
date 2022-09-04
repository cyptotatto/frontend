import React from "react";
import styled from "styled-components";
import Ranking from "./block/Ranking";

function HomeTemplate() {
  return (
    <Wrap>
      <MainImg>
        <div className="_text">글글글</div>
        <div className="_image">이미지이미지</div>
      </MainImg>
      <Ranking />
    </Wrap>
  );
}

export default HomeTemplate;

const Wrap = styled.div``;

const MainImg = styled.div`
  background-color: gray;
  display: flex;
  justify-content: space-around;
  ._text {
    height: 150px;
    text-align: center;
    line-height: 300px;
  }
  ._image {
    height: 300px;
    text-align: center;
    line-height: 300px;
  }
  @media screen and (max-width: 750px) {
    display: block;
    ._text {
      line-height: 150px;
    }
  }
`;
