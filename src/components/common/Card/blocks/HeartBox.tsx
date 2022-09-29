import React from "react";
import styled from "styled-components";

import Image from "next/image";

function HeartBox() {
  return (
    <Box>
      <Image
        id="heartIcon"
        src="/assets/heart.svg"
        width="20"
        height="20"
        alt="heartIcon"
      />
      <Cnt>96</Cnt>
    </Box>
  );
}

export default HeartBox;

const Box = styled.div`
  display: flex;
  align-items: center;
  padding-top: 18px;
`;

const Cnt = styled.span`
  font-weight: 500;
  font-size: 16px;
  padding-bottom: 1px;
  margin-left: 5px;
`;
