import React, { useState } from "react";
import styled from "styled-components";

import OutlineHeartIcon from "../../../../public/assets/outline_heart.svg";
import FillHeartIcon from "../../../../public/assets/fill_heart.svg";

interface IProps {
  isHeart: boolean;
}

function HeartBtn({ isHeart }: IProps) {
  const [isActive, setIsActive] = useState(isHeart);

  return (
    <StyledBtn onClick={() => setIsActive((prev) => !prev)}>
      {isActive ? (
        <FillHeartIcon width="24" />
      ) : (
        <OutlineHeartIcon width="24" />
      )}
    </StyledBtn>
  );
}

export default HeartBtn;

const StyledBtn = styled.button`
  width: 40px;
  height: 40px;
  padding-top: 7px;
  background: #191919;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
