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

function UserImg({ type, imgUrl }: IProps) {
  return (
    <UserImgBackground>
      <CustomImg type={type} src={imgUrl} alt="userDefaultImg" layout="fill" />
    </UserImgBackground>
  );
}

export default UserImg;

const UserImgBackground = styled.div`
  position: relative;
  width: 168px;
  height: 168px;
  z-index: 1;
`;

const CustomImg = styled(Image)<CustomImgPropsType>`
  width: 154px;
  height: 154px;
  border-radius: ${(props) => (props.type === "circle" ? "50%" : "25px")};
  border: 6px solid black !important;
  z-index: 2;
`;
