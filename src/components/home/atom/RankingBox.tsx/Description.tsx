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
  width: 100%;
  margin-top: 20px;
  display: flex;
  color: #7a7a7a;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  .rank {
    width: 20%;
    padding-left: 38px;
  }
  .artist {
    width: 50%;
  }
  .type {
    width: 30%;
  }
`;
