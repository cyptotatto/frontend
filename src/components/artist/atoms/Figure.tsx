import React from "react";
import styled from "styled-components";

import { makeFormattedNumber } from "../../../utils/transform";
import EthereumIcon from "../../../../public/assets/ethereum.svg";

interface IProps {
  title: string;
  num: number | string;
  isEthereum: boolean;
}

function Figure({ title, num, isEthereum }: IProps) {
  return (
    <Box>
      <span className="title">{title}</span>
      <div className="numBox">
        {isEthereum && <EthereumIcon />}
        <span>
          {num && num !== "0"
            ? typeof num === "number"
              ? makeFormattedNumber(num)
              : num
            : "-"}
        </span>
      </div>
    </Box>
  );
}

export default Figure;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  .title {
    color: #7a7a7a;
    font-size: 18px;
    font-weight: 500;
  }

  .numBox {
    font-size: 24px;
    font-weight: 700;
  }
`;
