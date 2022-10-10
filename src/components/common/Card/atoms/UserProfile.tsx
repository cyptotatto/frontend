import React from "react";
import styled from "styled-components";

import Image from "next/image";

interface IProps {
  labelText: string;
  userName: string;
  userImgUrl: string;
}

function UserProfile({ labelText, userName, userImgUrl }: IProps) {
  return (
    <Container>
      <Image
        id="userImg"
        src={userImgUrl}
        width="50"
        height="50"
        alt="userImg"
      />
      <InfoBox>
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

  #userImg {
    border-radius: 50%;
    border: none;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  .title {
    color: #bcbcbc;
    font-size: 12px;
    margin-bottom: 5px;
  }

  .userName {
    font-size: 15px;
    font-weight: bold;
  }
`;
