import React, { useState } from "react";
import styled from "styled-components";

import TabMenu from "../atoms/TabMenu";

interface IProps {
  menu: string[];
}

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
          onClickHandler={onChangeMenu}
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

const UnderLine = styled.div<UnderLinePropsType>`
  position: absolute;
  left: ${(props) => `${95 * props.selectedMenuIdx}px`};
  transition: 0.1s ease-out;
  bottom: -2px;
  height: 3px;
  width: 95px;
  background: linear-gradient(90deg, #d1374e 18.55%, #ac2aa1 96.67%);
`;
