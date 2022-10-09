import React, { useState } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";

import { InfoType } from "../blocks/UserProfile";

import SettingIcon from "../../../../public/assets/setting.svg";
import EthereumIcon from "../../../../public/assets/ethereum.svg";
import ArrowDownIcon from "../../../../public/assets/arrow_down.svg";

interface IProps {
  info: InfoType;
}

interface IntroPropsType {
  isOpen: boolean;
}

function UserInfo({ info }: IProps) {
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [isFoldOpen, setIsFoldOpen] = useState(false);

  const onToggleSetting = () => setIsSettingOpen((prev) => !prev);
  const onToggleFold = () => setIsFoldOpen((prev) => !prev);

  return (
    <InfoBox>
      <UserImgBackground>
        <UserImg
          src={info.userImgUrl}
          alt="userDefaultImg"
          width="154"
          height="154"
        />
      </UserImgBackground>
      <UserNameBox>
        <UserName>{info.username}</UserName>
        <Setting onClick={onToggleSetting}>
          <SettingBtn>
            <SettingIcon />
          </SettingBtn>
          {isSettingOpen && (
            <OptBox>
              <Opt>개인정보수정</Opt>
              <Opt>회원탈퇴</Opt>
            </OptBox>
          )}
        </Setting>
      </UserNameBox>
      <AccountNumBox>
        <EthereumIcon />
        <AccountNum>{info.accountNum}</AccountNum>
      </AccountNumBox>
      <IntroBox>
        <Intro isOpen={isFoldOpen}>{info.intro}</Intro>
        <FoldBox onClick={onToggleFold}>
          <strong className="foldText">
            {isFoldOpen ? "see Less" : "see More"}
          </strong>
          <ArrowIcon isopen={isFoldOpen.toString()} />
        </FoldBox>
      </IntroBox>
    </InfoBox>
  );
}

export default UserInfo;

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

const Setting = styled.div`
  position: relative;
`;

const SettingBtn = styled.button`
  background: #191919;
  height: fit-content;
  margin: 0 0 -10px 12px;
  padding: 10px 10px 6px 10px;
  border-radius: 10px;
`;

const OptBox = styled.div`
  position: absolute;
  top: 44px;
  left: 11px;
  width: 110px;
  font-size: 12px;
  z-index: 2;
`;

const Opt = styled.div`
  padding: 14px 8px;
  background: #191919;

  cursor: pointer;

  &:hover {
    background: #2b2b2b;
  }

  &:first-child {
    border-radius: 10px 10px 0 0;
  }

  &:last-child {
    border-radius: 0 0 10px 10px;
  }
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

const IntroBox = styled.div``;

const Intro = styled.p<IntroPropsType>`
  color: #7a7a7a;
  font-weight: 500;
  white-space: pre-wrap;

  ${(props) =>
    !props.isOpen &&
    css`
      height: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
    `};
`;

const FoldBox = styled.div`
  cursor: pointer;

  .foldText {
    font-size: 15px;
    text-decoration: underline;
    margin-right: 8px;
  }
`;

const ArrowIcon = styled((props) => <ArrowDownIcon {...props} />)`
  ${(props) =>
    props.isopen === "true" &&
    css`
      transform: rotate(180deg);
    `}
`;
