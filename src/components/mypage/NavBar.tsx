import React from "react";

import CustomNavBar from "../common/CustomNavBar";
import SelectedMenuBox from "../common/CustomNavBar/blocks/SelectMenuBox";

const myPageMenu = ["소유 NFT", "만든 NFT", "판매한 NFT"];

function NavBar() {
  return (
    <CustomNavBar>
      <SelectedMenuBox menu={myPageMenu} />
    </CustomNavBar>
  );
}

export default NavBar;
