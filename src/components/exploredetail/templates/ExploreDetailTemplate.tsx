import React from "react";
import styled from "styled-components";
import TattooInfo from "../blocks/TattooInfo";

function ExploreDetailTemplate() {
  return (
    <Wrap>
      <TattooInfo></TattooInfo>
    </Wrap>
  );
}

export default ExploreDetailTemplate;

const Wrap = styled.div`
  padding: 24px;
`;

const TopContent = styled.div``;

const MainContent = styled.div``;
