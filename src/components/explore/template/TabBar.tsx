import React from "react";
import styled from "styled-components";

import ComboBox from "../../common/ComboBox";

function TabBar() {
  return (
    <Bar>
      <ComboBox />
    </Bar>
  );
}

export default TabBar;

const Bar = styled.div`
  position: relative;
  height: 50px;
`;
