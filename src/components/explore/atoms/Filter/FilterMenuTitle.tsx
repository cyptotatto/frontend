import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

import ArrowDownIcon from "../../../../../public/assets/arrow_down.svg";

interface IProps {
  isOpen: boolean;
  children: ReactNode;
  onToggleMenu: () => void;
}

function FilterMenuTitle({ children, isOpen, onToggleMenu }: IProps) {
  return (
    <Menu onClick={onToggleMenu}>
      <span className="title">{children}</span>
      <MenuArrowIcon isOpen={isOpen} />
    </Menu>
  );
}

export default FilterMenuTitle;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  cursor: pointer;

  .title {
    font-size: 18px;
    font-weight: 600;
  }
`;

const MenuArrowIcon = styled((props) => <ArrowDownIcon {...props} />)`
  ${(props) =>
    props.isOpen &&
    css`
      transform: rotate(-180deg);
    `}
`;
