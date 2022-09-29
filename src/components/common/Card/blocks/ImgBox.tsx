import React from "react";
import styled from "styled-components";

import Image from "next/image";
import HeartBtn from "./HeartBtn";

function ImgBox() {
  return (
    <Box>
      <Image
        id="mainImg"
        src="/assets/tattoo_img.png"
        width="444"
        height="310"
        alt="mainImg"
      />
      <HeartBtn />
    </Box>
  );
}

export default ImgBox;

const Box = styled.div`
  position: relative;
  display: flex;
`;
