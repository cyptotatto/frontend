import React from "react";
import styled from "styled-components";
import ExploreDetailTemplate from "../src/components/exploredetail/template/ExploreDetailTemplate";

function ExploreDetail() {
  return (
    <Wrap>
      <ExploreDetailTemplate></ExploreDetailTemplate>
    </Wrap>
  );
}

export default ExploreDetail;

const Wrap = styled.div`
  margin-top: 80px;
`;
