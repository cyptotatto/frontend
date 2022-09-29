import React from "react";
import styled from "styled-components";

import HeartIcon from "../../../../../public/assets/heart.svg";

function HeartBox() {
  return (
    <Box>
      <StyledHeartIcon />
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

const StyledHeartIcon = styled(HeartIcon)`
  fill: white;
  width: 20px;
  height: 20px;
`;
