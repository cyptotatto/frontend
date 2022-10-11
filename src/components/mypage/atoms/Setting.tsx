import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import SettingIcon from "../../../../public/assets/setting.svg";

interface IProps {
  isOpen: boolean;
  onToggleSetting: () => void;
}

function Setting({ isOpen, onToggleSetting }: IProps) {
  const router = useRouter();
  return (
    <Box onClick={onToggleSetting}>
      <SettingBtn>
        <SettingIcon />
      </SettingBtn>
      {isOpen && (
        <OptBox>
          <Opt onClick={() => router.push("/editprofile")}>개인정보수정</Opt>
          <Opt>회원탈퇴</Opt>
        </OptBox>
      )}
    </Box>
  );
}

export default Setting;

const Box = styled.div`
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
