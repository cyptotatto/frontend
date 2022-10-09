import React from "react";
import styled from "styled-components";

import CoverImgBox from "../atoms/CoverImgBox";
import UserInfo from "../atoms/UserInfo";

export type InfoType = {
  username: string;
  userImgUrl: string;
  userCoverImgUrl: string;
  accountNum: string;
};

const userInfo: InfoType = {
  username: "UserName",
  userImgUrl: "/assets/user_default_img.png",
  userCoverImgUrl: "/",
  accountNum: "0x0017...1D19",
};

function UserProfile() {
  return (
    <Container>
      <CoverImgBox imgUrl={userInfo.userCoverImgUrl} />
      <UserInfo info={userInfo} />
    </Container>
  );
}

export default UserProfile;

const Container = styled.div``;
