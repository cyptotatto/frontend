import React, { useState } from "react";
import styled from "styled-components";

interface IProps {
  menu: string[];
}

type MenuPropsType = {
  isActive?: boolean;
};

type UnderLinePropsType = {
  selectedMenuIdx: number;
};

function SelectMenuBox({ menu }: IProps) {
  const [selectedMenuIdx, setSelectedMenuIdx] = useState(0);

  const onChangeMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    const menuName = e.currentTarget.innerText;
    const idx = menu.indexOf(menuName);
    setSelectedMenuIdx(idx);
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
      <UnderLine selectedMenuIdx={selectedMenuIdx} />
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
  padding: 12px 0;
  width: 95px;
  height: 100%;
`;

const UnderLine = styled.div<UnderLinePropsType>`
  position: absolute;
  left: ${(props) => `${95 * props.selectedMenuIdx}px`};
  transition: 0.1s ease-out;
  bottom: -2px;
  height: 3px;
  width: 95px;
  background: linear-gradient(90deg, #d1374e 18.55%, #ac2aa1 96.67%);
`;
