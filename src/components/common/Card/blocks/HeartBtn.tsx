import React, { useState } from "react";
import styled, { css } from "styled-components";

import HeartIcon from "../../../../../public/assets/heart.svg";

function HeartBtn() {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledBtn onClick={() => setIsActive((prev) => !prev)}>
      <StyledHeartIcon isActive={isActive} />
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

const StyledHeartIcon = styled(HeartIcon)`
  fill: ${(props) => (props.isActive ? "red" : "white")};
  width: 30px;
`;
