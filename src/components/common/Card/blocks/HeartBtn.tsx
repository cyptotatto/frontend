import React from "react";
import styled from "styled-components";
import Image from "next/image";

function HeartBtn() {
  return (
    <StyledBtn>
      <Image
        id="heartIcon"
        src="/assets/heart.svg"
        width="30"
        height="30"
        alt="heartIcon"
      />
    </StyledBtn>
  );
}

export default HeartBtn;

const StyledBtn = styled.button`
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 50px;
  height: 50px;
  padding-top: 3px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;
