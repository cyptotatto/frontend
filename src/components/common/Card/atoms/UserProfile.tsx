import React from "react";
import styled, { css } from "styled-components";

import Image from "next/image";

interface IProps {
  type: string;
  labelText: string;
  userName: string;
  userImgUrl: string;
}

type ProfilePropsType = {
  type: string;
};

function UserProfile({ type, labelText, userName, userImgUrl }: IProps) {
  return (
    <Container>
      <ImageWrap type={type}>
        <Image id="userImg" src={userImgUrl} layout="fill" alt="userImg" />
      </ImageWrap>
      <InfoBox type={type}>
        <label className="title">{labelText}</label>
        <span className="userName">{userName}</span>
      </InfoBox>
    </Container>
  );
}

export default UserProfile;

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const ImageWrap = styled.div<ProfilePropsType>`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;

  ${(props) =>
    props.type === "artist" &&
    css`
      position: absolute;
      width: 60px;
      height: 60px;
      border: 5px solid black;
      top: -55px;
      left: 15px;
    `}

  #userImg {
    border-radius: 50%;
    border: none;
  }
`;

const InfoBox = styled.div<ProfilePropsType>`
  display: flex;
  flex-direction: column;

  .title {
    color: #bcbcbc;
    font-size: 12px;
    margin-bottom: 5px;

    ${(props) =>
      props.type === "artist" &&
      css`
        margin-top: 10px;
      `}
  }

  .userName {
    font-size: 15px;
    font-weight: bold;

    ${(props) =>
      props.type === "artist" &&
      css`
        font-size: 24px;
        margin-bottom: -10px;
      `}
  }
`;
