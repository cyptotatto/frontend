import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
function UploadName({ name, setName }: any) {
  const onChangeInput = (e: any) => {
    setName(e.target.value);
  };
  return (
    <div>
      <StyledTitle>닉네임</StyledTitle>
      <StyledInput
        placeholder="닉네임을 입력해주세요."
        value={name}
        onChange={onChangeInput}
      ></StyledInput>
    </div>
  );
}

const StyledTitle = styled.h1`
  margin-top: 32px;
  font-size: 18px;
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

export default UploadName;
