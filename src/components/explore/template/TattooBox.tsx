import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import Card from "../../common/Card";

function TattoBox() {
  const { query } = useRouter();
  const type = query.menu === "artists" ? "artist" : "art";

  return (
    <Box>
      <Card type={type} />
      <Card type={type} />
      <Card type={type} />
      <Card type={type} />
      <Card type={type} />
      <Card type={type} />
      <Card type={type} />
    </Box>
  );
}

export default TattoBox;

const Box = styled.div``;
