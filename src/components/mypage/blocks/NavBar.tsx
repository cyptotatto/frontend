import React, { useState } from "react";
import styled from "styled-components";

import CustomNavBar from "../../common/CustomNavBar";
import SelectedMenuBox from "../../common/CustomNavBar/blocks/SelectMenuBox";

const myPageMenu = ["소유 NFT", "만든 NFT", "판매한 NFT", "좋아요한 NFT"];

function NavBar() {
  const [selectedMenuIdx, setSelectedMenuIdx] = useState(0);
  return (
    <CustomNavBar>
      <Layout>
        <SelectedMenuBox
          menu={myPageMenu}
          selectedMenuIdx={selectedMenuIdx}
          setSelectedMenuIdx={setSelectedMenuIdx}
        />
      </Layout>
    </CustomNavBar>
  );
}

export default NavBar;

const Layout = styled.div`
  padding: 0 26px;
`;
