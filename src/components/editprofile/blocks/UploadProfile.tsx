import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
function UploadProfile({ profile, setProfile }: any) {
  const onChangeInput = (e: any) => {
    setProfile(e.target.value);
  };
  return (
    <div>
      <StyledTitle>프로필 소개</StyledTitle>
      <StyledDescript>
        자신을 소개할 수 있는 간단한 프로필을 작성해주세요
      </StyledDescript>
      <StyledInput
        placeholder="프로필을 입력해주세요."
        value={profile}
        onChange={setProfile}
      ></StyledInput>
    </div>
  );
}

const StyledTitle = styled.h1`
  font-size: 18px;
  margin-top: 32px;
`;
const StyledDescript = styled.h1`
  font-weight: 500;
  font-size: 12px;
  color: #7a7a7a;
`;

const StyledInput = styled.input`
  width: 640px;
  height: 48px;
  color: white;
  background: #191919;
  border-radius: 10px;
  border: 2px solid #191919;
  outline: none;
`;

export default UploadProfile;
