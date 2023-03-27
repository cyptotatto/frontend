import React from "react";
import Link from "next/link";

import styled from "styled-components";
import HomeTitle from "../../common/HomeTitle";
import DesignBox from "../block/DesignRanking/DesignBox";

function DesignRanking() {
  return (
    <Wrap>
      <Link href="/explore/designs">
        <a>
          <HomeTitle>도안 Top100 🔥</HomeTitle>
        </a>
      </Link>
      <DesignBox />
    </Wrap>
  );
}

export default DesignRanking;

const Wrap = styled.div`
  padding: 120px 7%;
`;
