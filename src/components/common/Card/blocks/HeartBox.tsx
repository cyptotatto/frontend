import React from "react";
import styled from "styled-components";

import { makeFormattedNumber } from "../../../../utils/transform";

import OutlineHeartIcon from "../../../../../public/assets/outline_heart.svg";

interface IProps {
  cnt: number;
}

function HeartBox({ cnt }: IProps) {
  return (
    <Box>
      <OutlineHeartIcon width="20" />
      <Cnt>{makeFormattedNumber(cnt)}</Cnt>
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
