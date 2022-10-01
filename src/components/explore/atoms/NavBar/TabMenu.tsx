import React, { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
  isActive?: boolean;
  onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

type MenuPropsType = {
  isActive?: boolean;
};

function TabMenu({ children, isActive, onClickHandler }: IProps) {
  return (
    <Menu isActive={isActive} onClick={onClickHandler}>
      {children}
    </Menu>
  );
}

export default TabMenu;

const Menu = styled.button<MenuPropsType>`
  background: none;
  color: ${(props) => (props.isActive ? "#C23270" : "white")};
  font-size: 15px;
  font-weight: 600;
  padding: 12px 0;
  width: 80px;
  height: 100%;
`;
