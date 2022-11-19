import React, { useState } from "react";
import styled, { css } from "styled-components";

interface IProps {
  menu: string[];
  selectedMenuIdx: number;
  setSelectedMenuIdx: (idx: number) => void;
}

type MenuPropsType = {
  isActive?: boolean;
};

type UnderLinePropsType = {
  width: number;
  pos: number;
  selectedMenuIdx: number;
};

function SelectMenuBox({ menu, selectedMenuIdx, setSelectedMenuIdx }: IProps) {
  const [lineWidth, setLineWidth] = useState(87);
  const [linePos, setLinePos] = useState(0);

  const onChangeMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    const menuName = e.currentTarget.innerText;
    const idx = menu.indexOf(menuName);
    setSelectedMenuIdx(idx);
    setLineWidth(e.currentTarget.offsetWidth);
    setLinePos(e.currentTarget.offsetLeft);
  };

  return (
    <Box>
      {menu.map((menuName, i) => (
        <TabMenu
          key={i}
          isActive={selectedMenuIdx === i}
          onClick={onChangeMenu}
        >
          {menuName}
        </TabMenu>
      ))}
      <UnderLine
        width={lineWidth}
        pos={linePos}
        selectedMenuIdx={selectedMenuIdx}
      />
    </Box>
  );
}

export default SelectMenuBox;

const Box = styled.div`
  position: relative;
`;

const TabMenu = styled.button<MenuPropsType>`
  background: none;
  color: ${(props) => (props.isActive ? "#C23270" : "white")};
  font-size: 15px;
  font-weight: 600;
  min-width: 87px;
  padding: 12px;
  height: 100%;
`;

const UnderLine = styled.div<UnderLinePropsType>`
  position: absolute;
  left: ${(props) => `${props.pos}px`};
  transition: 0.1s ease-out;
  bottom: -2px;
  height: 3px;
  width: ${(props) => `${props.width}px`};
  background: linear-gradient(90deg, #d1374e 18.55%, #ac2aa1 96.67%);
`;
