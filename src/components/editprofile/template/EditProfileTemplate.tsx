import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import UploadName from "../blocks/UploadName";
import UploadProfile from "../blocks/UploadProfile";
import UploadEmail from "../blocks/UploadEmail";
import UploadBanner from "../blocks/UploadBanner";
import UploadProfileImg from "../blocks/UploadProfileImg";

//create
function EditProfileTemplate() {
  const [bannerImg, setBannerImg] = useState<any>();
  const [bannerImgSrc, setBannerImgSrc] = useState<any>("");
  const [profileImg, setProfileImg] = useState<any>();
  const [profileImgSrc, setProfileImgSrc] = useState<any>("");

  const [name, setName] = useState<string>();
  const [profile, setProfile] = useState<string>();
  const [email, setEmail] = useState<string>();
  const onSubmit = () => {};

  return (
    <Wrap>
      <Title>개인 정보 수정</Title>
      <Styleddiv>
        <UploadBanner
          bannerImg={bannerImg}
          setBannerImg={setBannerImg}
          bannerImgSrc={bannerImgSrc}
          setBannerImgSrc={setBannerImgSrc}
        ></UploadBanner>
        <UploadProfileImg
          profileImg={profileImg}
          setProfileImg={setProfileImg}
          profileImgSrc={profileImgSrc}
          setProfileImgSrc={setProfileImgSrc}
        ></UploadProfileImg>
      </Styleddiv>
      <UploadName name={name} setName={setName}></UploadName>
      <UploadProfile profile={profile} setProfile={setProfile}></UploadProfile>
      <UploadEmail email={email} setEmail={setEmail}></UploadEmail>
      <StyledBtn onClick={onSubmit}>Save</StyledBtn>
    </Wrap>
  );
}

export default EditProfileTemplate;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Styleddiv = styled.div`
  display: inline-block;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;
  margin-right: 270px;
`;

const StyledBtn = styled.button`
  width: 180px;
  height: 50px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 18px;
  line-height: 40px;
  color: #7a7a7a;
  background: #191919;
  margin-top: 64px;

  &:hover {
    color: white;
    background: linear-gradient(45deg, #d13750, #ae2b9e);
  }
`;
