import React from "react";
import styled from "styled-components";
import Image from "next/image";

import SettingIcon from "../../../../public/assets/setting.svg";
import EthereumIcon from "../../../../public/assets/ethereum.svg";
import PencilIcon from "../../../../public/assets/pencil.svg";

function UserInfo() {
  return (
    <Container>
      <CoverImgBox>
        <CoverImg src="" alt="" layout="fill" />
        <EditBtn>
          <PencilIcon />
        </EditBtn>
      </CoverImgBox>
      <InfoBox>
        <UserImgBackground>
          <UserImg
            src="/assets/user_default_img.png"
            alt="userDefaultImg"
            width="154"
            height="154"
          />
        </UserImgBackground>
        <UserNameBox>
          <UserName>UserName</UserName>
          <SettingBtn>
            <SettingIcon />
          </SettingBtn>
        </UserNameBox>
        <AccountNumBox>
          <EthereumIcon />
          <AccountNum>0x0017...1D19</AccountNum>
        </AccountNumBox>
      </InfoBox>
    </Container>
  );
}

export default UserInfo;

const Container = styled.div``;

const CoverImgBox = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
  background: #191919;
  border-radius: 30px;
`;

const CoverImg = styled(Image)``;

const EditBtn = styled.button`
  position: absolute;
  bottom: 18px;
  right: 18px;
  padding: 8px 8px 4px 8px;
  border-radius: 10px;
  background: #2b2b2b;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const InfoBox = styled.div`
  margin-top: -140px;
  padding: 30px;
`;

const UserImgBackground = styled.div`
  position: relative;
  width: 168px;
  height: 168px;
  padding: 7px;
  background: black;
  border-radius: 50%;
  z-index: 1;
`;

const UserImg = styled(Image)`
  border-radius: 50%;
  z-index: 2;
`;

const UserNameBox = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0 8px 0;
`;

const UserName = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin: 0;
`;

const SettingBtn = styled.button`
  background: #191919;
  height: fit-content;
  margin: 0 0 -10px 12px;
  padding: 10px 10px 6px 10px;
  border-radius: 10px;
`;

const AccountNumBox = styled.div`
  display: flex;
  align-items: center;
`;

const AccountNum = styled.span`
  font-weight: 500;
  color: #7a7a7a;
  margin-left: 5px;
`;
