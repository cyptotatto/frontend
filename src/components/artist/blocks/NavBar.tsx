import React from "react";
import styled from "styled-components";

import CustomNavBar from "../../common/CustomNavBar";
import SelectedMenuBox from "../../common/CustomNavBar/blocks/SelectMenuBox";

const artistMenu = [
  "소유 NFT",
  "만든 NFT",
  "판매한 NFT",
  "좋아요한 NFT",
  "좋아요한 아티스트",
];

function NavBar() {
  return (
    <CustomNavBar>
      <Layout>
        <SelectedMenuBox menu={artistMenu} />
      </Layout>
    </CustomNavBar>
  );
}

export default NavBar;

const Layout = styled.div`
  padding: 0 26px;
`;
