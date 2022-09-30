import React from "react";
import styled from "styled-components";

import Image from "next/image";
import Label from "../atoms/Label";

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
        <Label>{labelText}</Label>
        <Name>{userName}</Name>
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
`;

const Name = styled.span`
  font-size: 15px;
  font-weight: bold;
`;
