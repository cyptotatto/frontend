import React from "react";
import styled from "styled-components";

import CustomNavBar from "../../common/CustomNavBar";
import SelectedMenuBox from "../../common/CustomNavBar/blocks/SelectMenuBox";

const myPageMenu = ["Items", "Activity"];

function NavBar() {
  return (
    <CustomNavBar>
      <Layout>
        <SelectedMenuBox menu={myPageMenu} />
      </Layout>
    </CustomNavBar>
  );
}

export default NavBar;

const Layout = styled.div`
  padding: 0 26px;
`;
