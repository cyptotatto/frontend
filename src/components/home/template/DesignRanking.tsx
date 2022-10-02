import React from "react";
import styled from "styled-components";
import HomeTitle from "../../common/HomeTitle";
import DesignBox from "../block/DesignRanking/DesignBox";

function DesignRanking() {
  return (
    <Wrap>
      <HomeTitle>도안 Top100 🔥</HomeTitle>
      <DesignBox />
    </Wrap>
  );
}

export default DesignRanking;

const Wrap = styled.div`
  margin: 120px 10% 0px 10%;
  padding-bottom: 20px;
`;
