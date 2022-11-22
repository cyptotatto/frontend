import { useState } from "react";
import styled from "styled-components";

import CustomNavBar from "../../common/CustomNavBar";
import SelectedMenuBox from "../../common/CustomNavBar/blocks/SelectMenuBox";

const myPageMenu = ["Items", "Activity"];

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
