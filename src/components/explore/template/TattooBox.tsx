import React from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { selectedMenuAtom } from "../../../recoil/menu";

import Card from "../../common/Card";

function TattoBox() {
  const selectedMenu = useRecoilValue(selectedMenuAtom);
  const type = selectedMenu === "도안" ? "art" : "artist";

  return (
    <Box>
      <Card type={type} />
      <Card type={type} />
      <Card />
      <Card />
    </Box>
  );
}

export default TattoBox;

const Box = styled.div``;
