import React from "react";

import CustomNavBar from "../../common/CustomNavBar";
import FilterTabMenuBox from "./Filter/FilterTabMenuBox";
import SelectMenuBox from "../../common/CustomNavBar/blocks/SelectMenuBox";

const exploreMenu = ["도안", "아티스트", "타투 이미지"];

function NavBar() {
  return (
    <CustomNavBar>
      <FilterTabMenuBox />
      <SelectMenuBox menu={exploreMenu} />
    </CustomNavBar>
  );
}

export default NavBar;
