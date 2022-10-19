import React from "react";
import styled from "styled-components";

function BuyBtn() {
  return <StyledBtn>Buy Now</StyledBtn>;
}

export default BuyBtn;

const StyledBtn = styled.button`
  height: 70px;
  width: 220px;

  border-radius: 10px;

  font-weight: 700;
  font-size: 18px;
  line-height: 40px;
  color: #7a7a7a;
  background: #191919;
  margin-top: 24px;
  margin-bottom: 32px;

  &:hover {
    color: white;
    background: linear-gradient(45deg, #d13750, #ae2b9e);
  }
`;
