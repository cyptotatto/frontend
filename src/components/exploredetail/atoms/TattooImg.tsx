import React from "react";
import styled from "styled-components";
import Image from "next/image";

interface IProps {
  type: string;
  imgUrl: string;
}

type CustomImgPropsType = {
  type: string;
};

function TattooImg({ type, imgUrl }: IProps) {
  return (
    <UserImgBackground>
      <CustomImg
        width="640px"
        height="640px"
        type={type}
        src={imgUrl}
        alt="userDefaultImg"
      />
    </UserImgBackground>
  );
}

export default TattooImg;

const UserImgBackground = styled.div``;

const CustomImg = styled(Image)<CustomImgPropsType>`
  border-radius: 10px;
  border: 6px solid black;
`;
