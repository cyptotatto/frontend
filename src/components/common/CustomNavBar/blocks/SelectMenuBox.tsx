import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styled from "styled-components";

interface IProps {
  menu: string[];
}

type MenuPropsType = {
  isActive?: boolean;
};

function SelectMenuBox({ menu }: IProps) {
  const { query } = useRouter();

  return (
    <Box>
      {menu.map((menuName, i) => (
        <Link key={i} href={menuName.toLowerCase()}>
          <a>
            <TabMenuWrap>
              <TabMenu isActive={menuName.toLowerCase() === query.menu}>
                {menuName}
              </TabMenu>
              {menuName.toLowerCase() === query.menu && <UnderLine />}
            </TabMenuWrap>
          </a>
        </Link>
      ))}
    </Box>
  );
}

export default SelectMenuBox;

const Box = styled.div`
  display: flex;
`;

const TabMenuWrap = styled.div`
  position: relative;
`;

const TabMenu = styled.button<MenuPropsType>`
  background: none;
  color: ${(props) => (props.isActive ? "#C23270" : "white")};
  font-size: 15px;
  font-weight: 600;
  min-width: 87px;
  padding: 12px;
  height: 100%;
`;

const UnderLine = styled.div`
  height: 3px;
  margin-bottom: -2px;
  background: linear-gradient(90deg, #d1374e 18.55%, #ac2aa1 96.67%);
`;
