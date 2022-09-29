import React from "react";
import styled from "styled-components";

function Description() {
  return (
    <Wrap>
      <div className="rank">Rank</div>
      <div className="artist">Artist</div>
      <div className="type">Type</div>
    </Wrap>
  );
}

export default Description;

const Wrap = styled.div`
  margin-top: 20px;
  display: flex;
  color: #7a7a7a;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  .rank {
    margin-left: 38px;
  }
  .artist {
    margin-left: 79px;
  }
  .type {
    margin-left: 359px;
  }
`;
