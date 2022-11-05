import React, { ReactNode } from "react";
import styled from "styled-components";

interface CurrencyButton {
  children: React.ReactNode;
  handleClick: () => void;
}

function CurrencyButton({ children, handleClick }: CurrencyButton) {
  return <Wrap onClick={handleClick}>{children}</Wrap>;
}

export default CurrencyButton;

const Wrap = styled.button`
  width: 336px;
  height: 56px;
  box-sizing: border-box;
  border: 1px solid #7a7a7a;
  border-radius: 20px;
  background-color: black;
  font-weight: 600;
  font-size: 16px;
  line-height: 19.2px;
  margin: 12px;
  &:hover {
    color: white;
    background: #7a7a7a;
  }
`;
