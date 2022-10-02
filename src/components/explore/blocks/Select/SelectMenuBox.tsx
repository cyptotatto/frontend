import React, { useState } from "react";
import styled from "styled-components";

import TabMenu from "../../atoms/NavBar/TabMenu";

type UnderLinePropsType = {
  selectedMenu: string;
};

function SelectMenuBox() {
  const [selectedMenu, setSelectedMenu] = useState("도안");

  const onChangeMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedMenu(e.currentTarget.innerText);
  };

  return (
    <Box>
      <TabMenu isActive={selectedMenu === "도안"} onClickHandler={onChangeMenu}>
        도안
      </TabMenu>
      <TabMenu
        isActive={selectedMenu === "아티스트"}
        onClickHandler={onChangeMenu}
      >
        아티스트
      </TabMenu>
      <UnderLine selectedMenu={selectedMenu} />
    </Box>
  );
}

export default SelectMenuBox;

const Box = styled.div`
  position: relative;
`;

const UnderLine = styled.div<UnderLinePropsType>`
  position: absolute;
  left: ${(props) => {
    if (props.selectedMenu === "도안") return "0px";
    else return "80px";
  }};
  transition: 0.1s ease-out;
  bottom: -2px;
  height: 3px;
  width: 80px;
  background: linear-gradient(90deg, #d1374e 18.55%, #ac2aa1 96.67%);
`;
