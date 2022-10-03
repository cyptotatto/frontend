import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

import ArrowDownIcon from "../../../../../public/assets/arrow_down.svg";

interface IProps {
  isOpen: boolean;
  children: ReactNode;
  onToggleMenu: () => void;
}

function FilterMenu({ children, isOpen, onToggleMenu }: IProps) {
  return (
    <Menu onClick={onToggleMenu}>
      <Title>{children}</Title>
      <MenuArrowIcon isOpen={isOpen} />
    </Menu>
  );
}

export default FilterMenu;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  cursor: pointer;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const MenuArrowIcon = styled((props) => <ArrowDownIcon {...props} />)`
  ${(props) =>
    props.isOpen &&
    css`
      transform: rotate(-180deg);
    `}
`;
