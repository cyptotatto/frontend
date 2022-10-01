import React, { useState } from "react";
import styled, { css } from "styled-components";

import TabMenu from "../atoms/NavBar/TabMenu";
import FilterIcon from "../../../../public/assets/filter.svg";

type UnderLinePropsType = {
  selectedMenu: string;
};

function NavBar() {
  const [selectedMenu, setSelectedMenu] = useState("도안");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const onToggleFilter = () => setIsFilterOpen((prev) => !prev);
  const onChangeMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedMenu(e.currentTarget.innerText);
  };

  return (
    <StyledNav>
      <StyledFilterIcon
        onClickHandler={onToggleFilter}
        style={{ verticalAlign: "middle" }}
      />
      <SelectMenuBox>
        <TabMenu
          isActive={selectedMenu === "도안"}
          onClickHandler={onChangeMenu}
        >
          도안
        </TabMenu>
        <TabMenu
          isActive={selectedMenu === "아티스트"}
          onClickHandler={onChangeMenu}
        >
          아티스트
        </TabMenu>
        <UnderLine selectedMenu={selectedMenu} />
      </SelectMenuBox>
    </StyledNav>
  );
}

export default NavBar;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #7a7a7a;
`;

const StyledFilterIcon = styled(FilterIcon)`
  margin: 12px 16px;
  cursor: pointer;
`;

const SelectMenuBox = styled.div`
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
