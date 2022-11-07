import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
function UploadTitle({ title, setTitle }: any) {
  useEffect(() => {
    console.log(title);
  }, [title]);

  const onChangeInput = (e: any) => {
    setTitle(e.target.value);
  };
  return (
    <div>
      <StyledTitle>제목입력</StyledTitle>
      <StyledInput
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={onChangeInput}
      ></StyledInput>
    </div>
  );
}

const StyledTitle = styled.h1`
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

export default UploadTitle;
