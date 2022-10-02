import { Props } from "next/script";
import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
function UploadDescript({ descript, setDescript }: any) {
  useEffect(() => {
    console.log(descript);
  }, [descript]);

  const onChangeInput = (e: any) => {
    setDescript(e.target.value);
  };
  return (
    <div>
      <StyledTitle>작업 설명 입력</StyledTitle>
      <StyledInput
        placeholder="작업에 대해 설명해주세요."
        value={descript}
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
  height: 76px;
  color: white;
  background: #191919;
  border-radius: 10px;
  border: 2px solid #191919;
  outline: none;
`;

export default UploadDescript;
