import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import styled, { css } from "styled-components";
interface IProps {
  price: number;
  setPrice: Dispatch<SetStateAction<number>>;
}
function UploadPrice({ price, setPrice }: IProps) {
  useEffect(() => {
    console.log(price);
  }, [price]);

  const onChangeInput = (e: any) => {
    setPrice(e.target.value);
  };
  return (
    <div>
      <StyledTitle>가격설정</StyledTitle>
      <StyledInput
        placeholder="0.00"
        value={price}
        onChange={onChangeInput}
      ></StyledInput>
      <StyledSpan>ETH</StyledSpan>
    </div>
  );
}

const StyledTitle = styled.h1`
  font-size: 18px;
`;

const StyledInput = styled.input`
  width: 180px;
  height: 48px;
  color: white;
  background: #191919;
  border-radius: 10px;
  border: 2px solid #191919;
  outline: none;
`;
const StyledSpan = styled.span`
  font-family: "Acumin Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  margin-left: 11px;
`;

export default UploadPrice;
