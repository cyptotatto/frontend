import React from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { isFilterTabOpenAtom } from "../../../../recoil/menu";

import FilterMenuBox from "./FilterMenuBox";

const tagInfo = {
  genere: [
    "전체",
    "이레즈미",
    "블랙워크",
    "올드스쿨",
    "뉴스쿨",
    "일러스트",
    "트라이벌",
    "미니타투",
    "레터링",
    "수채화",
    "블랙앤그레이",
    "라인워크",
    "치카노",
    "커버업",
    "리얼리스틱",
  ],
};

function FilterTab() {
  const isMenuOpen = useRecoilValue(isFilterTabOpenAtom);

  return (
    <>
      {isMenuOpen && (
        <Tab>
          <MenuContainer>
            <FilterMenuBox title="장르별" tags={tagInfo.genere} />
            <FilterMenuBox title="주제별" />
            <FilterMenuBox title="부위별" />
          </MenuContainer>
        </Tab>
      )}
    </>
  );
}

export default FilterTab;

const Tab = styled.aside`
  width: 328px;
  padding: 0 30px 0 12px;
  flex-shrink: 0;
`;

const MenuContainer = styled.ul``;
