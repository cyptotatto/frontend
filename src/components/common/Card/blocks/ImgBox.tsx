import React from "react";
import styled from "styled-components";

import Image from "next/image";
import HeartBtn from "./HeartBtn";

interface IProps {
  imgUrl: string;
  isHeart: boolean;
}

function ImgBox({ imgUrl, isHeart }: IProps) {
  return (
    <Box>
      <Image id="mainImg" src={imgUrl} width="444" height="310" alt="mainImg" />
      <HeartBtn isHeart={isHeart} />
    </Box>
  );
}

export default ImgBox;

const Box = styled.div`
  position: relative;
  display: flex;
`;
