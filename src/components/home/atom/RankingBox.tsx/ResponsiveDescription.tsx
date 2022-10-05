import React from "react";
import styled from "styled-components";

function ResponsiveDescription() {
  return (
    <Wrap>
      <div className="rank">Rank</div>
      <div className="artist">Artist</div>
      <div className="type">Type</div>
    </Wrap>
  );
}

export default ResponsiveDescription;

const Wrap = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  color: #7a7a7a;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  .rank {
    width: 15%;
    padding-left: 12px;
  }
  .artist {
    margin-left: 15px;
    width: 64%;
  }
  .type {
    width: 18%;
  }
  @media screen and (max-width: 1120px) {
    display: none;
  }
`;
