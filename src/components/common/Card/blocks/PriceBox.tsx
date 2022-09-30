import React from "react";
import styled, { css } from "styled-components";

import EthereumIcon from "../../../../../public/assets/ethereum.svg";
import TriangleIcon from "../../../../../public/assets/triangle.svg";
import Label from "../atoms/Label";

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
      <Container>
        <LabelWrap>
          <Label>Price</Label>
        </LabelWrap>
        <Price>
          <EthereumIcon />
          <Num>{price}</Num>
        </Price>
        <PercentageBox sign={sign}>
          <Percentage>{percentage}%</Percentage>
          <StyledTriangleIcon />
        </PercentageBox>
      </Container>
    </Wrap>
  );
}

export default PriceBox;

const Wrap = styled.div`
  display: flex;
  justify-content: end;
  width: 50%;
  margin-top: 5px;
`;

const Container = styled.div``;

const LabelWrap = styled.div`
  margin-left: 22px;
`;

const Price = styled.div``;

const Num = styled.span`
  font-weight: 700;
  font-size: 28px;
  margin-left: 2px;
`;

const Percentage = styled.span`
  display: inline-block;
  width: 100%;
  text-align: right;
  font-size: 20px;
`;

const StyledTriangleIcon = styled(TriangleIcon)`
  margin: 3px 0 0 8px;
`;

const PercentageBox = styled.div<IStyledPercentage>`
  display: flex;
  align-items: center;

  ${Percentage} {
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
