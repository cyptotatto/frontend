import React from "react";
import styled from "styled-components";
import ArtistTemplate from "../src/components/artist/templates/ArtistTemplate";

function ArtistDetail() {
  return (
    <Wrap>
      <ArtistTemplate />
    </Wrap>
  );
}

export default ArtistDetail;

const Wrap = styled.div`
  padding-top: 80px;
`;
