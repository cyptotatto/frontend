import React, { useState } from "react";
import styled, { css } from "styled-components";

import { useRecoilState } from "recoil";
import { isFilterTabOpenAtom } from "../../../../recoil/modal";

import ArrowLeftIcon from "../../../../../public/assets/arrow_left.svg";
import FilterIcon from "../../../../../public/assets/filter.svg";

type FilterMenuPropsType = {
  isOpen: boolean;
};

function FilterTabMenuBox() {
  const [isTabOpen, setIsTabOpen] = useRecoilState(isFilterTabOpenAtom);

  const onToggleFilter = () => setIsTabOpen((prev) => !prev);

  return (
    <Box isOpen={isTabOpen}>
      {isTabOpen ? (
        <FilterMenu onClick={onToggleFilter}>
          <ArrowLeftIcon />
          <Text>Filters</Text>
        </FilterMenu>
      ) : (
        <StyledFilterIcon
          onClick={onToggleFilter}
          style={{ verticalAlign: "middle" }}
        />
      )}
    </Box>
  );
}

export default FilterTabMenuBox;

const Box = styled.div<FilterMenuPropsType>`
  ${(props) =>
    props.isOpen &&
    css`
      width: 328px;
    `}
`;

const FilterMenu = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const Text = styled.span`
  color: #c23270;
  font-size: 15px;
  margin-left: 5px;
`;

const StyledFilterIcon = styled((props) => <FilterIcon {...props} />)`
  margin: 12px 16px;
  cursor: pointer;
`;
