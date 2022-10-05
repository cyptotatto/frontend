import React from "react";
import styled, { css } from "styled-components";

import EthereumIcon from "../../../../../public/assets/ethereum.svg";
import TriangleIcon from "../../../../../public/assets/triangle.svg";

interface IProps {
  sign: string;
  price: number;
  percentage: number;
}

interface IStyledPercentage {
  sign: string;
}

function PriceBox({ sign, price, percentage }: IProps) {
  return (
    <Wrap>
      <div>
        <label className="title">Price</label>
        <Price>
          <EthereumIcon />
          <span className="num">{price}</span>
        </Price>
        <PercentageBox sign={sign}>
          <span className="percentage">{percentage}%</span>
          <StyledTriangleIcon />
        </PercentageBox>
      </div>
    </Wrap>
  );
}

export default PriceBox;

const Wrap = styled.div`
  display: flex;
  justify-content: end;
  width: 50%;
  margin-top: 5px;

  .title {
    margin-left: 22px;
    color: #bcbcbc;
    font-size: 12px;
    margin-bottom: 5px;
  }
`;

const Price = styled.div`
  .num {
    font-weight: 700;
    font-size: 28px;
    margin-left: 2px;
  }
`;

const StyledTriangleIcon = styled((props) => <TriangleIcon {...props} />)`
  margin: 4px 10px 0 0px;
`;

const PercentageBox = styled.div<IStyledPercentage>`
  display: flex;
  align-items: center;

  .percentage {
    display: inline-block;
    width: 100%;
    text-align: right;
    font-size: 20px;
    margin-right: 8px;
    color: ${(props) => (props.sign === "up" ? "#78e490" : "#E2193A")};
  }

  ${StyledTriangleIcon} {
    ${(props) =>
      props.sign === "up"
        ? css`
            fill: #78e490;
            transform: rotate(180deg);
          `
        : css`
            fill: #e2193a;
          `};
  }
`;
