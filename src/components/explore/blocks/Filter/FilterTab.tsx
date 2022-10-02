import React from "react";
import styled from "styled-components";

import ArrowDownIcon from "../../../../../public/assets/arrow_down.svg";

function FilterTab() {
  return (
    <Tab>
      <div>
        <div>
          <span>장르별</span>
          <MenuArrowIcon />
        </div>
        <div>
          <div>전체</div>
          <div>이레즈미</div>
        </div>
      </div>
      <div>
        <div>
          <span>장르별</span>
          <MenuArrowIcon />
        </div>
        <div>
          <div>전체</div>
          <div>이레즈미</div>
        </div>
      </div>
      <div>
        <div>
          <span>장르별</span>
          <MenuArrowIcon />
        </div>
        <div>
          <div>전체</div>
          <div>이레즈미</div>
        </div>
      </div>
    </Tab>
  );
}

export default FilterTab;

const Tab = styled.div`
  width: 328px;
`;

const MenuArrowIcon = styled(ArrowDownIcon)``;
