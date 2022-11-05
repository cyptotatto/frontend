import React from "react";
import styled from "styled-components";

import Image from "next/image";
import HeartBtn from "../atoms/HeartBtn";
import { useRouter } from "next/router";

interface IProps {
  imgUrl: string;
  isHeart: boolean;
}

function ImgBox({ imgUrl, isHeart }: IProps) {
  const router = useRouter();
  return (
    <Box>
      <ImageWrap>
        <Image
          id="mainImg"
          src={imgUrl}
          width={664}
          height={464}
          objectFit="contain"
          alt="mainImg"
        />
      </ImageWrap>
      <HeartBtn isHeart={isHeart} />
    </Box>
  );
}

export default ImgBox;

const Box = styled.div`
  position: relative;
  display: flex;
`;

const ImageWrap = styled.div`
  cursor: pointer;
`;
