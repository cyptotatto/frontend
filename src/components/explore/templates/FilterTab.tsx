import React from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { isFilterTabOpenAtom } from "../../../recoil/modal";
import { selectedMenuAtom } from "../../../recoil/menu";

import FilterMenuBox from "../blocks/Filter/FilterMenuBox";
import SearchBar from "../../common/SearchBar";

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
  theme: [
    "전체",
    "꽃",
    "반려동물",
    "종교",
    "맹수",
    "해골",
    "다크",
    "가족",
    "용",
    "도깨비",
    "인물",
    "기타",
  ],
  part: [
    "전체",
    "쇄골",
    "팔",
    "다리",
    "손",
    "가슴",
    "허벅지",
    "목",
    "등",
    "옆구리",
    "골반",
    "기타",
  ],
};

function FilterTab() {
  const isMenuOpen = useRecoilValue(isFilterTabOpenAtom);
  const selectedMenu = useRecoilValue(selectedMenuAtom);

  return (
    <>
      {isMenuOpen && (
        <Tab>
          <MenuContainer>
            <FilterMenuBox title="장르별" tags={tagInfo.genere} />
            {selectedMenu !== "아티스트" && (
              <>
                <FilterMenuBox title="주제별" tags={tagInfo.theme} />
                <FilterMenuBox title="부위별" tags={tagInfo.part} />
              </>
            )}
          </MenuContainer>
          <SearchBar />
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
