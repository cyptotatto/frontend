import React from "react";
import styled from "styled-components";
import Image from "next/image";

interface IProps {
  imgUrl: string;
}

function UserImg({ imgUrl }: IProps) {
  return (
    <UserImgBackground>
      <CustomImg src={imgUrl} alt="userDefaultImg" layout="fill" />
    </UserImgBackground>
  );
}

export default UserImg;

const UserImgBackground = styled.div`
  position: relative;
  width: 168px;
  height: 168px;
  border-radius: 50%;
  z-index: 1;
`;

const CustomImg = styled(Image)`
  width: 154px;
  height: 154px;
  border-radius: 50%;
  border: 6px solid black !important;
  z-index: 2;
`;
