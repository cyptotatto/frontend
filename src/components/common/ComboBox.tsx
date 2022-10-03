import React, { useState } from "react";
import styled, { css } from "styled-components";

import ArrowDownIcon from "../../../public/assets/arrow_down.svg";

function ComboBox() {
  const [selectedMenu, setSelectedMenu] = useState("정렬");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Box onClick={() => setIsMenuOpen((prev) => !prev)}>
      <Select>
        <Text>{isMenuOpen ? "정렬" : selectedMenu}</Text>
        <ArrowIcon isopen={isMenuOpen.toString()} />
      </Select>
      {isMenuOpen && (
        <OptBox>
          <Opt onClick={() => setSelectedMenu("인기순")}>인기순</Opt>
          <Opt onClick={() => setSelectedMenu("최신순")}>최신순</Opt>
          <Opt onClick={() => setSelectedMenu("가격 낮은 순")}>
            가격 낮은 순
          </Opt>
          <Opt onClick={() => setSelectedMenu("가격 높은 순")}>
            가격 높은 순
          </Opt>
        </OptBox>
      )}
    </Box>
  );
}

export default ComboBox;

const Box = styled.div`
  position: absolute;
  right: 0;
  top: 8px;
  width: 120px;
  border: none;
  outline: none;
  background: #191919;
  border-radius: 10px;
  color: white;
  font-size: 12px;
  z-index: 5;
  cursor: pointer;
`;

const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 8px;
`;

const ArrowIcon = styled((props) => <ArrowDownIcon {...props} />)`
  ${(props) =>
    props.isopen &&
    css`
      transform: rotate(-180deg);
    `}
`;

const Text = styled.span``;

const OptBox = styled.div``;

const Opt = styled.div`
  padding: 10px 8px;

  &:hover {
    background: #2b2b2b;
  }

  &:last-child {
    border-radius: 0 0 10px 10px;
  }
`;
